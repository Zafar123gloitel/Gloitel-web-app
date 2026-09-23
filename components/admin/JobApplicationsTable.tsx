'use client';

import { Download, Inbox } from 'lucide-react';

export interface JobApplication {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  message?: string;
  status: string;
  createdAt?: string;
  creaetdAt?: string;
  resume?: {
    url?: string;
    fileName?: string;
    contentType?: string;
    size?: number;
  };
}

function formatDate(date?: string) {
  if (!date) return '—';

  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function JobApplicationsTable({ applications }: { applications: JobApplication[] }) {
  if (applications.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111111] py-16 text-center'>
        <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5'>
          <Inbox size={20} className='text-[#969696]' />
        </div>
        <p className='text-sm font-medium text-white'>No applications found</p>
        <p className='mt-1 text-xs text-[#969696]'>New career applications will appear here</p>
      </div>
    );
  }

  return (
    <div className='overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f]'>
      <div className='custom-scrollbar overflow-x-auto'>
        <table className='w-full min-w-[900px]'>
          <thead>
            <tr className='border-b border-white/10 bg-white/5'>
              {['Applicant', 'Contact', 'Location', 'Resume', 'Status', 'Applied On'].map(
                heading => (
                  <th
                    key={heading}
                    className='px-4 py-3 text-left text-xs font-medium tracking-wider text-nowrap text-[#969696] uppercase'
                  >
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className='divide-y divide-white/5'>
            {applications.map(application => (
              <tr key={application._id} className='transition-colors hover:bg-white/[0.03]'>
                <td className='px-4 py-4'>
                  <p className='text-sm font-medium text-white'>{application.fullName}</p>
                  {application.linkedin && (
                    <a
                      href={application.linkedin}
                      target='_blank'
                      rel='noreferrer'
                      className='mt-1 block max-w-48 truncate text-xs text-[#5b8def] hover:underline'
                    >
                      LinkedIn / Portfolio
                    </a>
                  )}
                </td>
                <td className='px-4 py-4'>
                  <a
                    href={`mailto:${application.email}`}
                    className='block text-sm text-[#cccccc] hover:text-white'
                  >
                    {application.email}
                  </a>
                  <a
                    href={`tel:${application.phone}`}
                    className='mt-1 block text-xs text-[#969696] hover:text-white'
                  >
                    {application.phone}
                  </a>
                </td>
                <td className='px-4 py-4 text-sm text-[#cccccc]'>{application.location}</td>
                <td className='px-4 py-4'>
                  {application.resume?.url ? (
                    <a
                      href={application.resume.url}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-1.5 rounded-lg bg-[#1447e6]/15 px-2.5 py-1.5 text-xs font-medium text-[#5b8def] transition-colors hover:bg-[#1447e6]/25'
                    >
                      <Download size={13} />
                      {application.resume.fileName || 'View resume'}
                    </a>
                  ) : (
                    <span className='text-xs text-[#666666]'>Unavailable</span>
                  )}
                </td>
                <td className='px-4 py-4'>
                  <span className='inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-medium text-green-400 capitalize'>
                    <span className='h-1.5 w-1.5 rounded-full bg-green-400' />
                    {application.status || 'new'}
                  </span>
                </td>
                <td className='px-4 py-4 text-sm text-nowrap text-[#969696]'>
                  {formatDate(application.createdAt || application.creaetdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
