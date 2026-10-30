'use client';

import { Download, Eye, Inbox } from 'lucide-react';
import Link from 'next/link';
import DataTable, { type TableColumn } from './DataTable';

export interface JobApplication {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  message?: string;
  status: string;
  jobId?: string;
  jobDetail?: {
    title: string;
    department: string;
    type: string;
  } | null;
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

  const columns: TableColumn<JobApplication>[] = [
    {
      key: 'fullName',
      label: 'Applicant',
      render: application => (
        <div>
          <p className='text-sm font-medium text-white'>{application.fullName}</p>
          {application.linkedin && (
            <a
              href={application.linkedin}
              target='_blank'
              rel='noreferrer'
              className='mt-1 block max-w-48 truncate text-xs text-[#5b8def] hover:underline'
              onClick={e => e.stopPropagation()}
            >
              LinkedIn / Portfolio
            </a>
          )}
        </div>
      ),
    },
    {
      key: 'email',
      label: 'Contact',
      render: application => (
        <div>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
              application.email,
            )}&su=${encodeURIComponent('Regarding your job application')}`}
            target='_blank'
            rel='noopener noreferrer'
            className='block text-sm text-[#cccccc] hover:text-white'
            onClick={e => e.stopPropagation()}
          >
            {application.email}
          </a>
          <a
            href={`tel:${application.phone}`}
            className='mt-1 block text-xs text-[#969696] hover:text-white'
            onClick={e => e.stopPropagation()}
          >
            {application.phone}
          </a>
        </div>
      ),
    },
    {
      key: 'jobDetail',
      label: 'Applied Role',
      render: application =>
        application.jobDetail ? (
          <div>
            <p className='text-sm font-medium text-white'>{application.jobDetail.title}</p>
            <p className='mt-0.5 text-xs text-[#969696]'>
              {application.jobDetail.department} &middot;{' '}
              <span className='capitalize'>{application.jobDetail.type.replace('-', ' ')}</span>
            </p>
          </div>
        ) : (
          <span className='text-xs text-[#555555]'>Not specified</span>
        ),
    },
    {
      key: 'location',
      label: 'Location',
      className: 'text-sm text-[#cccccc]',
      render: application => application.location,
    },
    {
      key: 'resume',
      label: 'Resume',
      render: application =>
        application.resume?.url ? (
          <a
            href={application.resume.url}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1.5 rounded-lg bg-[#1447e6]/15 px-2.5 py-1.5 text-xs font-medium text-[#5b8def] hover:bg-[#1447e6]/25'
            onClick={e => e.stopPropagation()}
          >
            <Download size={13} />
            {application.resume.fileName || 'View resume'}
          </a>
        ) : (
          <span className='text-xs text-[#666666]'>Unavailable</span>
        ),
    },
    {
      key: 'status',
      label: 'Status',
      render: application => (
        <span className='inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-medium text-green-400 capitalize'>
          <span className='h-1.5 w-1.5 rounded-full bg-green-400' />
          {application.status || 'new'}
        </span>
      ),
    },
    {
      key: 'createdAt',
      label: 'Applied On',
      className: 'text-sm text-nowrap text-[#969696]',
      render: application => formatDate(application.createdAt || application.creaetdAt),
    },
    {
      key: '_id',
      label: '',
      render: application => (
        <Link
          href={`/admin/job-applications/${application._id}`}
          className='inline-flex items-center gap-1 rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-[#969696] transition hover:border-white/20 hover:text-white'
          onClick={e => e.stopPropagation()}
        >
          <Eye size={13} />
          View
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={applications}
      rowKey='_id'
      tableClassName='min-w-[1050px]'
      pagination={false}
      emptyMessage='No applications found'
    />
  );
}
