'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    return (
      <div className='flex h-screen items-center justify-center bg-[#0a0a0a]'>
        <div className='h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#1447e6]' />
      </div>
    );
  }

  if (!authed) return null;

  return <>{children}</>;
}
