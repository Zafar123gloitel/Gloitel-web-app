'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PageLoader from '@/components/PageLoader';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    fetch('/api/auth/verify', { cache: 'no-store' })
      .then(async response => {
        const result = await response.json();
        if (response.ok && result.data?.user?.role === 'admin') setAuthed(true);
        else router.replace('/admin/login');
      })
      .catch(() => router.replace('/admin/login'))
      .finally(() => setChecked(true));
  }, [router]);

  if (!checked) {
    return <PageLoader className='h-screen bg-[#0a0a0a]' />;
  }

  if (!authed) return null;

  return <>{children}</>;
}
