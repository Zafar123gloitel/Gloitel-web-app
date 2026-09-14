'use client';

import StatsCard from '@/components/admin/StatsCard';
import { ArrowRight, BookOpen, Briefcase, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [blogCount, setBlogCount] = useState(0);
  const [careerCount, setCareerCount] = useState(0);

  useEffect(() => {
    try {
      const blogs = JSON.parse(localStorage.getItem('admin_blogs') ?? '[]');
      const jobs = JSON.parse(localStorage.getItem('admin_jobs') ?? '[]');
      setBlogCount(blogs.length);
      setCareerCount(jobs.length);
    } catch {
      // ignore
    }
  }, []);

  const quickActions = [
    {
      label: 'New Blog Post',
      href: '/admin/blog/new',
      icon: BookOpen,
      color: '#1447e6',
    },
    {
      label: 'New Job Listing',
      href: '/admin/career/new',
      icon: Briefcase,
      color: '#7c3aed',
    },
  ];

  return (
    <div className='space-y-8'>
      {/* Welcome banner */}
      <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1447e6]/20 via-[#111111] to-[#111111] p-6'>
        <div className='pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#1447e6]/20 blur-3xl' />
        <h2 className='text-lg font-bold text-white'>Welcome back, Admin! 👋</h2>
        <p className='mt-1 text-sm text-[#969696]'>
          Here&apos;s a quick overview of your Gloitel content.
        </p>
        <div className='mt-4 flex flex-wrap gap-3'>
          {quickActions.map(({ label, href, icon: Icon, color }) => (
            <Link
              key={href}
              href={href}
              className='flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10'
            >
              <Icon size={15} style={{ color }} />
              {label}
              <ArrowRight size={13} className='text-[#969696]' />
            </Link>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <div>
        <h3 className='mb-4 text-xs font-semibold tracking-wider text-[#969696] uppercase'>
          Overview
        </h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <StatsCard
            title='Blog Posts'
            value={blogCount}
            icon={BookOpen}
            description='Total posts'
            color='#1447e6'
          />
          <StatsCard
            title='Job Listings'
            value={careerCount}
            icon={Briefcase}
            description='Open positions'
            color='#7c3aed'
          />
          <StatsCard
            title='Visitors'
            value='—'
            icon={Users}
            description='Analytics coming soon'
            color='#059669'
          />
          <StatsCard
            title='Last Updated'
            value={new Date().toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
            })}
            icon={Clock}
            description='Today'
            color='#d97706'
          />
        </div>
      </div>

      {/* Quick links */}
      <div>
        <h3 className='mb-4 text-xs font-semibold tracking-wider text-[#969696] uppercase'>
          Manage Content
        </h3>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {/* Blog card */}
          <div className='flex items-center justify-between rounded-xl border border-white/10 bg-[#111111] p-5 transition-all hover:border-white/20'>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#1447e6]/15'>
                <BookOpen size={18} className='text-[#1447e6]' />
              </div>
              <div>
                <p className='text-sm font-semibold text-white'>Blog Management</p>
                <p className='text-xs text-[#969696]'>
                  {blogCount} post{blogCount !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <Link
              href='/admin/blog'
              className='flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10'
            >
              View all <ArrowRight size={12} />
            </Link>
          </div>

          {/* Career card */}
          <div className='flex items-center justify-between rounded-xl border border-white/10 bg-[#111111] p-5 transition-all hover:border-white/20'>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c3aed]/15'>
                <Briefcase size={18} className='text-[#7c3aed]' />
              </div>
              <div>
                <p className='text-sm font-semibold text-white'>Career Management</p>
                <p className='text-xs text-[#969696]'>
                  {careerCount} listing{careerCount !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <Link
              href='/admin/career'
              className='flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10'
            >
              View all <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
