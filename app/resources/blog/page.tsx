'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, SearchIcon } from '@/components/SvgIcon';
import { GlowButton } from '@/components';

// Simple unique id generator — call karo, ye ek unique string return karega
let idCounter = 0;
function createId(prefix: string = 'article'): string {
  idCounter += 1;
  return `${prefix}-${Date.now()}-${idCounter}`;
}

const articlesRaw = [
  {
    category: 'AI & Integration',
    readTime: '8 Min Read',
    title: 'Key considerations for introducing AI solutions from prototyping to production',
    description:
      'Scaling machine learning workflows beyond experimental notebooks requires solid infrastructure, observability, and disciplined engineering.',
    author: 'Zafaryab Khann',
    authorRole: 'Principal AI Architect',
    authorImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_06_16_PM_iabgqm.png',
    date: 'May 12, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498265/Gloitel/what-we-do/healthcare-client_tmogav.png',
    href: '/resources/blog/ai-intelligent-systems',
  },
  {
    category: 'Cloud',
    readTime: '11 Min Read',
    title: 'Cloud Architecture Best Practices for High Availability & Highly Scalable Applications',
    description:
      'Architecture patterns for resilient, well-tested, and cost-efficient cloud platforms.',
    author: 'Manish Sahu',
    authorRole: 'Cloud Solutions Architect',
    authorImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_02_32_PM_eguhmv.png',
    date: 'May 03, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    href: '/resources/blog/cloud',
  },
  {
    category: 'Engineering',
    readTime: '6 Min Read',
    title: 'Clean Code Isn’t Enough: Writing Large-Scale Systems That Are Easy to Change',
    description:
      'How to craft maintainable architecture that adapts cleanly as product requirements evolve.',
    author: 'Yashwant Sonkar',
    authorRole: 'Senior Software Engineer',
    authorImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869258/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_06_55_13_PM_a2hint.png',
    date: 'Mar 24, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    href: '/resources/blog/engineering',
  },
  {
    category: 'AI & Integration',
    readTime: '8 Min Read',
    title: 'Key considerations for introducing AI solutions from prototyping to production',
    description:
      'Scaling machine learning workflows beyond experimental notebooks requires solid infrastructure, observability, and disciplined engineering.',
    author: 'Zafaryab Khann',
    authorRole: 'Principal AI Architect',
    authorImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_06_16_PM_iabgqm.png',
    date: 'May 12, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498265/Gloitel/what-we-do/healthcare-client_tmogav.png',
    href: '/resources/blog/ai-intelligent-systems',
  },
  {
    category: 'Cloud',
    readTime: '11 Min Read',
    title: 'Cloud Architecture Best Practices for High Availability & Highly Scalable Applications',
    description:
      'Architecture patterns for resilient, well-tested, and cost-efficient cloud platforms.',
    author: 'Manish Sahu',
    authorRole: 'Cloud Solutions Architect',
    authorImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_02_32_PM_eguhmv.png',
    date: 'May 03, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    href: '/resources/blog/cloud',
  },
  {
    category: 'Engineering',
    readTime: '6 Min Read',
    title: 'Clean Code Isn’t Enough: Writing Large-Scale Systems That Are Easy to Change',
    description:
      'How to craft maintainable architecture that adapts cleanly as product requirements evolve.',
    author: 'Yashwant Sonkar',
    authorRole: 'Senior Software Engineer',
    authorImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869258/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_06_55_13_PM_a2hint.png',
    date: 'Mar 24, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    href: '/resources/blog/engineering',
  },
  {
    category: 'AI & Integration',
    readTime: '8 Min Read',
    title: 'Key considerations for introducing AI solutions from prototyping to production',
    description:
      'Scaling machine learning workflows beyond experimental notebooks requires solid infrastructure, observability, and disciplined engineering.',
    author: 'Zafaryab Khann',
    authorRole: 'Principal AI Architect',
    authorImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_06_16_PM_iabgqm.png',
    date: 'May 12, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498265/Gloitel/what-we-do/healthcare-client_tmogav.png',
    href: '/resources/blog/ai-intelligent-systems',
  },
  {
    category: 'Cloud',
    readTime: '11 Min Read',
    title: 'Cloud Architecture Best Practices for High Availability & Highly Scalable Applications',
    description:
      'Architecture patterns for resilient, well-tested, and cost-efficient cloud platforms.',
    author: 'Manish Sahu',
    authorRole: 'Cloud Solutions Architect',
    authorImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_02_32_PM_eguhmv.png',
    date: 'May 03, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    href: '/resources/blog/cloud',
  },
  {
    category: 'Engineering',
    readTime: '6 Min Read',
    title: 'Clean Code Isn’t Enough: Writing Large-Scale Systems That Are Easy to Change',
    description:
      'How to craft maintainable architecture that adapts cleanly as product requirements evolve.',
    author: 'Yashwant Sonkar',
    authorRole: 'Senior Software Engineer',
    authorImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869258/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_06_55_13_PM_a2hint.png',
    date: 'Mar 24, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    href: '/resources/blog/engineering',
  },
];

