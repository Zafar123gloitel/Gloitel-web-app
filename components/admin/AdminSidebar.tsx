'use client';

import { logout } from '@/lib/adminAuth';
import {
  BookOpen,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  FileText,
  FolderOpen,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Career', href: '/admin/career', icon: Briefcase },
  { label: 'Job Applications', href: '/admin/job-applications', icon: ClipboardList },
];

const careerQuickLinks = [
  { label: 'Job Listings', href: '/admin/career', icon: Briefcase },
  { label: 'Applications', href: '/admin/job-applications', icon: ClipboardList },
];

const resourceItems = [
  { label: 'Blog / Articles', href: '/admin/blog', icon: BookOpen },
  { label: 'Case Study', href: '/admin/case-studies', icon: FileText },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const isResourceRoute = resourceItems.some(item => pathname?.startsWith(item.href));
  const isCareerRoute = careerQuickLinks.some(item => pathname?.startsWith(item.href));
  const [resourcesOpen, setResourcesOpen] = useState(isResourceRoute);
  const [careerOpen, setCareerOpen] = useState(isCareerRoute);

  async function handleLogout() {
    try {
      await logout();
      router.replace('/admin/login');
    } catch {
      // Keep the admin screen visible if the server could not clear the session.
    }
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
          {/* Dashboard */}
          {navItems
            .filter(item => item.label === 'Dashboard')
            .map(({ label, href, icon: Icon }) => {
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

          {/* Resources */}
          <button
            type='button'
            onClick={() => {
              if (collapsed) {
                setCollapsed(false);
                setResourcesOpen(true);
                return;
              }

              setResourcesOpen(open => !open);
            }}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
              isResourceRoute
                ? 'bg-[#1447e6]/20 text-white'
                : 'text-[#969696] hover:bg-white/5 hover:text-white'
            } ${collapsed ? 'justify-center' : ''}`}
            title={collapsed ? 'Resources' : ''}
          >
            <FolderOpen size={18} className={isResourceRoute ? 'text-[#1447e6]' : 'text-current'} />

            {!collapsed && (
              <>
                <span>Resources</span>

                <ChevronDown
                  size={15}
                  className={`ml-auto transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
                />
              </>
            )}
          </button>

          {/* Resources Children */}
          {!collapsed && resourcesOpen && (
            <div className='ml-4 space-y-1 border-l border-white/10 pl-3'>
              {resourceItems.map(({ label, href, icon: Icon }) => {
                const active = pathname?.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      active
                        ? 'bg-[#1447e6]/15 text-white'
                        : 'text-[#969696] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon size={16} className={active ? 'text-[#1447e6]' : 'text-current'} />

                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Career group */}
          {!collapsed && (
            <button
              type='button'
              onClick={() => setCareerOpen(open => !open)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                isCareerRoute
                  ? 'bg-[#1447e6]/20 text-white'
                  : 'text-[#969696] hover:bg-white/5 hover:text-white'
              }`}
            >
              <Briefcase size={18} className={isCareerRoute ? 'text-[#1447e6]' : 'text-current'} />
              <span>Career</span>
              <ChevronDown
                size={15}
                className={`ml-auto transition-transform ${careerOpen ? 'rotate-180' : ''}`}
              />
            </button>
          )}

          {!collapsed && careerOpen && (
            <div className='ml-4 space-y-1 border-l border-white/10 pl-3'>
              {careerQuickLinks.map(({ label: subLabel, href: subHref, icon: SubIcon }) => {
                const subActive = pathname?.startsWith(subHref);

                return (
                  <Link
                    key={subHref}
                    href={subHref}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs transition-colors ${
                      subActive
                        ? 'bg-[#1447e6]/15 text-white'
                        : 'text-[#969696] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <SubIcon size={13} className={subActive ? 'text-[#1447e6]' : 'text-current'} />
                    <span>{subLabel}</span>
                  </Link>
                );
              })}
            </div>
          )}

          <Link
            href='/admin/contacts'
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              pathname?.startsWith('/admin/contacts')
                ? 'bg-[#1447e6]/20 text-white'
                : 'text-[#969696] hover:bg-white/5 hover:text-white'
            } ${collapsed ? 'justify-center' : ''}`}
            title={collapsed ? 'Contacts' : ''}
          >
            <Mail
              size={18}
              className={
                pathname?.startsWith('/admin/contacts') ? 'text-[#1447e6]' : 'text-current'
              }
            />
            {!collapsed && <span>Contacts</span>}
          </Link>

          {collapsed && (
            <div className='space-y-1'>
              <Link
                href='/admin/career'
                className={`flex items-center justify-center rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  pathname?.startsWith('/admin/career')
                    ? 'bg-[#1447e6]/20 text-white'
                    : 'text-[#969696] hover:bg-white/5 hover:text-white'
                }`}
                title='Career'
              >
                <Briefcase
                  size={18}
                  className={
                    pathname?.startsWith('/admin/career') ? 'text-[#1447e6]' : 'text-current'
                  }
                />
              </Link>

              <Link
                href='/admin/job-applications'
                className={`flex items-center justify-center rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  pathname?.startsWith('/admin/job-applications')
                    ? 'bg-[#1447e6]/20 text-white'
                    : 'text-[#969696] hover:bg-white/5 hover:text-white'
                }`}
                title='Applications'
              >
                <ClipboardList
                  size={18}
                  className={
                    pathname?.startsWith('/admin/job-applications')
                      ? 'text-[#1447e6]'
                      : 'text-current'
                  }
                />
              </Link>
            </div>
          )}
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
