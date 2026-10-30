import 'server-only';

import { Buffer } from 'node:buffer';
import {
  v2 as cloudinary,
  type UploadApiErrorResponse,
  type UploadApiOptions,
  type UploadApiResponse,
  type ResourceType,
} from 'cloudinary';

/** Configure on use so database-only routes do not require media credentials. */
function configureCloudinary() {
  // The SDK reads CLOUDINARY_URL automatically. Explicit variables override it.
  const existing = cloudinary.config();
  const cloudName =
    process.env.CLOUDINARY_CLOUD_NAME || process.env.cloud_name || existing.cloud_name;
  const apiKey = process.env.CLOUDINARY_API_KEY || process.env.API_Key || existing.api_key;
  const apiSecret =
    process.env.CLOUDINARY_API_SECRET || process.env.API_Secret || existing.api_secret;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      'Missing Cloudinary configuration. Set CLOUDINARY_URL or CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.',
    );
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });
  return { cloudName, apiKey, apiSecret };
}

/**
 * CloudinaryService
 * A reusable service for interacting with Cloudinary for CRUD operations on media files.
 */
export class CloudinaryService {
  /**
   * Upload media to Cloudinary
   *
   * @param file - The file to upload. Can be a base64 string, URL, or a Buffer.
   * @param folder - The folder in Cloudinary where the file should be stored.
   * @param resourceType - The type of resource ('image', 'video', 'raw', 'auto').
   * @param options - Additional upload options (e.g. format, public_id).
   * @returns A promise that resolves to the upload response.
   */
  static async uploadMedia(
    file: string | Buffer | File,
    folder: string = 'general',
    resourceType: 'image' | 'video' | 'raw' | 'auto' = 'auto',
    options?: Partial<UploadApiOptions>,
  ): Promise<UploadApiResponse> {
    configureCloudinary();
    const uploadOptions: UploadApiOptions = {
      folder,
      resource_type: resourceType,
      secure: true,
      ...options,
    };

    let fileToUpload: string | Buffer;

    if (typeof file === 'object' && 'arrayBuffer' in file) {
      const arrayBuffer = await file.arrayBuffer();
      fileToUpload = Buffer.from(arrayBuffer);
    } else {
      fileToUpload = file as string | Buffer;
    }

    return new Promise((resolve, reject) => {
      const handleResult = (error?: UploadApiErrorResponse, result?: UploadApiResponse) => {
        if (error) {
          reject(error);
          return;
        }

        if (!result) {
          reject(new Error('Cloudinary did not return an upload result.'));
          return;
        }

        resolve(result);
      };

      if (Buffer.isBuffer(fileToUpload)) {
        const uploadStream = cloudinary.uploader.upload_stream(uploadOptions, handleResult);
        uploadStream.end(fileToUpload);
        return;
      }

      cloudinary.uploader.upload(fileToUpload, uploadOptions, handleResult);
    });
  }

  /**
   * Specifically for uploading videos with eager transformations (e.g., resizing, cropping).
   */
  static async uploadVideo(
    file: string | Buffer | File,
    folder: string = 'videos',
    options?: Partial<UploadApiOptions>,
  ): Promise<UploadApiResponse> {
    return this.uploadMedia(file, folder, 'video', {
      chunk_size: 6000000,
      eager: [
        { width: 300, height: 300, crop: 'pad', audio_codec: 'none' },
        { width: 160, height: 100, crop: 'crop', gravity: 'south', audio_codec: 'none' },
      ],
      eager_async: true,
      ...options,
    });
  }

  /**
   * Overwrite an existing media file in Cloudinary and invalidate the CDN cache.
   */
  static async overwriteMedia(
    publicId: string,
    file: string | Buffer | File,
    folder?: string,
    resourceType: 'image' | 'video' | 'raw' | 'auto' = 'auto',
  ): Promise<UploadApiResponse> {
    return this.uploadMedia(file, folder ?? '', resourceType, {
      public_id: publicId,
      overwrite: true,
      invalidate: true,
    });
  }

  /**
   * Delete media from Cloudinary
   */
  static async deleteMedia(
    publicId: string,
    resourceType: ResourceType = 'image',
  ): Promise<{ result: string }> {
    configureCloudinary();
    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(publicId, { resource_type: resourceType }, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  /**
   * Get an optimized media URL for an existing asset
   */
  static getMediaUrl(publicId: string, options?: Record<string, unknown>): string {
    configureCloudinary();
    return cloudinary.url(publicId, {
      secure: true,
      ...options,
    });
  }

  /**
   * Update/Rename media in Cloudinary
   */
  static async renameMedia(
    fromPublicId: string,
    toPublicId: string,
    options?: { overwrite?: boolean; resource_type?: string },
  ): Promise<unknown> {
    configureCloudinary();
    return new Promise((resolve, reject) => {
      cloudinary.uploader.rename(fromPublicId, toPublicId, options, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  /**
   * Create a folder in Cloudinary
   */
  static async createFolder(cloudFolderName: string): Promise<unknown> {
    configureCloudinary();
    return cloudinary.api.create_folder(cloudFolderName, { type: 'upload', resource_type: 'auto' });
  }

  /**
   * Delete an empty folder in Cloudinary
   */
  static async deleteEmptyFolder(cloudFolderName: string): Promise<void> {
    configureCloudinary();
    await cloudinary.api.delete_folder(cloudFolderName);
  }

  /**
   * Delete a folder and all resources inside it
   */
  static async deleteFolderAndResources(cloudFolderName: string): Promise<unknown> {
    configureCloudinary();
    // Delete all resources inside the specified folder
    const response = await cloudinary.api.delete_resources_by_prefix(`${cloudFolderName}/`);
    // Delete the empty folder itself
    await cloudinary.api.delete_folder(cloudFolderName);
    return response;
  }

  /**
   * Generate an upload signature for client-side uploads
   */
  static generateUploadSignature(paramsToSign: Record<string, unknown>) {
    const { apiSecret } = configureCloudinary();
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp,
        ...paramsToSign,
      },
      apiSecret,
    );

    return {
      timestamp,
      signature,
    };
  }

  static generatePresignedUrl(folder: string, resourceType: 'image' | 'video' | 'raw' = 'image') {
    const { cloudName, apiKey } = configureCloudinary();
    const timestamp = Math.round(Date.now() / 1000);
    const signatureData = CloudinaryService.generateUploadSignature({ folder, timestamp });

    // Construct the URL with query parameters
    const baseUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
    const params = new URLSearchParams({
      api_key: apiKey,
      timestamp: signatureData.timestamp.toString(),
      signature: signatureData.signature,
      folder: folder,
    });
    const presignedUrl = `${baseUrl}?${params.toString()}`;
    return presignedUrl;
  }
}
