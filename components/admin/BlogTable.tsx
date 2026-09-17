'use client';

import { Edit2, Trash2, Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail?: string;
  imageAlt?: string;
  category: string;
  author: { name: string; image?: string };
  status: 'draft' | 'published' | 'scheduled';
  publishDate: string; // ISO string, may be empty
  updatedAt: string;
  allowComments: boolean;
  featured: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
  };
  social?: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };
  schema?: {
    type?: string;
    customJsonLd?: string;
  };
  settings?: {
    canonicalUrl?: string;
    noIndex?: boolean;
  };
}

interface BlogTableProps {
  posts: BlogPost[];
  onDelete: (id: string) => void;
}

const statusStyles: Record<BlogPost['status'], { dot: string; text: string }> = {
  published: { dot: 'bg-green-400', text: 'text-green-400' },
  draft: { dot: 'bg-yellow-400', text: 'text-yellow-400' },
  scheduled: { dot: 'bg-blue-400', text: 'text-blue-400' },
};

function formatDate(date?: string) {
  if (!date) return '—';
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogTable({ posts, onDelete }: BlogTableProps) {
  if (posts.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111111] py-16 text-center'>
        <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5'>
          <Plus size={20} className='text-[#969696]' />
        </div>
        <p className='text-sm font-medium text-white'>No blog posts yet</p>
        <p className='mt-1 text-xs text-[#969696]'>Create your first post to get started</p>
        <Link
          href='/admin/blog/new'
          className='mt-4 rounded-lg bg-[#1447e6] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#1447e6]/80'
        >
          New Post
        </Link>
      </div>
    );
  }

  return (
    <div className='overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f]'>
      <div className='custom-scrollbar overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/10 bg-white/5'>
              <th className='px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase'>
                Title
              </th>
              <th className='hidden px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase md:table-cell'>
                Category
              </th>
              <th className='hidden px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase lg:table-cell'>
                Author
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase'>
                Status
              </th>
              <th className='hidden px-4 py-3 text-left text-xs font-medium tracking-wider text-nowrap text-[#969696] uppercase sm:table-cell'>
                Publish Date
              </th>
              <th className='hidden px-4 py-3 text-left text-xs font-medium tracking-wider text-nowrap text-[#969696] uppercase xl:table-cell'>
                Updated At
              </th>
              <th className='px-4 py-3 text-right text-xs font-medium tracking-wider text-[#969696] uppercase'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-white/5'>
            {posts.map(post => (
              <tr key={post.id} className='transition-colors hover:bg-white/[0.03]'>
                <td className='px-4 py-4'>
                  <div className='flex items-center gap-3'>
                    <div className='relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/5'>
                      {post.thumbnail && (
                        <Image
                          src={post.thumbnail}
                          alt=''
                          fill
                          className='object-cover'
                          sizes='40px'
                        />
                      )}
                    </div>
                    <div className='min-w-0'>
                      <p className='line-clamp-1 text-sm font-medium text-white'>{post.title}</p>
                      {post.excerpt && (
                        <p className='mt-0.5 line-clamp-1 text-xs text-[#969696]'>{post.excerpt}</p>
                      )}
                    </div>
                  </div>
                </td>
                <td className='hidden px-4 py-4 md:table-cell'>
                  <span className='rounded-md bg-[#1447e6]/15 px-2.5 py-1 text-xs font-medium text-[#5b8def]'>
                    {post.category || '—'}
                  </span>
                </td>
                <td className='hidden px-4 py-4 lg:table-cell'>
                  <div className='flex items-center gap-2'>
                    <div className='relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/10'>
                      {post.author?.image && (
                        <Image
                          src={post.author.image}
                          alt=''
                          fill
                          className='object-cover'
                          sizes='24px'
                        />
                      )}
                    </div>
                    <span className='text-sm text-nowrap text-[#cccccc]'>
                      {post.author?.name ?? '—'}
                    </span>
                  </div>
                </td>
                <td className='px-4 py-4'>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-medium capitalize ${statusStyles[post.status].text}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${statusStyles[post.status].dot}`} />
                    {post.status}
                  </span>
                </td>
                <td className='hidden px-4 py-4 text-xs text-nowrap text-[#969696] sm:table-cell'>
                  {formatDate(post.publishDate)}
                </td>
                <td className='hidden px-4 py-4 text-xs text-nowrap text-[#969696] xl:table-cell'>
                  {formatDate(post.updatedAt)}
                </td>
                <td className='px-4 py-4'>
                  <div className='flex items-center justify-end gap-2'>
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className='rounded-lg p-1.5 text-[#969696] transition-colors hover:bg-white/5 hover:text-white'
                    >
                      <Edit2 size={14} />
                    </Link>
                    <button
                      onClick={() => onDelete(post.id)}
                      className='rounded-lg p-1.5 text-[#969696] transition-colors hover:bg-red-500/10 hover:text-red-400'
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
