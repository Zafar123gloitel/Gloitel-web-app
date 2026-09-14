import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel – Gloitel',
  description: 'Gloitel Admin Dashboard',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
