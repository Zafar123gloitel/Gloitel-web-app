'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Edit2, Eye, Trash2 } from 'lucide-react';
import { useState } from 'react';

import DataTable, { TableColumn } from './DataTable';
import BlogPreview from './BlogPreview';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail?: string;
  Description: string;
  imageAlt?: string;
  category: string;
  industry?: string;
  service?: string;
  liveWebsiteLink?: string;
  author?: {
    name: string;
    image?: string;
  };
  status: 'draft' | 'published' | 'scheduled';
  publishDate: string;
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
  basePath?: string;
}

const statusStyles: Record<
  BlogPost['status'],
  {
    dot: string;
    text: string;
  }
> = {
  published: {
    dot: 'bg-green-400',
    text: 'text-green-400',
  },
  draft: {
    dot: 'bg-yellow-400',
    text: 'text-yellow-400',
  },
  scheduled: {
    dot: 'bg-blue-400',
    text: 'text-blue-400',
  },
};

function formatDate(date?: string) {
  if (!date) return '—';

  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogTable({ posts, onDelete, basePath = '/admin/blog' }: BlogTableProps) {
  const [previewId, setPreviewId] = useState<string | null>(null);
  const previewPost = posts.find(post => post.id === previewId);
  const columns: TableColumn<BlogPost>[] = [
    {
      key: 'title',
      label: 'Title',
      render: post => (
        <div className='flex items-center gap-3'>
          <div className='relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/5'>
            {post.thumbnail && (
              <Image src={post.thumbnail} alt='' fill className='object-cover' sizes='40px' />
            )}
          </div>

          <div className='min-w-0'>
            <p className='line-clamp-1 text-sm font-medium text-white'>{post.title}</p>

            {post.excerpt && (
              <p className='mt-0.5 line-clamp-1 text-xs text-[#969696]'>{post.excerpt}</p>
            )}
          </div>
        </div>
      ),
    },

    {
      key: 'category',
      label: 'Category',
      className: 'hidden md:table-cell',
      headerClassName: 'hidden md:table-cell',
      render: post => (
        <span className='rounded-md bg-[#1447e6]/15 px-2.5 py-1 text-xs font-medium text-[#5b8def]'>
          {post.category || '—'}
        </span>
      ),
    },

    {
      key: 'author',
      label: 'Author',
      className: 'hidden lg:table-cell',
      headerClassName: 'hidden lg:table-cell',
      render: post => (
        <div className='flex items-center gap-2'>
          <div className='relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/10'>
            {post.author?.image && (
              <Image src={post.author.image} alt='' fill className='object-cover' sizes='24px' />
            )}
          </div>

          <span className='text-sm text-nowrap text-[#cccccc]'>{post.author?.name ?? '—'}</span>
        </div>
      ),
    },

    {
      key: 'status',
      label: 'Status',
      render: post => (
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-medium capitalize ${statusStyles[post.status].text}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${statusStyles[post.status].dot}`} />

          {post.status}
        </span>
      ),
    },

    {
      key: 'publishDate',
      label: 'Publish Date',
      className: 'hidden sm:table-cell text-nowrap',
      headerClassName: 'hidden sm:table-cell text-nowrap',
      render: post => <span className='text-title text-sm'>{formatDate(post.publishDate)}</span>,
    },

    {
      key: 'updatedAt',
      label: 'Updated At',
      className: 'hidden xl:table-cell text-nowrap',
      headerClassName: 'hidden xl:table-cell text-nowrap',
      render: post => <span className='text-title text-sm'>{formatDate(post.updatedAt)}</span>,
    },

    {
      key: 'actions',
      label: 'Actions',
      className: 'text-right',
      headerClassName: 'text-right',
      render: post => (
        <div className='flex items-center justify-end gap-2'>
          <button
            type='button'
            onClick={() => setPreviewId(post.id)}
            aria-label={`Preview ${post.title}`}
            title='Preview article'
            className='cursor-pointer rounded-lg p-1.5 text-[#969696] transition-colors hover:bg-white/5 hover:text-white'
          >
            <Eye size={14} />
          </button>
          <Link
            href={`${basePath}/${post.id}`}
            className='cursor-pointer rounded-lg p-1.5 text-[#969696] transition-colors hover:bg-white/5 hover:text-white'
          >
            <Edit2 size={14} />
          </Link>

          <button
            type='button'
            onClick={() => onDelete(post.id)}
            className='cursor-pointer rounded-lg p-1.5 text-[#969696] transition-colors hover:bg-red-500/10 hover:text-red-400'
          >
            <Trash2 size={14} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={posts} rowKey='id' emptyMessage='No blog posts found' />
      {previewPost && (
        <BlogPreview
          isOpen
          onClose={() => setPreviewId(null)}
          data={{
            ...previewPost,
            authorName: previewPost.author?.name,
            authorImage: previewPost.author?.image,
          }}
        />
      )}
    </>
  );
}
