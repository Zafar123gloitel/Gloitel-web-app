import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import data from '../[slug]/data.json';

export default function BlogDetailsPage({ params }: { params: { slug: string } }) {
  const blog = data.blogs.find(b => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedArticles = data.blogs.filter(b => b.slug !== params.slug).slice(0, 3);

  return (
    <main className='min-h-screen bg-black px-5 pt-28 pb-24 text-white sm:px-8 lg:px-12'>
      <article className='mx-auto max-w-6xl'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='mb-4 flex items-center gap-2 text-xs text-gray-500'>
          <Link href='/resources' className='shrink-0 transition hover:text-white'>
            Resources
          </Link>
          <span className='shrink-0 text-white/30'>›</span>
          <Link href='/content' className='shrink-0 transition hover:text-white'>
            Articles
          </Link>
          <span className='shrink-0 text-white/30'>›</span>
          <span aria-current='page' className='truncate text-white/70'>
            {blog.title}
          </span>
        </nav>

        {/* Hero image */}
        <div className='relative aspect-2/1 overflow-hidden rounded-2xl border border-white/10'>
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            unoptimized
            className='object-cover'
          />
        </div>

        {/* Author · Category · Date row */}
        <div className='mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6'>
          <div className='flex items-center gap-3'>
            <div className='relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5'>
              {blog?.authorImage ? (
                <Image
                  src={blog?.authorImage}
                  alt={blog.author}
                  fill
                  unoptimized
                  className='object-cover'
                />
              ) : (
                <div className='flex h-full w-full items-center justify-center text-[10px] font-medium text-white'>
                  {blog.author
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>
              )}
            </div>
            <div className='min-w-0'>
              <p className='truncate text-sm font-medium text-white'>{blog.author}</p>
              <p className='truncate text-xs text-gray-500'>{blog.authorRole}</p>
            </div>
          </div>

          <p className='text-[10px] text-blue-400 uppercase'>
            {blog.category} &nbsp;·&nbsp; {blog.readTime}
          </p>

          <span className='text-xs text-gray-500'>{blog.date}</span>
        </div>

        {/* Title + intro */}
        <h1 className='mt-7 max-w-4xl text-2xl leading-tight font-medium sm:text-3xl'>
          {blog.title}
        </h1>
        <p className='mt-5 max-w-4xl text-sm leading-6 text-gray-400'>{blog.intro}</p>

        {/* Body */}
        <div className='prose prose-invert prose-headings:font-medium prose-headings:text-white prose-p:text-sm prose-p:leading-6 prose-p:text-gray-400 prose-li:text-sm prose-li:text-gray-400 mt-10 max-w-4xl'>
          {blog.sections.map((section, index) => (
            <div key={index}>
              <h2 className='mt-7 max-w-4xl text-xl leading-tight font-medium sm:text-2xl'>
                {section.heading}
              </h2>
              <p className='mt-5 max-w-4xl text-sm leading-6 text-gray-400'>{section.body}</p>
              {section.list && (
                <ul className='list-disc space-y-2 pl-5 marker:text-blue-400'>
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex} className='pl-1'>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section?.image && (
                <div className='not-prose relative my-6 aspect-2/1 overflow-hidden rounded-xl border border-white/10'>
                  <Image
                    src={section?.image}
                    alt={section.heading}
                    fill
                    unoptimized
                    className='object-cover'
                  />
                </div>
              )}
            </div>
          ))}

          <h2 className='mt-7 max-w-4xl text-xl leading-tight font-medium sm:text-2xl'>
            Key Takeaway
          </h2>
          <p className='mt-5 max-w-4xl text-sm leading-6 text-gray-400'>{blog.keyTakeaway}</p>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className='mt-16 border-t border-white/10 pt-10'>
            <div className='grid gap-6 sm:grid-cols-3'>
              {relatedArticles.map(article => (
                <Link
                  key={article.slug}
                  href={article.href}
                  className='group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-white/20'
                >
                  <div className='relative aspect-[16/9] overflow-hidden'>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      unoptimized
                      className='object-cover transition duration-500 group-hover:scale-105'
                    />
                  </div>
                  <div className='p-4'>
                    <div className='flex items-center justify-between'>
                      <p className='text-[10px] text-blue-400 uppercase'>{article.category}</p>
                      <p className='text-[10px] text-gray-500'>{article.date}</p>
                    </div>
                    <h3 className='mt-2 text-sm leading-5 font-medium text-white'>
                      {article.title}
                    </h3>
                    <p className='mt-2 text-[10px] text-gray-500'>{article.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
