import { MongoClient } from 'mongodb';

import { CloudinaryService } from '@/lib/cloudinary';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const COLLECTION_NAME = 'job_applications';
const CLOUDINARY_FOLDER = 'Gloitel/career-resumes';
const ALLOWED_FILE_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

let clientPromise: Promise<MongoClient> | undefined;

/**
 * Creates and reuses a MongoDB connection across requests.
 * A failed connection is cleared so that a later request can retry safely.
 */
function getMongoClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not configured');
  }

  clientPromise ??= new MongoClient(uri).connect().catch(error => {
    clientPromise = undefined;
    throw error;
  });

  return clientPromise;
}

/**
 * Reads a text field from multipart form data and removes unnecessary surrounding whitespace.
 */
function getTextField(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === 'string' ? value.trim() : '';
}

/**
 * Converts a query parameter into a positive integer while enforcing a maximum value.
 * Pagination limits prevent a single request from loading an excessive number of records.
 */
function getPaginationValue(value: string | null, fallback: number, maximum: number) {
  const parsedValue = Number(value);

  if (!Number.isInteger(parsedValue) || parsedValue < 1) {
    return fallback;
  }

  return Math.min(parsedValue, maximum);
}

/**
 * Returns job applications in reverse chronological order together with pagination metadata.
 * Server-side administrator authentication should protect this endpoint before production use.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = getPaginationValue(searchParams.get('page'), 1, 100000);
    const limit = getPaginationValue(searchParams.get('limit'), 20, 100);
    const skip = (page - 1) * limit;
    const client = await getMongoClient();
    const collection = client.db().collection(COLLECTION_NAME);

    const [applications, total] = await Promise.all([
      collection
        .find({}, { projection: { 'resume.data': 0 } })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      collection.countDocuments(),
    ]);

    return Response.json({
      success: true,
      data: applications.map(application => ({
        ...application,
        _id: application._id.toString(),
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch {
    return Response.json(
      { success: false, message: 'Failed to retrieve job applications' },
      { status: 500 },
    );
  }
}

/**
 * Validates the career application, uploads the resume to Cloudinary, and stores only its URL
 * and reference metadata with the applicant details in MongoDB.
 */
export async function POST(request: Request) {
  let uploadedResume: { publicId: string; resourceType: 'raw' } | undefined;

  try {
    const formData = await request.formData();
    const fullName = getTextField(formData, 'fullName');
    const email = getTextField(formData, 'email');
    const phone = getTextField(formData, 'phone');
    const location = getTextField(formData, 'location');
    const linkedin = getTextField(formData, 'linkedin');
    const message = getTextField(formData, 'message');
    const resume = formData.get('resume');

    if (!fullName || !email || !phone || !location) {
      return Response.json(
        { success: false, message: 'Full name, email, phone and location are required' },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 },
      );
    }

    if (!/^\d{10}$/.test(phone)) {
      return Response.json(
        { success: false, message: 'Please enter a valid 10-digit phone number' },
        { status: 400 },
      );
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return Response.json(
        { success: false, message: 'Please upload your resume' },
        { status: 400 },
      );
    }

    if (!ALLOWED_FILE_TYPES.has(resume.type)) {
      return Response.json(
        { success: false, message: 'Resume must be a PDF, DOC or DOCX file' },
        { status: 400 },
      );
    }

    if (resume.size > MAX_FILE_SIZE) {
      return Response.json(
        { success: false, message: 'Resume size must be less than 5 MB' },
        { status: 400 },
      );
    }

    // The shared upload utility can also be reused by blog, profile, and other backend routes.
    const cloudinaryResult = await CloudinaryService.uploadMedia(resume, CLOUDINARY_FOLDER, 'raw');

    uploadedResume = {
      publicId: cloudinaryResult.public_id,
      resourceType: 'raw',
    };

    const client = await getMongoClient();

    // MongoDB stores the Cloudinary URL and metadata instead of the resume binary data.
    await client
      .db()
      .collection(COLLECTION_NAME)
      .insertOne({
        fullName,
        email: email.toLowerCase(),
        phone,
        location,
        linkedin,
        message,
        resume: {
          url: cloudinaryResult.secure_url,
          publicId: cloudinaryResult.public_id,
          resourceType: cloudinaryResult.resource_type,
          fileName: resume.name,
          contentType: resume.type,
          size: resume.size,
        },
        status: 'new',
        createdAt: new Date(),
      });

    return Response.json(
      {
        success: true,
        message: 'Application submitted successfully',
        data: { resumeUrl: cloudinaryResult.secure_url },
      },
      { status: 201 },
    );
  } catch {
    // Remove the uploaded resume if MongoDB persistence fails after the Cloudinary upload.
    if (uploadedResume) {
      try {
        await CloudinaryService.deleteMedia(uploadedResume.publicId, uploadedResume.resourceType);
      } catch {
        // Cleanup errors must not replace the original application submission failure.
      }
    }

    return Response.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 },
    );
  }
}
