'use client';

import { useApi } from '@/hooks/useApi';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import PageLoader from '@/components/PageLoader';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data, loading, error } = useApi<{ user?: { role?: string } }>('/api/auth/verify');
  const authed = !error && data?.user?.role === 'admin';
  useEffect(() => {
    if (!loading && !authed) router.replace('/admin/login');
  }, [loading, authed, router]);

  if (loading) {
    return <PageLoader className='h-screen bg-[#0a0a0a]' />;
  }

  if (!authed) return null;

  return <>{children}</>;
}
