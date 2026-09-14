'use client';

import { isAuthenticated } from '@/lib/adminAuth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const ok = isAuthenticated();
    if (!ok) {
      router.replace('/admin/login');
    } else {
      setAuthed(true);
    }
    setChecked(true);
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
