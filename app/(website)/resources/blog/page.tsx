'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, SearchIcon } from '@/components/SvgIcon';
import { getBlogPageNumbers, getBlogPagination } from '@/lib/blogPagination';

type Article = {
  id: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  publishDate?: string;
  image: string;
  href: string;
};

type ApiBlog = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  Description?: string;
  content?: string;
  category?: string;
  thumbnail?: string;
  publishDate?: string;
  author?: { name?: string; image?: string };
};

const fallbackImage =
  'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png';
const fallbackAuthorImage =
  'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_06_16_PM_iabgqm.png';

function toArticle(blog: ApiBlog): Article {
  const wordCount = (blog.content ?? '').trim().split(/\s+/).filter(Boolean).length;
  return {
    id: blog.id,
    category: blog.category || '',
    readTime: `${Math.max(1, Math.ceil(wordCount / 200))} Min Read`,
    title: blog.title,
    description: blog.excerpt || blog.Description || '',
    author: blog.author?.name || 'Gloitel',
    authorRole: 'Author',
    authorImage: blog.author?.image || fallbackAuthorImage,
    date: blog.publishDate
      ? new Date(blog.publishDate).toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })
      : '',
    publishDate: blog.publishDate,
    image: blog.thumbnail || fallbackImage,
    href: `/resources/blog/${blog.slug}`,
  };
}

const PAGE_SIZE_OPTIONS = [4, 6, 8];

export default function ContentPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadArticles() {
      try {
        const blogs: ApiBlog[] = [];
        let page = 1;
        let totalPages = 1;
        do {
          const response = await fetch(`/api/blog?page=${page}&limit=100`, {
            cache: 'no-store',
            signal: controller.signal,
          });
          const result = await response.json();
          if (!response.ok || !result?.success || !Array.isArray(result.data))
            throw new Error('Could not load blogs');
          blogs.push(...result.data);
          totalPages = result.pagination?.totalPages ?? 1;
          page += 1;
        } while (page <= totalPages);
        if (!controller.signal.aborted) setArticles(blogs.map(toArticle));
      } catch {
        if (!controller.signal.aborted) setArticles([]);
      }
    }
    void loadArticles();
    return () => controller.abort();
  }, []);

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
  }, [articles, query]);

  const popularTopics = useMemo(() => {
    const topicCount = new Map<string, number>();

    articles.forEach(article => {
      const category = article.category?.trim();
      if (!category) return;

      topicCount.set(category, (topicCount.get(category) || 0) + 1);
    });

    return Array.from(topicCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
  }, [articles]);

  const featuredArticle = useMemo(() => {
    if (!articles.length) return null;

    return articles.reduce((latest, article) => {
      const latestDate = Date.parse(latest.publishDate ?? '') || 0;
      const articleDate = Date.parse(article.publishDate ?? '') || 0;
      return articleDate > latestDate ? article : latest;
    });
  }, [articles]);

  const totalResults = filteredArticles.length;
  const {
    totalPages,
    currentPage: visiblePage,
    startIndex,
    rangeStart,
    rangeEnd,
  } = getBlogPagination(totalResults, pageSize, currentPage);

  const paginatedArticles = useMemo(
    () => filteredArticles.slice(startIndex, startIndex + pageSize),
    [filteredArticles, startIndex, pageSize],
  );

  const goToPage = (page: number) => {
    if (!Number.isInteger(page) || page < 1 || page > totalPages) return;
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
                      onClick={() => goToPage(visiblePage - 1)}
                      disabled={visiblePage === 1}
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

                    {getBlogPageNumbers(visiblePage, totalPages).map((page, idx) =>
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
                          aria-current={page === visiblePage ? 'page' : undefined}
                          className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition ${
                            page === visiblePage
                              ? 'bg-blue-500 text-white'
                              : 'border border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          {page}
                        </button>
                      ),
                    )}

                    <button
                      onClick={() => goToPage(visiblePage + 1)}
                      disabled={visiblePage === totalPages}
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
              {popularTopics.map(([topic, count]) => (
                <button
                  type='button'
                  key={topic}
                  onClick={() => {
                    setQuery(topic);
                    setCurrentPage(1);
                  }}
                  className='flex w-full items-center rounded-md border border-white/10 bg-[#110E18] px-3 py-3 text-left text-xs text-gray-300'
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
                    {count}
                  </span>
                </button>
              ))}
            </div>
            {featuredArticle && (
              <div className='mt-7 rounded-xl border border-white/10 bg-[#110E18] p-5'>
                <p className='mb-4 text-[10px] text-blue-400 uppercase'>Featured post</p>
                <div className='relative h-40 w-full shrink-0 overflow-hidden rounded-md'>
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    unoptimized
                    className='object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>

                <h3 className='mt-3 text-sm leading-5 font-medium'>{featuredArticle.title}</h3>
                <p className='mt-2 text-xs leading-5 text-gray-500'>
                  {featuredArticle.description}
                </p>
                <Link
                  href={featuredArticle.href}
                  className='mt-4 inline-flex items-center gap-2 text-xs text-blue-400'
                >
                  Read Article <ArrowRightIcon />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
