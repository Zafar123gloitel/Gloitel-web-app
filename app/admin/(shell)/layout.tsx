'use client';

import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AuthGuard from '@/components/admin/AuthGuard';

export default function AdminShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className='flex h-screen overflow-hidden bg-[#0a0a0a]'>
        <AdminSidebar />
        <div className='flex flex-1 flex-col overflow-hidden'>
          <AdminHeader />
          <main className='flex-1 overflow-y-auto p-6'>{children}</main>
        </div>
      </div>
    </AuthGuard>
  );
}
