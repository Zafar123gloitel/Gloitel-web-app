'use client';

import { ArrowRightIcon } from 'lucide-react';
import { useRef, useState, type ChangeEvent, type DragEvent, type FormEvent } from 'react';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  message: string;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  message: '',
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const UploadCloudIcon = () => (
  <svg width='28' height='28' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M7 17.5A4.5 4.5 0 0 1 7.5 8.6a5.5 5.5 0 0 1 10.65 1.24A4 4 0 0 1 17.5 17.5H7Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinejoin='round'
    />
    <path
      d='M12 11v6M12 11l-2.5 2.5M12 11l2.5 2.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default function CareerApplicationForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [resume, setResume] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData(prev => ({
      ...prev,
      [name as keyof FormState]: value,
    }));
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = event.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: digitsOnly }));
  };

  const validateFile = (file: File) => {
    setFileError('');

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setFileError('Please upload a PDF, DOC or DOCX file.');
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError('File size must be less than 5 MB.');
      return false;
    }

    return true;
  };

  const handleFile = (file?: File) => {
    if (!file) return;

    if (!validateFile(file)) {
      setResume(null);
      return;
    }

    setResume(file);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0]);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const removeResume = () => {
    setResume(null);
    setFileError('');

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!resume) {
      setFileError('Please upload your resume.');
      return;
    }

    if (formData.phone.length !== 10) {
      setSubmitError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = new FormData();
      payload.append('fullName', formData.fullName);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('location', formData.location);
      payload.append('linkedin', formData.linkedin);
      payload.append('message', formData.message);
      payload.append('resume', resume);

      const response = await fetch('/api/career/apply', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitSuccess(true);
      setFormData(initialState);
      setResume(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className={`grid grid-cols-1 gap-x-4 gap-y-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        {/* Full Name */}
        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-white/80'>
            Full Name <span className='text-blue-500'>*</span>
          </span>
          <input
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder='Enter your full name'
            required
            className='h-11 w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 text-sm text-white transition outline-none placeholder:text-white/35 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20'
          />
        </label>

        {/* Email */}
        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-white/80'>
            Email Address <span className='text-blue-500'>*</span>
          </span>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email address'
            required
            className='h-11 w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 text-sm text-white transition outline-none placeholder:text-white/35 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20'
          />
        </label>

        {/* Phone */}
        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-white/80'>
            Phone Number <span className='text-blue-500'>*</span>
          </span>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder='Enter your phone number'
            maxLength={10}
            required
            className='h-11 w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 text-sm text-white transition outline-none placeholder:text-white/35 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20'
          />
        </label>

        {/* Location */}
        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-white/80'>
            Current Location <span className='text-blue-500'>*</span>
          </span>
          <input
            name='location'
            value={formData.location}
            onChange={handleChange}
            placeholder='City, State'
            required
            className='h-11 w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 text-sm text-white transition outline-none placeholder:text-white/35 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20'
          />
        </label>

        {/* LinkedIn */}
        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-white/80'>
            LinkedIn / Portfolio URL
          </span>
          <input
            name='linkedin'
            value={formData.linkedin}
            onChange={handleChange}
            placeholder='Paste your profile URL'
            className='h-11 w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 text-sm text-white transition outline-none placeholder:text-white/35 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20'
          />
        </label>

        {/* Resume */}
        <div className={`block ${compact ? '' : 'md:row-span-2'}`}>
          <span className='mb-2 block text-sm font-medium text-white/80'>
            Upload Resume <span className='text-blue-500'>*</span>
          </span>
          <input
            ref={fileInputRef}
            type='file'
            accept='.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            onChange={handleFileChange}
            className='hidden'
          />
          {!resume ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className='flex min-h-[128px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-blue-500/80 bg-[#0b1020] px-4 py-6 text-center transition hover:bg-blue-500/5'
            >
              <div className='mb-2 text-blue-500'>
                <UploadCloudIcon />
              </div>
              <div className='text-sm text-white'>
                <span className='font-semibold'>Click to upload</span> or drag and drop
              </div>
              <div className='mt-1 text-xs text-white/45'>PDF, DOC or DOCX (Max 5 MB)</div>
            </div>
          ) : (
            <div className='flex min-h-[128px] items-center justify-between rounded-xl border border-blue-500/50 bg-[#0b1020] px-4 py-4'>
              <div className='min-w-0'>
                <p className='truncate text-sm font-medium text-white'>{resume.name}</p>
                <p className='mt-1 text-xs text-white/45'>
                  {(resume.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <button
                type='button'
                onClick={removeResume}
                className='ml-4 shrink-0 text-sm text-red-400 transition hover:text-red-300'
              >
                Remove
              </button>
            </div>
          )}
          {fileError && <p className='mt-2 text-xs text-red-400'>{fileError}</p>}
        </div>

        {/* Message */}
        <label className='block'>
          <span className='mb-2 block text-sm font-medium text-white/80'>Message</span>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Tell us briefly about yourself'
            rows={4}
            className='w-full resize-none rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-sm text-white transition outline-none placeholder:text-white/35 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20'
          />
        </label>
      </div>

      {submitError && <p className='text-center text-sm text-red-400'>{submitError}</p>}
      {submitSuccess && (
        <p className='text-center text-sm text-green-400'>Application submitted successfully!</p>
      )}

      <button
        type='submit'
        disabled={isSubmitting}
        className='inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] disabled:opacity-60'
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
        <ArrowRightIcon size={20} />
      </button>

      <p className='text-center text-xs text-white/45'>
        Your information will only be used for recruitment purposes.
      </p>
    </form>
  );
}
