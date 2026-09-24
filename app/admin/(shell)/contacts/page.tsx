'use client';

import { useAdminSearch } from '@/components/admin/AdminSearchContext';
import { ArrowLeft, ChevronLeft, ChevronRight, Inbox, Mail, RefreshCw } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  companyType: string;
  message: string;
  createdAt: string;
};
type Pagination = { page: number; limit: number; total: number; totalPages: number };
const initialPagination: Pagination = { page: 1, limit: 20, total: 0, totalPages: 0 };

const fullName = (c: Contact) => `${c.firstName} ${c.lastName}`.trim();

const initials = (c: Contact) =>
  `${c.firstName?.[0] ?? ''}${c.lastName?.[0] ?? ''}`.toUpperCase() || '?';

const shortDate = (value: string) =>
  value ? new Date(value).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : '—';

const longDate = (value: string) =>
  value
    ? new Date(value).toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '—';

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [pagination, setPagination] = useState(initialPagination);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { search } = useAdminSearch();

  const loadContacts = useCallback(async (page: number) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/contact?page=${page}&limit=20`, { cache: 'no-store' });
      const result = await response.json();
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'Failed to load contacts');
      }
      setContacts(result.data ?? []);
      setPagination(result.pagination ?? initialPagination);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Failed to load contacts');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadContacts(1);
  }, [loadContacts]);

  const visibleContacts = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return contacts;
    return contacts.filter(contact =>
      [
        contact.firstName,
        contact.lastName,
        contact.email,
        contact.country,
        contact.companyType,
        contact.message,
      ].some(value => value?.toLowerCase().includes(query)),
    );
  }, [contacts, search]);

  // Mobile: detail shows only after a tap. Desktop: first contact is shown by default.
  const selected = visibleContacts.find(c => c.id === selectedId) ?? null;
  const detail = selected ?? visibleContacts[0] ?? null;

  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <div>
          <h2 className='text-lg font-bold text-white'>Contacts</h2>
          <p className='mt-0.5 text-sm text-[#969696]'>
            {pagination.total} submission{pagination.total !== 1 ? 's' : ''} received
          </p>
        </div>
        <button
          type='button'
          onClick={() => void loadContacts(pagination.page)}
          disabled={loading}
          className='inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-[#cccccc] transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50'
        >
          <RefreshCw size={15} className={loading ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>

      {error ? (
        <div className='rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-4 text-sm text-red-400'>
          <p>{error}</p>
          <button
            type='button'
            onClick={() => void loadContacts(pagination.page)}
            className='mt-2 font-medium text-red-300 underline underline-offset-2'
          >
            Try again
          </button>
        </div>
      ) : loading && contacts.length === 0 ? (
        <div className='flex min-h-64 items-center justify-center rounded-xl border border-white/10 bg-[#0f0f0f]'>
          <RefreshCw size={22} className='animate-spin text-[#5b8def]' />
        </div>
      ) : visibleContacts.length === 0 ? (
        <div className='flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111111] py-16 text-center'>
          <Inbox size={22} className='mb-3 text-[#969696]' />
          <p className='text-sm font-medium text-white'>No contacts found</p>
          <p className='mt-1 text-xs text-[#969696]'>Contact form submissions will appear here</p>
        </div>
      ) : (
        <div className='flex h-[calc(100vh-12rem)] min-h-[480px] overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f]'>
          {/* Left: list */}
          <aside
            className={`${
              selected ? 'hidden md:flex' : 'flex'
            } w-full flex-col border-white/10 md:w-[360px] md:shrink-0 md:border-r`}
          >
            <ul className='custom-scrollbar flex-1 divide-y divide-white/5 overflow-y-auto'>
              {visibleContacts.map(contact => {
                const active = detail?.id === contact.id;
                return (
                  <li key={contact.id}>
                    <button
                      type='button'
                      onClick={() => setSelectedId(contact.id)}
                      aria-current={active ? 'true' : undefined}
                      className={`flex w-full gap-3 border-l-2 px-4 py-3.5 text-left transition-colors focus-visible:bg-white/[0.06] focus-visible:outline-none ${
                        active
                          ? 'border-[#5b8def] bg-white/[0.06]'
                          : 'border-transparent hover:bg-white/[0.03]'
                      }`}
                    >
                      <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5b8def]/15 text-xs font-semibold text-[#5b8def]'>
                        {initials(contact)}
                      </span>
                      <span className='min-w-0 flex-1'>
                        <span className='flex items-baseline justify-between gap-2'>
                          <span className='truncate text-sm font-semibold text-white'>
                            {fullName(contact)}
                          </span>
                          <span className='shrink-0 text-xs text-[#969696]'>
                            {shortDate(contact.createdAt)}
                          </span>
                        </span>
                        <span className='mt-0.5 block truncate text-xs text-[#5b8def]'>
                          {contact.companyType}
                        </span>
                        <p className='mt-1 line-clamp-2 text-xs leading-relaxed text-[#969696]'>
                          {contact.message}
                        </p>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {pagination.totalPages > 1 && (
              <div className='flex items-center justify-between border-t border-white/10 px-4 py-2.5'>
                <p className='text-xs text-[#969696]'>
                  Page {pagination.page} of {pagination.totalPages}
                </p>
                <div className='flex items-center gap-2'>
                  <button
                    type='button'
                    onClick={() => void loadContacts(pagination.page - 1)}
                    disabled={loading || pagination.page <= 1}
                    className='rounded-lg border border-white/10 p-1.5 text-[#969696] hover:bg-white/5 disabled:opacity-40'
                    aria-label='Previous page'
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type='button'
                    onClick={() => void loadContacts(pagination.page + 1)}
                    disabled={loading || pagination.page >= pagination.totalPages}
                    className='rounded-lg border border-white/10 p-1.5 text-[#969696] hover:bg-white/5 disabled:opacity-40'
                    aria-label='Next page'
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </aside>

          {/* Right: detail */}
          <section className={`${selected ? 'flex' : 'hidden md:flex'} min-w-0 flex-1 flex-col`}>
            {detail && (
              <>
                <div className='border-b border-white/10 px-6 py-5'>
                  <button
                    type='button'
                    onClick={() => setSelectedId(null)}
                    className='mb-4 inline-flex items-center gap-1.5 text-sm text-[#969696] hover:text-white md:hidden'
                  >
                    <ArrowLeft size={15} /> Back to list
                  </button>

                  <div className='flex flex-wrap items-start justify-between gap-4'>
                    <div className='flex min-w-0 items-center gap-3'>
                      <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5b8def]/15 text-sm font-semibold text-[#5b8def]'>
                        {initials(detail)}
                      </span>
                      <div className='min-w-0'>
                        <h3 className='truncate text-base font-bold text-white'>
                          {fullName(detail)}
                        </h3>
                        <a
                          href={`mailto:${detail.email}`}
                          className='block truncate text-sm text-[#5b8def] hover:underline'
                        >
                          {detail.email}
                        </a>
                      </div>
                    </div>

                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        detail.email,
                      )}&su=${encodeURIComponent('Re: Your enquiry')}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 rounded-lg bg-[#5b8def] px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4a7bdc]'
                    >
                      <Mail size={15} /> Reply
                    </a>
                  </div>

                  <dl className='mt-5 grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-3'>
                    <div>
                      <dt className='text-xs text-[#969696]'>Country</dt>
                      <dd className='mt-0.5 text-[#cccccc]'>{detail.country || '—'}</dd>
                    </div>
                    <div>
                      <dt className='text-xs text-[#969696]'>Company type</dt>
                      <dd className='mt-0.5 text-[#cccccc]'>{detail.companyType || '—'}</dd>
                    </div>
                    <div>
                      <dt className='text-xs text-[#969696]'>Received</dt>
                      <dd className='mt-0.5 text-[#cccccc]'>{longDate(detail.createdAt)}</dd>
                    </div>
                  </dl>
                </div>

                <div className='custom-scrollbar flex-1 overflow-y-auto px-6 py-5'>
                  <p className='max-w-2xl text-sm leading-7 whitespace-pre-wrap text-[#e2e2e2]'>
                    {detail.message}
                  </p>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
