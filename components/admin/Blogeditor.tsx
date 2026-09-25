'use client';

import type { BlogPost } from '@/components/admin/BlogTable';
import BlogPreview from './BlogPreview';
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
  Eye,
  Send,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useRef, useState } from 'react';
import { ImageUploadCard } from '@/uiComponents/ImageUploadCard';

const CATEGORIES = ['Technology', 'Design', 'Business', 'Engineering', 'Marketing', 'General'];
const INDUSTRIES = [
  'Healthcare & MedTech',
  'Finance & Banking',
  'Real Estate & PropTech',
  'Retail & E-commerce',
  'Education',
  'Travel & Hospitality',
  'Technology',
  'Other',
];
const SERVICES = [
  'Product Engineering',
  'AI & Intelligent Systems',
  'Digital Experience Design',
  'Enterprise Modernization',
  'Cloud & DevOps',
  'Data Engineering',
  'Quality Engineering',
];
const AUTHORS = [
  {
    name: 'Shubham Sahu',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789205065/Gloitel/Profile%20G/WhatsApp_Image_2026-09-12_at_1.44.35_PM_c6sfqc.jpg',
  },
  {
    name: 'Amit Charde',
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
  contentType?: 'article' | 'case-study';
}

export default function BlogEditor({
  mode,
  initialData,
  contentType = 'article',
}: BlogEditorProps) {
  const router = useRouter();
  const isCaseStudy = contentType === 'case-study';
  const contentLabel = isCaseStudy ? 'Case Study' : 'Article';
  const sectionLabel = isCaseStudy ? 'Case Studies' : 'Blog / Articles';
  const basePath = isCaseStudy ? '/admin/case-studies' : '/admin/blog';
  const sitePrefix = isCaseStudy
    ? 'gloitel.com/resources/case-studies/'
    : 'gloitel.com/resources/articles/';
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [saving, setSaving] = useState(false);
  const savingRef = useRef(false);
  const [saveError, setSaveError] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const [form, setForm] = useState({
    title: initialData?.title ?? '',
    Description: initialData?.Description ?? '',
    slug: initialData?.slug ?? '',
    excerpt: initialData?.excerpt ?? '',
    content: initialData?.content ?? '',
    thumbnail: initialData?.thumbnail ?? '',
    banner: initialData?.banner ?? '',
    category: initialData?.category ?? '',
    industry: initialData?.industry ?? '',
    service: initialData?.service ?? '',
    liveWebsiteLink: initialData?.liveWebsiteLink ?? '',
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
      .replace(/[\s-]+/g, '-')
      .slice(0, 60)
      .replace(/^-|-$/g, '');
  }

  function handleTitleChange(value: string) {
    const newSlug = slugify(value);
    setForm(f => ({
      ...f,
      title: value.slice(0, 100),
      slug: f.slug === '' || f.slug === slugify(f.title) ? newSlug : f.slug,
    }));
  }

  function handleFormatChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const format = e.target.value;
    const ta = contentRef.current;

    if (!ta) return;

    const { selectionStart, selectionEnd, value } = ta;
    const selected = value.slice(selectionStart, selectionEnd);

    // Agar text select hai, usko heading banao
    if (selected.trim()) {
      const lines = selected.split('\n');

      const prefixMap: Record<string, string> = {
        paragraph: '',
        h1: '# ',
        h2: '## ',
        h3: '### ',
      };

      const prefix = prefixMap[format] ?? '';

      const formatted = lines
        .map(line => {
          // Existing heading prefixes remove karo
          const cleanLine = line.replace(/^#{1,6}\s+/, '');
          return prefix + cleanLine;
        })
        .join('\n');

      const newValue = value.slice(0, selectionStart) + formatted + value.slice(selectionEnd);

      update('content', newValue);

      requestAnimationFrame(() => {
        ta.focus();
        ta.setSelectionRange(selectionStart, selectionStart + formatted.length);
      });

      return;
    }

    // Agar text select nahi hai, current line par heading lagao
    const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;
    const lineEnd = value.indexOf('\n', selectionStart);

    const actualLineEnd = lineEnd === -1 ? value.length : lineEnd;
    const currentLine = value.slice(lineStart, actualLineEnd);

    // Existing heading remove karo
    const cleanLine = currentLine.replace(/^#{1,6}\s+/, '');

    const prefixMap: Record<string, string> = {
      paragraph: '',
      h1: '# ',
      h2: '## ',
      h3: '### ',
    };

    const prefix = prefixMap[format] ?? '';
    const formattedLine = prefix + cleanLine;

    const newValue = value.slice(0, lineStart) + formattedLine + value.slice(actualLineEnd);

    update('content', newValue);

    requestAnimationFrame(() => {
      ta.focus();

      const newPosition = lineStart + formattedLine.length;

      ta.setSelectionRange(newPosition, newPosition);
    });
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

  function prefixSelectedLines(prefix: string, ordered = false) {
    const ta = contentRef.current;
    if (!ta) return;

    const { selectionStart, selectionEnd, value } = ta;

    // Selection se poori lines nikalo
    const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;

    const nextNewLine = value.indexOf('\n', selectionEnd);
    const lineEnd = nextNewLine === -1 ? value.length : nextNewLine;

    const selectedBlock = value.slice(lineStart, lineEnd);

    const lines = selectedBlock.split('\n');

    const formatted = lines
      .map((line, index) => {
        // Existing list prefix remove
        const cleanLine = line.replace(/^\s*(?:[-*+]|\d+\.)\s+/, '');

        if (!cleanLine.trim()) return cleanLine;

        if (ordered) {
          return `${index + 1}. ${cleanLine}`;
        }

        return `${prefix}${cleanLine}`;
      })
      .join('\n');

    const newValue = value.slice(0, lineStart) + formatted + value.slice(lineEnd);

    update('content', newValue);

    requestAnimationFrame(() => {
      ta.focus();

      ta.setSelectionRange(lineStart, lineStart + formatted.length);
    });
  }
  function addBulletList() {
    prefixSelectedLines('- ');
  }
  function addOrderedList() {
    prefixSelectedLines('', true);
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

  const wordCount = useMemo(
    () => (form.content.trim() ? form.content.trim().split(/\s+/).length : 0),
    [form.content],
  );
  const readMins = Math.max(1, Math.ceil(wordCount / 200));

  async function persist(status: BlogPost['status']) {
    if (savingRef.current) return;
    savingRef.current = true;
    setSaving(true);
    setSaveError('');

    try {
      if (
        status === 'scheduled' &&
        (!form.publishDate || Number.isNaN(new Date(form.publishDate).getTime()))
      ) {
        throw new Error('Please select a valid publish date.');
      }
      const now = new Date().toISOString();
      const resolvedPublishDate =
        status === 'scheduled'
          ? new Date(form.publishDate).toISOString()
          : initialData?.status === 'published' && status === 'published'
            ? initialData.publishDate
            : now;

      const post: BlogPost = {
        id: initialData?.id ?? Date.now().toString(),
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content: form.content,
        Description: form.Description,
        thumbnail: form.thumbnail,
        banner: form.banner,
        category: form.category,
        author: isCaseStudy
          ? undefined
          : {
              name: form.authorName,
              image: form.authorImage,
            },
        industry: isCaseStudy ? form.industry : undefined,
        service: isCaseStudy ? form.service : undefined,
        liveWebsiteLink: isCaseStudy ? form.liveWebsiteLink : undefined,
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

      const endpoint = isCaseStudy ? '/api/case-studies' : '/api/blog';
      const response = await fetch(mode === 'edit' ? `${endpoint}/${initialData?.id}` : endpoint, {
        method: mode === 'edit' ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message || `Could not save the ${contentLabel.toLowerCase()}. Please try again.`,
        );
      }
      router.push(basePath);
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Could not save. Please try again.');
    } finally {
      savingRef.current = false;
      setSaving(false);
    }
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
  const handleImage = (field: 'thumbnail' | 'banner', file: File) => {
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => update(field, reader.result as string);
    reader.readAsDataURL(file);
  };

  const inputClass =
    'w-full rounded-lg border border-white/10 bg-black px-4 py-4 text-sm text-white transition-all outline-none placeholder:text-[#969696]/50 focus:border-[#1447e6]/50 focus:ring-1 focus:ring-[#1447e6]/30';
  const selectClass =
    'w-full rounded-lg border  border-white/10 bg-black  px-3 py-2 text-sm text-white outline-none focus:border-[#1447e6]/50 ';

  return (
    <div className='space-y-6'>
      {/* Breadcrumb */}
      <div className='flex items-center gap-3'>
        <Link
          href={basePath}
          className='flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#969696] transition-colors hover:text-white'
        >
          <ArrowLeft size={16} />
        </Link>
        <div className='flex items-center gap-1.5 text-sm text-[#969696]'>
          <span>{sectionLabel}</span>
          <span>›</span>
          <span className='text-white'>
            {mode === 'edit' ? `Edit ${contentLabel}` : `Create ${contentLabel}`}
          </span>
        </div>
      </div>

      <div>
        <h1 className='text-2xl font-bold text-white'>
          {mode === 'edit' ? `Edit ${contentLabel}` : `Create ${contentLabel}`}
        </h1>
        <p className='mt-0.5 text-sm text-[#969696]'>
          {isCaseStudy
            ? 'Document outcomes, solutions, and measurable client impact.'
            : 'Write, optimize, and publish content that informs and inspires.'}
        </p>
      </div>

      {saveError && (
        <p role='alert' className='text-sm text-red-400'>
          {saveError}
        </p>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {/* Main column */}
          <div className='space-y-5 lg:col-span-2'>
            <div className='space-y-5 rounded-xl border border-white/10 bg-[#080C25] p-6'>
              {/* Title */}
              <div>
                <div className='mb-2 flex items-center justify-between'>
                  <label className='text-xs font-medium text-[#969696]'>
                    {contentLabel} Title <span className='text-red-400'>*</span>
                  </label>
                  <span className='text-xs text-[#6b6b6b]'>{form.title.length} / 100</span>
                </div>
                <input
                  value={form.title}
                  onChange={e => handleTitleChange(e.target.value)}
                  maxLength={100}
                  required
                  placeholder={`Enter a compelling ${contentLabel.toLowerCase()} title...`}
                  className={inputClass}
                />
                {isCaseStudy && (
                  <>
                    <div className='mt-3 mb-2 flex items-center justify-between'>
                      <label className='text-xs font-medium text-[#969696]'>
                        Case Study Description <span className='text-red-400'>*</span>
                      </label>
                      <span className='text-xs text-[#6b6b6b]'>
                        {form.Description.length} / 500
                      </span>
                    </div>
                    <input
                      value={form.Description}
                      onChange={e => update('Description', e.target.value)}
                      maxLength={500}
                      required
                      placeholder={`Enter a compelling ${contentLabel.toLowerCase()} title...`}
                      className={inputClass}
                    />
                  </>
                )}
              </div>

              {/* Content classification fields vary by resource type. */}
              <div
                className={`grid grid-cols-1 gap-4 ${isCaseStudy ? 'sm:grid-cols-4' : 'sm:grid-cols-2'}`}
              >
                <div className=''>
                  <label className='mb-2 block text-xs font-medium text-[#969696]'>
                    Category <span className='text-red-400'>*</span>
                  </label>
                  <div className='flex h-14 items-center gap-2 rounded-lg border border-white/10 bg-black px-3'>
                    <select
                      value={form.category}
                      onChange={e => update('category', e.target.value)}
                      required
                      className={`h-full flex-1 border-none ${selectClass}`}
                    >
                      <option value=''>Select a category</option>
                      {isCaseStudy && form.category && !CATEGORIES.includes(form.category) && (
                        <option value={form.category}>{form.category}</option>
                      )}
                      {CATEGORIES.map(c => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {isCaseStudy ? (
                  <>
                    <div>
                      <label className='mb-2 block text-xs font-medium text-[#969696]'>
                        Industry <span className='text-red-400'>*</span>
                      </label>
                      <div className='flex h-14 items-center rounded-lg border border-white/10 bg-black px-3'>
                        <select
                          value={form.industry}
                          onChange={e => update('industry', e.target.value)}
                          required
                          className={`h-full flex-1 border-none ${selectClass}`}
                        >
                          <option value=''>Select an industry</option>
                          {form.industry && !INDUSTRIES.includes(form.industry) && (
                            <option value={form.industry}>{form.industry}</option>
                          )}
                          {INDUSTRIES.map(industry => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className='mb-2 block text-xs font-medium text-[#969696]'>
                        Service <span className='text-red-400'>*</span>
                      </label>
                      <div className='flex h-14 items-center rounded-lg border border-white/10 bg-black px-3'>
                        <select
                          value={form.service}
                          onChange={e => update('service', e.target.value)}
                          required
                          className={`h-full flex-1 border-none ${selectClass}`}
                        >
                          <option value=''>Select a service</option>
                          {form.service && !SERVICES.includes(form.service) && (
                            <option value={form.service}>{form.service}</option>
                          )}
                          {SERVICES.map(service => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className=''>
                      <label className='mb-2 block text-xs font-medium text-[#969696]'>
                        Live Website Link
                      </label>
                      <input
                        type='url'
                        value={form.liveWebsiteLink}
                        onChange={e => update('liveWebsiteLink', e.target.value)}
                        placeholder='https://example.com'
                        className={inputClass}
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <label className='mb-2 block text-xs font-medium text-[#969696]'>
                      Author <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex h-14 items-center gap-2 rounded-lg border border-white/10 bg-[#0f0f0f] px-3'>
                      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10'>
                        <Image
                          src={form.authorImage}
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
                        required
                        className={`h-full flex-1 border-none ${selectClass}`}
                      >
                        {AUTHORS.map(author => (
                          <option key={author.name} value={author.name}>
                            {author.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Toolbar + editor */}
              <div>
                <div className='flex flex-wrap items-center gap-1 rounded-t-lg border border-b-0 border-white/10 bg-[#0f0f0f] px-2 py-2'>
                  <select
                    defaultValue='paragraph'
                    onChange={handleFormatChange}
                    className='mr-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white'
                  >
                    <option value='paragraph' className='bg-black'>
                      Paragraph
                    </option>

                    <option value='h1' className='bg-black'>
                      Heading 1
                    </option>

                    <option value='h2' className='bg-black'>
                      Heading 2
                    </option>

                    <option value='h3' className='bg-black'>
                      Heading 3
                    </option>
                  </select>

                  {[
                    {
                      icon: Bold,
                      onClick: () => wrapSelection('**'),
                    },
                    {
                      icon: Italic,
                      onClick: () => wrapSelection('*'),
                    },
                    {
                      icon: Underline,
                      onClick: () => wrapSelection('<u>', '</u>'),
                    },
                    {
                      icon: List,
                      onClick: addBulletList,
                    },
                    {
                      icon: ListOrdered,
                      onClick: addOrderedList,
                    },
                    {
                      icon: AlignLeft,
                      onClick: undefined,
                    },
                    {
                      icon: AlignCenter,
                      onClick: undefined,
                    },
                    {
                      icon: Quote,
                      onClick: () => prefixLine('> '),
                    },
                    {
                      icon: Link2,
                      onClick: () => wrapSelection('[', '](url)'),
                    },
                    {
                      icon: ImageIcon,
                      onClick: () => insertBlock('\n![alt text](image-url)\n'),
                    },
                    {
                      icon: Code,
                      onClick: () => insertBlock('\n```\ncode here\n```\n'),
                    },
                    {
                      icon: TableIcon,
                      onClick: () => insertBlock('\n| Col 1 | Col 2 |\n| --- | --- |\n| a | b |\n'),
                    },
                    {
                      icon: Video,
                      onClick: () => insertBlock('\n[video](video-url)\n'),
                    },
                    {
                      icon: MoreHorizontal,
                      onClick: undefined,
                    },
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
                  placeholder={`Start writing your ${contentLabel.toLowerCase()} here...`}
                  className='w-full resize-none rounded-b-lg border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-[#969696]/50 focus:border-[#1447e6]/50'
                />
                <div className='flex items-center justify-between px-1 pt-2 text-xs text-[#6b6b6b]'>
                  <span>{wordCount} words</span>
                  <span>~ {readMins} min read</span>
                </div>
              </div>
            </div>

            {/* URL Slug */}
            <div className='rounded-xl border border-white/10 bg-[#080C25] p-6'>
              <div className='mb-2 flex items-center justify-between'>
                <label className='text-xs font-medium text-[#969696]'>
                  URL Slug <span className='text-red-400'>*</span>
                </label>
                <span className='text-xs text-[#6b6b6b]'>{form.slug.length} / 100</span>
              </div>
              <div className='flex items-center overflow-hidden rounded-lg border border-white/10 bg-white/5'>
                <span className='shrink-0 border-r border-white/10 bg-white/5 px-3 py-2.5 text-xs text-[#969696]'>
                  {sitePrefix}
                </span>
                <input
                  value={form.slug}
                  onChange={e => update('slug', slugify(e.target.value).slice(0, 100))}
                  required
                  placeholder='enter-url-slug...'
                  className='flex-1 bg-black px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#969696]/50'
                />
              </div>
            </div>

            {/* Excerpt */}
            <div className='rounded-xl border border-white/10 bg-[#080C25] p-6'>
              <label className='mb-2 block text-xs font-medium text-[#969696]'>
                Excerpt / Short Description <span className='text-red-400'>*</span>
              </label>
              <textarea
                value={form.excerpt}
                onChange={e => update('excerpt', e.target.value)}
                required
                rows={3}
                placeholder={`Write a short summary of your ${contentLabel.toLowerCase()} (used in listings and meta description)...`}
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-5'>
            {/* Publish */}
            <div className='rounded-xl border border-white/10 bg-[#080C25] p-5'>
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
                      {/* <option value='scheduled'>Scheduled</option> */}
                    </select>
                  </div>
                </div>

                {/* <div>
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
                </div> */}
              </div>
            </div>

            {/* Featured Image */}
            <ImageUploadCard
              title='Thumbnail'
              hint='Recommended size: 600 x 400 px'
              value={form.thumbnail}
              onFile={file => handleImage('thumbnail', file)}
              onRemove={() => update('thumbnail', '')}
            />
            <ImageUploadCard
              title='Banner Image'
              hint='Recommended size: 1200 x 630 px'
              value={form.banner}
              onFile={file => handleImage('banner', file)}
              onRemove={() => update('banner', '')}
              previewClassName='h-40'
            />
          </div>
        </div>

        {/* Bottom action bar */}
        <div className='flex items-center justify-end gap-3 rounded-xl border border-white/10 bg-[#080C25] p-4'>
          <button
            type='button'
            onClick={handleSaveDraft}
            disabled={saving}
            className='rounded-lg border border-white/10 bg-white/5 px-10 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-60'
          >
            Save as Draft
          </button>
          <button
            type='button'
            onClick={() => setShowPreview(true)}
            disabled={saving}
            className='flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-10 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-60'
          >
            <Eye size={15} />
            Preview
          </button>
          <button
            type='submit'
            disabled={saving}
            className='flex items-center gap-2 rounded-lg bg-[#1447e6] px-10 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1447e6]/80 disabled:opacity-60'
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

      <BlogPreview
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        note='This preview includes unsaved changes.'
        contentLabel={contentLabel}
        data={form}
      />
    </div>
  );
}
