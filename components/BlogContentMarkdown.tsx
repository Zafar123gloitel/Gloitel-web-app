import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogContentMarkdown({ content }: { content: string }) {
  return (
    <div className='mt-8 max-w-none text-[#d0d0d0]'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className='mt-10 mb-5 text-4xl leading-tight font-bold text-white'>{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className='mt-8 mb-4 text-3xl leading-tight font-bold text-white'>{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className='mt-7 mb-3 text-2xl leading-tight font-semibold text-white'>
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className='my-4 text-base leading-7 whitespace-pre-line text-[#d0d0d0]'>
              {children}
            </p>
          ),
          strong: ({ children }) => <strong className='font-bold text-white'>{children}</strong>,
          em: ({ children }) => <em className='text-[#d0d0d0] italic'>{children}</em>,
          u: ({ children }) => (
            <u className='underline decoration-2 underline-offset-2'>{children}</u>
          ),
          ul: ({ children }) => (
            <ul className='my-5 list-disc space-y-2 pl-6 text-[#d0d0d0]'>{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className='my-5 list-decimal space-y-2 pl-6 text-[#d0d0d0]'>{children}</ol>
          ),
          li: ({ children }) => <li className='leading-7'>{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className='my-6 border-l-4 border-[#1447e6] pl-4 text-[#a0a0a0] italic'>
              {children}
            </blockquote>
          ),
          pre: ({ children }) => (
            <pre className='custom-scrollbar my-6 overflow-x-auto rounded-xl border border-white/10 bg-[#050505] p-0'>
              {children}
            </pre>
          ),
          code: ({ children, className }) =>
            typeof className === 'string' && className.includes('language-') ? (
              <code className='block p-5 font-mono text-sm leading-6 whitespace-pre text-[#e5e7eb]'>
                {children}
              </code>
            ) : (
              <code className='rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-[#93c5fd]'>
                {children}
              </code>
            ),
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
          hr: () => <hr className='my-8 border-white/10' />,
          // Match the image rendering used by the admin blog preview.
          img: ({ src, alt }) => (
            <img src={src} alt={alt || ''} className='my-6 w-full rounded-xl' />
          ),
        }}
      >
        {content || 'No content yet.'}
      </ReactMarkdown>
    </div>
  );
}
