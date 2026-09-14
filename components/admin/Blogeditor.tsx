'use client';

import type { BlogPost } from '@/components/admin/BlogTable';
import {
  ArrowLeft,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  Quote,
  Link2,
  Image as ImageIcon,
  Code,
  Table as TableIcon,
  Video,
  MoreHorizontal,
  Calendar,
  UploadCloud,
  X,
  Eye,
  Send,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useRef, useState } from 'react';

const STORAGE_KEY = 'admin_blogs';
const SITE_PREFIX = 'gloitel.com/resources/articles/';
const CATEGORIES = ['Technology', 'Design', 'Business', 'Engineering', 'Marketing', 'General'];
const AUTHORS = [
  {
    name: 'Shubham Sahu',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205065/Gloitel/Profile%20G/WhatsApp_Image_2026-09-12_at_1.44.35_PM_c6sfqc.jpg',
  },
  {
    name: 'Amit Chandran',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205067/Gloitel/Profile%20G/Amit_kjiavd.png',
  },
  {
    name: 'Durgesh Sahu',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869254/Gloitel/Profile%20G/ChatGPT_Image_Jun_10_2026_03_20_20_PM_jxpzth.png',
  },
];

function toDatetimeLocal(iso?: string) {
  if (!iso) return '';
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

const statusDot: Record<BlogPost['status'], string> = {
  published: 'bg-green-400',
  draft: 'bg-yellow-400',
  scheduled: 'bg-blue-400',
};

interface BlogEditorProps {
  mode: 'create' | 'edit';
  initialData?: BlogPost;
}

export default function BlogEditor({ mode, initialData }: BlogEditorProps) {
  const router = useRouter();
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: initialData?.title ?? '',
    slug: initialData?.slug ?? '',
    excerpt: initialData?.excerpt ?? '',
    content: initialData?.content ?? '',
    thumbnail: initialData?.thumbnail ?? '',
    category: initialData?.category ?? '',
    authorName: initialData?.author?.name ?? AUTHORS[0].name,
    authorImage: initialData?.author?.image ?? AUTHORS[0].image,
    status: initialData?.status ?? ('draft' as BlogPost['status']),
    publishMode: (initialData?.status === 'scheduled' ? 'scheduled' : 'immediate') as
      'immediate' | 'scheduled',
    publishDate:
      toDatetimeLocal(initialData?.publishDate) || toDatetimeLocal(new Date().toISOString()),
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm(f => ({ ...f, [key]: value }));
  }

  function slugify(v: string) {
    return v
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 60);
  }

  function handleTitleChange(value: string) {
    const newSlug = slugify(value);
    setForm(f => ({
      ...f,
      title: value.slice(0, 100),
      slug: f.slug === '' || f.slug === slugify(f.title) ? newSlug : f.slug,
    }));
  }

  // ---- Editor toolbar helpers (plain-text/markdown based) ----
  function wrapSelection(before: string, after: string = before) {
    const ta = contentRef.current;
    if (!ta) return;
    const { selectionStart, selectionEnd, value } = ta;
    const selected = value.slice(selectionStart, selectionEnd);
    const newValue =
      value.slice(0, selectionStart) + before + selected + after + value.slice(selectionEnd);
    update('content', newValue);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(
        selectionStart + before.length,
        selectionStart + before.length + selected.length,
      );
    });
  }

  function prefixLine(prefix: string) {
    const ta = contentRef.current;
    if (!ta) return;
    const { selectionStart, value } = ta;
    const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;
    const newValue = value.slice(0, lineStart) + prefix + value.slice(lineStart);
    update('content', newValue);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(selectionStart + prefix.length, selectionStart + prefix.length);
    });
  }

  function insertBlock(block: string) {
    const ta = contentRef.current;
    if (!ta) return;
    const { selectionStart, value } = ta;
    const newValue = value.slice(0, selectionStart) + block + value.slice(selectionStart);
    update('content', newValue);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(selectionStart + block.length, selectionStart + block.length);
    });
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update('thumbnail', reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleDrop(e: React.DragEvent<HTMLButtonElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update('thumbnail', reader.result as string);
    reader.readAsDataURL(file);
  }

  const wordCount = useMemo(
    () => (form.content.trim() ? form.content.trim().split(/\s+/).length : 0),
    [form.content],
  );
  const readMins = Math.max(1, Math.ceil(wordCount / 200));

  async function persist(status: BlogPost['status']) {
    setSaving(true);
    await new Promise(r => setTimeout(r, 400));

    const now = new Date().toISOString();
    const resolvedPublishDate =
      status === 'scheduled' && form.publishDate ? new Date(form.publishDate).toISOString() : now;

    const post: BlogPost = {
      id: initialData?.id ?? Date.now().toString(),
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      content: form.content,
      thumbnail: form.thumbnail || undefined,
      category: form.category,
      author: {
        name: form.authorName,
        image: form.authorImage,
      },
      status,
      publishDate: resolvedPublishDate,
      updatedAt: now,
      allowComments: initialData?.allowComments ?? true,
      featured: initialData?.featured ?? false,
      seo: initialData?.seo,
      social: initialData?.social,
      schema: initialData?.schema,
      settings: initialData?.settings,
    };

    try {
      const existing: BlogPost[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
      const updated =
        mode === 'edit' ? existing.map(p => (p.id === post.id ? post : p)) : [post, ...existing];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore storage errors
    }

    router.push('/admin/blog');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const finalStatus: BlogPost['status'] =
      form.publishMode === 'scheduled' ? 'scheduled' : 'published';
    persist(finalStatus);
  }

  function handleSaveDraft() {
    persist('draft');
  }

  const inputClass =
    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition-all outline-none placeholder:text-[#969696]/50 focus:border-[#1447e6]/50 focus:ring-1 focus:ring-[#1447e6]/30';
  const selectClass =
    'w-full rounded-lg border border-white/10 bg-[#0f0f0f] px-3 py-2 text-sm text-white outline-none focus:border-[#1447e6]/50 ';

  return (
    <div className='space-y-6'>
      {/* Breadcrumb */}
      <div className='flex items-center gap-3'>
        <Link
          href='/admin/blog'
          className='flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#969696] transition-colors hover:text-white'
        >
          <ArrowLeft size={16} />
        </Link>
        <div className='flex items-center gap-1.5 text-sm text-[#969696]'>
          <span>Blog / Articles</span>
          <span>›</span>
          <span className='text-white'>{mode === 'edit' ? 'Edit Article' : 'Create Article'}</span>
        </div>
      </div>

      <div>
        <h1 className='text-2xl font-bold text-white'>
          {mode === 'edit' ? 'Edit Article' : 'Create Article'}
        </h1>
        <p className='mt-0.5 text-sm text-[#969696]'>
          Write, optimize, and publish content that informs and inspires.
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {/* Main column */}
          <div className='space-y-5 lg:col-span-2'>
            <div className='space-y-5 rounded-xl border border-white/10 bg-[#111111] p-6'>
              {/* Title */}
              <div>
                <div className='mb-2 flex items-center justify-between'>
                  <label className='text-xs font-medium text-[#969696]'>
                    Article Title <span className='text-red-400'>*</span>
                  </label>
                  <span className='text-xs text-[#6b6b6b]'>{form.title.length} / 100</span>
                </div>
                <input
                  value={form.title}
                  onChange={e => handleTitleChange(e.target.value)}
                  maxLength={100}
                  required
                  placeholder='Enter a compelling article title...'
                  className={inputClass}
                />
              </div>

              {/* Category + Author */}
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div>
                  <label className='mb-2 block text-xs font-medium text-[#969696]'>
                    Category <span className='text-red-400'>*</span>
                  </label>
                  <select
                    value={form.category}
                    onChange={e => update('category', e.target.value)}
                    required
                    className={selectClass}
                  >
                    <option value=''>Select a category</option>
                    {CATEGORIES.map(c => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='mb-2 block text-xs font-medium text-[#969696]'>
                    Author <span className='text-red-400'>*</span>
                  </label>
                  <div className='flex items-center gap-2 rounded-lg border border-white/10 bg-[#0f0f0f] px-3 py-2'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10'>
                      <Image
                        src={form?.authorImage}
                        alt={form.authorName}
                        height={50}
                        width={50}
                        className='border0 h-10 rounded-full object-cover'
                      />
                    </div>
                    <select
                      value={form.authorName}
                      onChange={e => {
                        const author = AUTHORS.find(a => a.name === e.target.value);

                        update('authorName', e.target.value);
                        update('authorImage', author?.image ?? '');
                      }}
                      className={selectClass}
                    >
                      {AUTHORS.map(author => (
                        <option key={author.name} value={author.name}>
                          {author.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Toolbar + editor */}
              <div>
                <div className='flex flex-wrap items-center gap-1 rounded-t-lg border border-b-0 border-white/10 bg-[#0f0f0f] px-2 py-2'>
                  <select className='mr-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white'>
                    <option>Paragraph</option>
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                  </select>
                  {[
                    { icon: Bold, onClick: () => wrapSelection('**') },
                    { icon: Italic, onClick: () => wrapSelection('_') },
                    { icon: Underline, onClick: () => wrapSelection('<u>', '</u>') },
                    { icon: List, onClick: () => prefixLine('- ') },
                    { icon: ListOrdered, onClick: () => prefixLine('1. ') },
                    { icon: AlignLeft, onClick: undefined },
                    { icon: AlignCenter, onClick: undefined },
                    { icon: Quote, onClick: () => prefixLine('> ') },
                    { icon: Link2, onClick: () => wrapSelection('[', '](url)') },
                    { icon: ImageIcon, onClick: () => insertBlock('\n![alt text](image-url)\n') },
                    { icon: Code, onClick: () => wrapSelection('`') },
                    {
                      icon: TableIcon,
                      onClick: () => insertBlock('\n| Col 1 | Col 2 |\n| --- | --- |\n| a | b |\n'),
                    },
                    { icon: Video, onClick: () => insertBlock('\n[video](video-url)\n') },
                    { icon: MoreHorizontal, onClick: undefined },
                  ].map(({ icon: Icon, onClick }, i) => (
                    <button
                      key={i}
                      type='button'
                      onClick={onClick}
                      disabled={!onClick}
                      title={!onClick ? 'Coming soon' : undefined}
                      className='rounded-md p-1.5 text-[#969696] transition-colors hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40'
                    >
                      <Icon size={15} />
                    </button>
                  ))}
                </div>
                <textarea
                  ref={contentRef}
                  value={form.content}
                  onChange={e => update('content', e.target.value)}
                  required
                  rows={12}
                  placeholder='Start writing your article here...'
                  className='w-full resize-none rounded-b-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-[#969696]/50 focus:border-[#1447e6]/50'
                />
                <div className='flex items-center justify-between px-1 pt-2 text-xs text-[#6b6b6b]'>
                  <span>{wordCount} words</span>
                  <span>~ {readMins} min read</span>
                </div>
              </div>
            </div>

            {/* URL Slug */}
            <div className='rounded-xl border border-white/10 bg-[#111111] p-6'>
              <div className='mb-2 flex items-center justify-between'>
                <label className='text-xs font-medium text-[#969696]'>
                  URL Slug <span className='text-red-400'>*</span>
                </label>
                <span className='text-xs text-[#6b6b6b]'>{form.slug.length} / 100</span>
              </div>
              <div className='flex items-center overflow-hidden rounded-lg border border-white/10 bg-white/5'>
                <span className='shrink-0 border-r border-white/10 bg-white/5 px-3 py-2.5 text-xs text-[#969696]'>
                  {SITE_PREFIX}
                </span>
                <input
                  value={form.slug}
                  onChange={e => update('slug', slugify(e.target.value).slice(0, 100))}
                  required
                  placeholder='enter-url-slug...'
                  className='flex-1 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#969696]/50'
                />
              </div>
            </div>

            {/* Excerpt */}
            <div className='rounded-xl border border-white/10 bg-[#111111] p-6'>
              <label className='mb-2 block text-xs font-medium text-[#969696]'>
                Excerpt / Short Description <span className='text-red-400'>*</span>
              </label>
              <textarea
                value={form.excerpt}
                onChange={e => update('excerpt', e.target.value)}
                required
                rows={3}
                placeholder='Write a short summary of your article (will be used in listings and meta description)...'
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-5'>
            {/* Publish */}
            <div className='rounded-xl border border-white/10 bg-[#111111] p-5'>
              <div className='mb-4 flex items-center gap-2'>
                <Calendar size={16} className='text-[#1447e6]' />
                <h3 className='text-sm font-semibold text-white'>Publish</h3>
              </div>

              <div className='space-y-4'>
                <div>
                  <label className='mb-1.5 block text-xs text-[#969696]'>
                    Status <span className='text-red-400'>*</span>
                  </label>
                  <div className='relative'>
                    <span
                      className={`pointer-events-none absolute top-1/2 left-3 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${statusDot[initialData?.status ?? 'published']}`}
                    />
                    <select
                      value={form.status}
                      onChange={e => update('status', e.target.value as BlogPost['status'])}
                      className={`${selectClass} pl-6`}
                    >
                      <option value='published'>Published</option>
                      <option value='draft'>Drafted</option>
                      <option value='scheduled'>Scheduled</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='mb-2 block text-xs text-[#969696]'>Publish Date</label>
                  <div className='space-y-2'>
                    <label className='flex items-center gap-2 text-sm text-[#cccccc]'>
                      <input
                        type='radio'
                        name='publishMode'
                        checked={form.publishMode === 'immediate'}
                        onChange={() => update('publishMode', 'immediate')}
                        className='h-4 w-4 accent-[#1447e6]'
                      />
                      Publish Immediately
                    </label>
                    <label className='flex items-center gap-2 text-sm text-[#cccccc]'>
                      <input
                        type='radio'
                        name='publishMode'
                        checked={form.publishMode === 'scheduled'}
                        onChange={() => update('publishMode', 'scheduled')}
                        className='h-4 w-4 accent-[#1447e6]'
                      />
                      Schedule for later
                    </label>
                  </div>

                  <div className='relative mt-3'>
                    <Calendar
                      size={14}
                      className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#6b6b6b]'
                    />
                    <input
                      type='datetime-local'
                      value={form.publishDate}
                      onChange={e => update('publishDate', e.target.value)}
                      disabled={form.publishMode !== 'scheduled'}
                      className={`${selectClass} pl-8 disabled:opacity-50`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className='rounded-xl border border-white/10 bg-[#111111] p-5'>
              <div className='mb-4 flex items-center gap-2'>
                <ImageIcon size={16} className='text-[#1447e6]' />
                <h3 className='text-sm font-semibold text-white'>Featured Image</h3>
              </div>

              <input
                ref={fileInputRef}
                type='file'
                accept='image/png,image/jpeg,image/webp'
                onChange={handleImageUpload}
                className='hidden'
              />

              <button
                type='button'
                onClick={() => fileInputRef.current?.click()}
                onDragOver={e => e.preventDefault()}
                onDrop={handleDrop}
                className='mb-3 flex w-full flex-col items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/5 py-6 text-center transition-colors hover:bg-white/10'
              >
                <div className='mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#1447e6]'>
                  <UploadCloud size={16} className='text-white' />
                </div>
                <span className='text-sm font-medium text-white'>
                  Click to upload{' '}
                  <span className='font-normal text-[#969696]'>or drag and drop</span>
                </span>
                <span className='mt-1 text-[11px] text-[#6b6b6b]'>PNG, JPG, WEBP (Max 5MB)</span>
                <span className='text-[11px] text-[#6b6b6b]'>Recommended size: 1200 x 630 px</span>
              </button>

              {form.thumbnail && (
                <div className='relative overflow-hidden rounded-lg border border-white/10'>
                  <img src={form.thumbnail} alt='' className='h-32 w-full object-cover' />
                  <button
                    type='button'
                    onClick={() => update('thumbnail', '')}
                    className='absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black'
                  >
                    <X size={13} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom action bar */}
        <div className='flex items-center justify-end gap-3 rounded-xl border border-white/10 bg-[#111111] p-4'>
          <button
            type='button'
            onClick={handleSaveDraft}
            disabled={saving}
            className='rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-60'
          >
            Save as Draft
          </button>
          <button
            type='button'
            disabled={saving}
            className='flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-60'
          >
            <Eye size={15} />
            Preview
          </button>
          <button
            type='submit'
            disabled={saving}
            className='flex items-center gap-2 rounded-lg bg-[#1447e6] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1447e6]/80 disabled:opacity-60'
          >
            {saving ? (
              <>
                <span className='h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white' />
                Saving...
              </>
            ) : (
              <>
                <Send size={15} />
                Publish
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
