'use client';

import { X } from 'lucide-react';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export interface BlogPreviewData {
  title?: string;
  excerpt?: string;
  content?: string;
  thumbnail?: string;
  banner?: string;
  category?: string;
  industry?: string;
  service?: string;
  liveWebsiteLink?: string;
  authorName?: string;
  authorImage?: string;
  publishDate?: string;
}

interface BlogPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  data: BlogPreviewData;
  note?: string;
  contentLabel?: string;
}

function formatDate(date?: string) {
  if (!date) return 'Not scheduled';

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Not scheduled';
  }

  return parsedDate.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogPreview({
  isOpen,
  onClose,
  data,
  note,
  contentLabel = 'Article',
}: BlogPreviewProps) {
  if (!isOpen) return null;
  const wordCount = data.content?.trim() ? data.content.trim().split(/\s+/).length : 0;
  const readMins = Math.max(1, Math.ceil(wordCount / 200));
  return (
    <div className='custom-scrollbar fixed inset-0 z-50 h-screen overflow-y-auto bg-black/80 px-4 py-4 backdrop-blur-sm'>
      <div className='mx-auto flex h-full min-h-0 max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-2xl'>
        {/* Header */}
        <div className='flex items-center justify-between border-b border-white/10 px-6 py-4'>
          <div>
            <p className='text-xs font-medium tracking-wider text-[#5b8def] uppercase'>
              {contentLabel} Preview
            </p>

            {note && <p className='mt-1 text-xs text-[#969696]'>{note}</p>}
          </div>

          <button
            type='button'
            onClick={onClose}
            aria-label='Close preview'
            className='flex h-8 w-8 items-center justify-center rounded-lg text-[#969696] transition-colors hover:bg-white/10 hover:text-white'
          >
            <X size={18} />
          </button>
        </div>

        {/* Article */}
        <article className='custom-scrollbar min-h-0 flex-1 overflow-y-auto px-6 py-8 sm:px-12 sm:py-12'>
          {/* Thumbnail */}
          {(data.thumbnail || data.banner) && (
            <img
              src={data.banner || data.thumbnail}
              alt=''
              className='mb-8 aspect-1200/630 w-full rounded-xl object-cover'
            />
          )}

          {/* Meta */}
          <div className='mb-5 flex flex-wrap items-center gap-3 text-xs text-[#969696]'>
            {data.category && (
              <span className='rounded-full bg-[#1447e6]/15 px-3 py-1 font-medium text-[#6f99ff]'>
                {data.category}
              </span>
            )}

            {data.industry && <span>{data.industry}</span>}

            {data.service && <span>{data.service}</span>}

            <span>{formatDate(data.publishDate)}</span>

            <span>{readMins} min read</span>
          </div>

          {/* Title */}
          <h1 className='max-w-3xl text-3xl leading-tight font-bold text-white sm:text-5xl'>
            {data.title || `Untitled ${contentLabel.toLowerCase()}`}
          </h1>

          {/* Excerpt */}
          {data.excerpt && (
            <p className='mt-5 max-w-2xl text-lg leading-8 text-[#b3b3b3]'>{data.excerpt}</p>
          )}

          {contentLabel === 'Case Study' ? (
            <div className='mt-6 border-b border-white/10 pb-8'>
              {data.liveWebsiteLink && (
                <a
                  href={data.liveWebsiteLink}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex rounded-lg bg-[#1447e6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1447e6]/80'
                >
                  Visit Live Website
                </a>
              )}
            </div>
          ) : (
            <div className='mt-6 flex items-center gap-3 border-b border-white/10 pb-8'>
              {data.authorImage && (
                <img
                  src={data.authorImage}
                  alt=''
                  className='h-10 w-10 rounded-full object-cover'
                />
              )}

              <div>
                <p className='text-sm font-medium text-white'>
                  {data.authorName || 'Unknown author'}
                </p>

                <p className='text-xs text-[#969696]'>Author</p>
              </div>
            </div>
          )}

          {/* Content */}
          <div className='mt-8 max-w-none text-[#d0d0d0]'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                /* Headings */
                h1: ({ children }) => (
                  <h1 className='mt-10 mb-5 text-4xl leading-tight font-bold text-white'>
                    {children}
                  </h1>
                ),

                h2: ({ children }) => (
                  <h2 className='mt-8 mb-4 text-3xl leading-tight font-bold text-white'>
                    {children}
                  </h2>
                ),

                h3: ({ children }) => (
                  <h3 className='mt-7 mb-3 text-2xl leading-tight font-semibold text-white'>
                    {children}
                  </h3>
                ),

                /* Paragraph */
                p: ({ children }) => (
                  <p className='my-4 text-base leading-7 whitespace-pre-line text-[#d0d0d0]'>
                    {children}
                  </p>
                ),

                /* Bold */
                strong: ({ children }) => (
                  <strong className='font-bold text-white'>{children}</strong>
                ),

                /* Italic */
                em: ({ children }) => <em className='text-[#d0d0d0] italic'>{children}</em>,

                u: ({ children }) => (
                  <u className='underline decoration-2 underline-offset-2'>{children}</u>
                ),

                /* Bullet list */
                ul: ({ children }) => (
                  <ul className='my-5 list-disc space-y-2 pl-6 text-[#d0d0d0]'>{children}</ul>
                ),

                /* Numbered list */
                ol: ({ children }) => (
                  <ol className='my-5 list-decimal space-y-2 pl-6 text-[#d0d0d0]'>{children}</ol>
                ),

                /* List item */
                li: ({ children }) => <li className='leading-7'>{children}</li>,

                /* Quote */
                blockquote: ({ children }) => (
                  <blockquote className='my-6 border-l-4 border-[#1447e6] pl-4 text-[#a0a0a0] italic'>
                    {children}
                  </blockquote>
                ),

                /* Code wrapper */
                pre: ({ children }) => (
                  <pre className='custom-scrollbar my-6 overflow-x-auto rounded-xl border border-white/10 bg-[#050505] p-0'>
                    {children}
                  </pre>
                ),

                /* Inline + Block code */
                code: ({ children, className }) => {
                  const isCodeBlock =
                    typeof className === 'string' && className.includes('language-');

                  if (isCodeBlock) {
                    return (
                      <code className='block p-5 font-mono text-sm leading-6 whitespace-pre text-[#e5e7eb]'>
                        {children}
                      </code>
                    );
                  }

                  return (
                    <code className='rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-[#93c5fd]'>
                      {children}
                    </code>
                  );
                },

                /* Links */
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#60a5fa] underline underline-offset-2 hover:text-[#93c5fd]'
                  >
                    {children}
                  </a>
                ),

                /* Horizontal rule */
                hr: () => <hr className='my-8 border-white/10' />,

                /* Images */
                img: ({ src, alt }) => (
                  <img src={src} alt={alt || ''} className='my-6 w-full rounded-xl' />
                ),
              }}
            >
              {data.content || 'No content yet.'}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
