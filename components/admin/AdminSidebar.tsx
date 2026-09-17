'use client';

import { logout } from '@/lib/adminAuth';
import { BookOpen, Briefcase, ChevronLeft, LayoutDashboard, LogOut, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'All Articles', href: '/admin/blog', icon: BookOpen },
  { label: 'Career', href: '/admin/career', icon: Briefcase },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  function handleLogout() {
    logout();
    router.push('/admin/login');
  }

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`flex h-screen flex-col border-r border-white/10 bg-[#05091E] transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-64'
        } sticky top-0`}
      >
        {/* Logo + Toggle */}
        <div className='flex items-center justify-between border-b border-white/10 px-4 py-5'>
          {!collapsed && (
            <Link href='/admin/dashboard' className='flex w-32 items-center gap-2'>
              <Image
                src='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927934/Gloitel/logo_xbs2qc.svg'
                width={120}
                height={90}
                alt='Logo'
                className='object-contain'
                unoptimized
                loading='lazy'
              />
            </Link>
          )}
          {collapsed && (
            <div className='mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-[#1447e6]'>
              <span className='text-xs font-bold text-white'>G</span>
            </div>
          )}
          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className='rounded-md p-1 text-[#969696] transition-colors hover:bg-white/5 hover:text-white'
            >
              <ChevronLeft size={16} />
            </button>
          )}
        </div>

        {/* Expand button when collapsed */}
        {collapsed && (
          <div className='flex justify-center border-b border-white/10 py-3'>
            <button
              onClick={() => setCollapsed(false)}
              className='rounded-md p-1 text-[#969696] transition-colors hover:bg-white/5 hover:text-white'
            >
              <Menu size={16} />
            </button>
          </div>
        )}

        {/* Nav Links */}
        <nav className='flex flex-1 flex-col gap-1 p-3'>
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                  active
                    ? 'bg-[#1447e6]/20 text-white'
                    : 'text-[#969696] hover:bg-white/5 hover:text-white'
                } ${collapsed ? 'justify-center' : ''}`}
                title={collapsed ? label : ''}
              >
                <Icon size={18} className={active ? 'text-[#1447e6]' : 'text-current'} />
                {!collapsed && <span>{label}</span>}
                {active && !collapsed && (
                  <div className='ml-auto h-1.5 w-1.5 rounded-full bg-[#1447e6]' />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className='border-t border-white/10 p-3'>
          <button
            onClick={handleLogout}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#969696] transition-colors hover:bg-red-500/10 hover:text-red-400 ${
              collapsed ? 'justify-center' : ''
            }`}
            title={collapsed ? 'Logout' : ''}
          >
            <LogOut size={18} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