// Har article ko ek unique id assign kar diya
const articles = articlesRaw.map(article => ({
  id: createId('article'),
  ...article,
}));

const topics = [
  'AI & Intelligent Systems',
  'Engineering',
  'Architecture',
  'Cloud',
  'DevOps',
  'Design',
];

const PAGE_SIZE_OPTIONS = [4, 6, 8];

// Page number list ke beech mein ellipsis ("...") dikhane ke liye helper
function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  const delta = 1;
  const pages: (number | 'ellipsis')[] = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== 'ellipsis') {
      pages.push('ellipsis');
    }
  }

  return pages;
}

export default function ContentPage() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCurrentPage(1); // search karte waqt page 1 pe reset
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // page size badalne par page 1 pe reset
  };

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return articles;
    const q = query.toLowerCase();
    return articles.filter(
      article =>
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q),
    );
  }, [query]);

  const totalResults = filteredArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));

  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredArticles.slice(start, start + pageSize);
  }, [filteredArticles, currentPage, pageSize]);

  const rangeStart = totalResults === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const rangeEnd = Math.min(currentPage * pageSize, totalResults);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <main className='min-h-screen bg-black px-5 pt-28 pb-20 text-white sm:px-8 lg:px-12'>
      <div className='mx-auto max-w-6xl'>
        <header className='mx-auto max-w-3xl text-center'>
          <div className='mb-4 flex items-center gap-2 text-sm'>
            <Link href='/resources' className='text-white/55 transition hover:text-white'>
              Resources
            </Link>
            <span className='text-white/30'>›</span>
            <span className='text-white/85'>{'Blog'}</span>
          </div>
          <h1 className='mt-5 text-4xl font-medium tracking-tight sm:text-5xl'>
            Engineering &amp; Design Insights
          </h1>
          <p className='mt-4 text-sm leading-6 text-gray-400'>
            Expert perspectives, technical deep dives, and system architecture blueprints from our
            global engineering teams.
          </p>
          <div className='mt-7 flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-gray-500 focus-within:border-white/25'>
            <input
              type='text'
              value={query}
              onChange={handleChange}
              placeholder={'Search articles...'}
              className='text-title w-full bg-transparent text-left text-lg placeholder:text-lg placeholder:text-gray-500 focus:outline-none'
            />
            <span className='ml-auto text-gray-400'>
              <SearchIcon size={25} />
            </span>
          </div>
        </header>

        <div className='mt-16 grid gap-12 lg:grid-cols-[1fr_280px]'>
          <section>
            <h2 className='mb-6 text-lg font-medium'>Latest Publications</h2>
            <div className='space-y-1'>
              {paginatedArticles.map(article => (
                <Link
                  key={article.id}
                  href={article.href}
                  className='group flex gap-5 border-b border-white/10 py-5'
                >
                  <div className='relative h-28 w-36 shrink-0 overflow-hidden rounded-md sm:h-32 sm:w-48'>
                    <Image
                      src={article.image}
                      alt=''
                      fill
                      unoptimized
                      className='object-cover transition duration-500 group-hover:scale-105'
                    />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-[10px] uppercase'>
                      <span className='text-blue-400'>{article.category}</span> &nbsp;·&nbsp;{' '}
                      {article.readTime}
                    </p>
                    <h3 className='mt-2 text-base leading-5 font-medium sm:text-xl'>
                      {article.title}
                    </h3>
                    <p className='mt-2 hidden text-sm leading-5 text-gray-500 sm:block'>
                      {article.description}
                    </p>
                    <div className='mt-4 flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <div className='relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10'>
                          <Image
                            src={article.authorImage}
                            alt={article.author}
                            fill
                            unoptimized
                            className='object-cover'
                          />
                        </div>
                        <div className='min-w-0'>
                          <p className='text-title truncate text-sm font-medium'>
                            {article.author}
                          </p>
                          <p className='truncate text-xs text-gray-500'>{article.authorRole}</p>
                        </div>
                      </div>

                      <span className='shrink-0 text-sm text-gray-400'>{article.date}</span>
                    </div>
                  </div>
                </Link>
              ))}

              {paginatedArticles.length === 0 && (
                <p className='py-10 text-center text-sm text-gray-500'>
                  No articles match your search.
                </p>
              )}
            </div>

            {/* Pagination footer: results info + page size + page controls */}
            {totalResults > 0 && (
              <div className='mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row'>
                <div className='flex items-center gap-3 text-xs text-gray-500'>
                  <span>
                    Showing <span className='text-gray-300'>{rangeStart}</span>–
                    <span className='text-gray-300'>{rangeEnd}</span> of{' '}
                    <span className='text-gray-300'>{totalResults}</span>
                  </span>
                  <span className='hidden h-3 w-px bg-white/10 sm:block' />
                  <label className='hidden items-center gap-1.5 sm:flex'>
                    Per page
                    <select
                      value={pageSize}
                      onChange={handlePageSizeChange}
                      className='rounded-md border border-white/10 bg-[#110E18] px-2 py-1 text-xs text-gray-300 focus:border-white/25 focus:outline-none'
                    >
                      {PAGE_SIZE_OPTIONS.map(size => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                {totalPages > 1 && (
                  <div className='flex items-center gap-1.5'>
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label='Previous page'
                      className='flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-gray-300 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10'
                    >
                      <svg width='14' height='14' viewBox='0 0 16 16' fill='none'>
                        <path
                          d='M10 12.5 5.5 8 10 3.5'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>

                    {getPageNumbers(currentPage, totalPages).map((page, idx) =>
                      page === 'ellipsis' ? (
                        <span
                          key={`ellipsis-${idx}`}
                          className='flex h-8 w-8 items-center justify-center text-xs text-gray-600'
                        >
                          …
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          aria-current={page === currentPage ? 'page' : undefined}
                          className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition ${
                            page === currentPage
                              ? 'bg-blue-500 text-white'
                              : 'border border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          {page}
                        </button>
                      ),
                    )}

                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label='Next page'
                      className='flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-gray-300 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10'
                    >
                      <svg width='14' height='14' viewBox='0 0 16 16' fill='none'>
                        <path
                          d='M6 3.5 10.5 8 6 12.5'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>

          <aside>
            <h2 className='mb-5 text-sm font-medium'>Popular Topics</h2>
            <div className='space-y-2'>
              {topics.map((topic, index) => (
                <div
                  key={topic}
                  className='flex items-center rounded-md border border-white/10 bg-[#110E18] px-3 py-3 text-xs text-gray-300'
                >
                  <span className='mr-3 text-blue-400'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <g clipPath='url(#clip0_2404_52423)'>
                        <path
                          d='M7.99929 12V3.33307M7.99929 12C7.99968 12.3645 8.07479 12.7254 8.22 13.0597C8.3652 13.3941 8.57741 13.6951 8.84352 13.9442C9.10963 14.1933 9.42399 14.3852 9.76719 14.5081C10.1104 14.631 10.4751 14.6822 10.8389 14.6586C11.2027 14.635 11.5577 14.5371 11.8822 14.3709C12.2066 14.2047 12.4935 13.9737 12.7252 13.6923C12.9569 13.4109 13.1284 13.085 13.2292 12.7347C13.3299 12.3844 13.3578 12.0171 13.3111 11.6556M7.99929 12C7.9989 12.3645 7.92378 12.7254 7.77858 13.0597C7.63337 13.3941 7.42116 13.6951 7.15505 13.9442C6.88894 14.1933 6.57458 14.3852 6.23139 14.5081C5.8882 14.631 5.52345 14.6822 5.15969 14.6586C4.79592 14.635 4.44086 14.5371 4.11642 14.3709C3.79199 14.2047 3.50507 13.9737 3.27339 13.6923C3.04171 13.4109 2.87019 13.085 2.76942 12.7347C2.66864 12.3844 2.64076 12.0171 2.68748 11.6556M7.99929 3.33307C7.99928 3.02628 8.06984 2.72368 8.20553 2.44853C8.34122 2.17337 8.5384 1.93311 8.7818 1.74634C9.02521 1.55957 9.30832 1.4313 9.60924 1.37144C9.91015 1.31159 10.2208 1.32176 10.5172 1.40116C10.8135 1.48057 11.0876 1.62708 11.3183 1.82937C11.549 2.03165 11.73 2.28429 11.8474 2.56773C11.9648 2.85118 12.0154 3.15783 11.9954 3.46396C11.9753 3.7701 11.885 4.06751 11.7316 4.3332M7.99929 3.33307C7.9993 3.02628 7.92874 2.72368 7.79305 2.44853C7.65736 2.17337 7.46018 1.93311 7.21678 1.74634C6.97337 1.55957 6.69026 1.4313 6.38934 1.37144C6.08843 1.31159 5.77778 1.32176 5.48142 1.40116C5.18507 1.48057 4.91095 1.62708 4.68028 1.82937C4.44961 2.03165 4.26857 2.28429 4.15117 2.56773C4.03376 2.85118 3.98314 3.15783 4.00322 3.46396C4.0233 3.7701 4.11354 4.06751 4.26696 4.3332M9.99947 8.66659C9.42262 8.49797 8.91593 8.14699 8.55534 7.66622C8.19474 7.18545 7.99965 6.60079 7.99929 5.99983C7.99893 6.60079 7.80384 7.18545 7.44324 7.66622C7.08265 8.14699 6.57596 8.49797 5.99911 8.66659M11.9977 3.41641C12.3896 3.51717 12.7534 3.70579 13.0616 3.96797C13.3698 4.23015 13.6143 4.55903 13.7766 4.92969C13.9389 5.30036 14.0147 5.70308 13.9983 6.10738C13.9819 6.51167 13.8736 6.90692 13.6818 7.26321M11.9996 12.0001C12.5867 12.0001 13.1573 11.8064 13.6231 11.449C14.0888 11.0916 14.4236 10.5906 14.5756 10.0236C14.7275 9.45656 14.6881 8.85525 14.4635 8.31291C14.2388 7.77056 13.8415 7.31749 13.3331 7.02395M3.99882 12.0001C3.41176 12.0001 2.84112 11.8064 2.37538 11.449C1.90965 11.0916 1.57485 10.5906 1.42291 10.0236C1.27096 9.45656 1.31037 8.85525 1.53501 8.31291C1.75965 7.77056 2.15698 7.31749 2.66537 7.02395M4.00089 3.41641C3.60899 3.51717 3.24516 3.70579 2.93695 3.96797C2.62874 4.23015 2.38424 4.55903 2.22196 4.92969C2.05968 5.30036 1.98388 5.70308 2.0003 6.10738C2.01672 6.51167 2.12493 6.90692 2.31674 7.26321'
                          stroke='#5F83FF'
                          strokeWidth='2'
                          strokeLinecap='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_2404_52423'>
                          <rect width='16' height='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  {topic}
                  <span className='text-title ml-auto flex h-5 w-8 items-center justify-center rounded-full bg-gray-600 text-[10px]'>
                    {26 - index * 3}
                  </span>
                </div>
              ))}
            </div>
            <div className='mt-7 rounded-xl border border-white/10 bg-[#110E18] p-5'>
              <p className='mb-4 text-[10px] text-blue-400 uppercase'>Featured post</p>
              <div className='relative h-40 w-full shrink-0 overflow-hidden rounded-md'>
                <Image
                  src='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498265/Gloitel/what-we-do/healthcare-client_tmogav.png'
                  alt=''
                  fill
                  unoptimized
                  className='object-cover transition duration-500 group-hover:scale-105'
                />
              </div>

              <h3 className='mt-3 text-sm leading-5 font-medium'>
                When Should You Modernize a Legacy System?
              </h3>
              <p className='mt-2 text-xs leading-5 text-gray-500'>
                Practical signals that tell you exactly when to update, redesign, or retire your
                legacy platform.
              </p>
              <Link
                href='/content'
                className='mt-4 inline-flex items-center gap-2 text-xs text-blue-400'
              >
                Read Article <ArrowRightIcon />
              </Link>
            </div>
            <div className='mt-7 rounded-xl border border-white/10 bg-[#110E18] p-5'>
              <h3 className='mt-3 text-sm leading-5 font-medium'>Stay Updated</h3>
              <p className='mt-2 text-xs leading-5 text-gray-500'>
                Get the latest engineering insights, guidelines, and manuals delivered straight to
                your inbox.
              </p>
              <input
                type='text'
                placeholder={'Enter your email'}
                className='text-title mt-2 w-full border border-dashed border-blue-500 bg-transparent p-2 text-left text-sm placeholder:text-sm placeholder:text-gray-500 focus:outline-none'
              />
              <GlowButton
                className='mt-2 w-full'
                buttonText={'Subscribe'}
                buttonLink=''
                onClick={() => {}}
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
