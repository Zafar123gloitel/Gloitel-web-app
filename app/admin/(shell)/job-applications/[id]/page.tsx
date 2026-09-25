'use client';

import type { JobApplication } from '@/components/admin/JobApplicationsTable';
import PageLoader from '@/components/PageLoader';

import {
  ArrowLeft,
  Briefcase,
  Building2,
  Calendar,
  Download,
  FileText,
  Link2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type DetailRow = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

function formatDate(date?: string) {
  if (!date) return '—';
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatSize(bytes?: number) {
  if (!bytes) return '';
  return ` · ${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function JobApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [application, setApplication] = useState<JobApplication | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    setError('');

    fetch(`/api/career/apply/${id}`, { cache: 'no-store' })
      .then(async res => {
        const result = await res.json();
        if (!res.ok || !result.success) throw new Error(result.message || 'Failed to load');
        setApplication(result.data as JobApplication);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Failed to load application');
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const iconClass = 'mt-0.5 shrink-0 text-[#5b8def]';
  const labelClass = 'text-xs font-medium text-[#969696]';
  const valueClass = 'text-sm text-white';

  function statusColor(status: string) {
    if (status === 'new') return 'bg-blue-500/15 text-blue-400';
    if (status === 'reviewed') return 'bg-yellow-500/15 text-yellow-400';
    if (status === 'shortlisted') return 'bg-green-500/15 text-green-400';
    if (status === 'rejected') return 'bg-red-500/15 text-red-400';
    return 'bg-white/10 text-[#cccccc]';
  }

  return (
    <div className='space-y-6'>
      {/* Back */}
      <Link
        href='/admin/job-applications'
        className='inline-flex items-center gap-2 text-sm text-[#969696] transition-colors hover:text-white'
      >
        <ArrowLeft size={16} />
        Back to Applications
      </Link>

      {isLoading && <PageLoader className='rounded-xl border border-white/10 bg-[#0f0f0f]' />}

      {error && !isLoading && (
        <div className='rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-4 text-sm text-red-400'>
          {error}
        </div>
      )}

      {application && !isLoading && (
        <>
          {/* Header */}
          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div>
              <h2 className='text-lg font-bold text-white'>{application.fullName}</h2>
              <p className='mt-0.5 text-sm text-[#969696]'>
                Applied on {formatDate(application.createdAt || application.creaetdAt)}
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium capitalize ${statusColor(application.status)}`}
            >
              <span className='h-1.5 w-1.5 rounded-full bg-current' />
              {application.status || 'new'}
            </span>
          </div>

          {/* Applied Role Card */}
          {application.jobDetail ? (
            <div className='rounded-xl border border-[#1447e6]/30 bg-[#1447e6]/8 p-5'>
              <p className='mb-3 text-xs font-semibold tracking-wider text-[#5b8def] uppercase'>
                Applied Role
              </p>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                <div className='flex items-start gap-3'>
                  <Briefcase size={16} className={iconClass} />
                  <div>
                    <p className={labelClass}>Job Title</p>
                    <p className={valueClass}>{application.jobDetail.title}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Building2 size={16} className={iconClass} />
                  <div>
                    <p className={labelClass}>Department</p>
                    <p className={valueClass}>{application.jobDetail.department}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <FileText size={16} className={iconClass} />
                  <div>
                    <p className={labelClass}>Job Type</p>
                    <p className={`${valueClass} capitalize`}>
                      {application.jobDetail.type.replace('-', ' ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='rounded-xl border border-white/10 bg-[#111111] p-4 text-sm text-[#555555]'>
              No specific role linked to this application.
            </div>
          )}

          {/* Details grid */}
          <div className='rounded-xl border border-white/10 bg-[#111111] p-6'>
            <p className='mb-4 text-xs font-semibold tracking-wider text-[#969696] uppercase'>
              Applicant Details
            </p>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
              {(
                [
                  {
                    icon: <User size={15} className={iconClass} />,
                    label: 'Full Name',
                    value: application.fullName,
                  },
                  {
                    icon: <Mail size={15} className={iconClass} />,
                    label: 'Email',
                    value: (
                      <a
                        href={`mailto:${application.email}`}
                        className='text-[#5b8def] hover:underline'
                      >
                        {application.email}
                      </a>
                    ),
                  },
                  {
                    icon: <Phone size={15} className={iconClass} />,
                    label: 'Phone',
                    value: (
                      <a
                        href={`tel:${application.phone}`}
                        className='text-[#5b8def] hover:underline'
                      >
                        {application.phone}
                      </a>
                    ),
                  },
                  {
                    icon: <MapPin size={15} className={iconClass} />,
                    label: 'Location',
                    value: application.location,
                  },
                  ...(application.linkedin
                    ? [
                        {
                          icon: <Link2 size={15} className={iconClass} />,
                          label: 'LinkedIn / Portfolio',
                          value: (
                            <a
                              href={application.linkedin}
                              target='_blank'
                              rel='noreferrer'
                              className='break-all text-[#5b8def] hover:underline'
                            >
                              {application.linkedin}
                            </a>
                          ),
                        },
                      ]
                    : []),
                  {
                    icon: <Calendar size={15} className={iconClass} />,
                    label: 'Applied On',
                    value: formatDate(application.createdAt || application.creaetdAt),
                  },
                ] as DetailRow[]
              ).map(({ icon, label, value }) => (
                <div key={label} className='flex items-start gap-3'>
                  {icon}
                  <div>
                    <p className={labelClass}>{label}</p>
                    <p className={`${valueClass} mt-0.5`}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume */}
          <div className='rounded-xl border border-white/10 bg-[#111111] p-6'>
            <p className='mb-4 text-xs font-semibold tracking-wider text-[#969696] uppercase'>
              Resume
            </p>
            {application.resume?.url ? (
              <div className='flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3'>
                <div className='min-w-0'>
                  <p className='truncate text-sm font-medium text-white'>
                    {application.resume.fileName || 'Resume'}
                  </p>
                  <p className='mt-0.5 text-xs text-[#969696]'>
                    {application.resume.contentType}
                    {formatSize(application.resume.size)}
                  </p>
                </div>
                <a
                  href={application.resume.url}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#1447e6]/15 px-3 py-2 text-xs font-medium text-[#5b8def] transition hover:bg-[#1447e6]/25'
                >
                  <Download size={13} />
                  Download
                </a>
              </div>
            ) : (
              <p className='text-sm text-[#555555]'>No resume uploaded.</p>
            )}
          </div>

          {/* Message */}
          {application.message && (
            <div className='rounded-xl border border-white/10 bg-[#111111] p-6'>
              <div className='mb-3 flex items-center gap-2'>
                <MessageSquare size={15} className='text-[#5b8def]' />
                <p className='text-xs font-semibold tracking-wider text-[#969696] uppercase'>
                  Cover Message
                </p>
              </div>
              <p className='text-sm leading-relaxed whitespace-pre-wrap text-[#cccccc]'>
                {application.message}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
