import PageLoader from './PageLoader';

export function LoadingSection({ minHeight = 'min-h-[320px]' }) {
  return <PageLoader className={`px-4 py-10 sm:px-6 lg:px-8 ${minHeight}`} />;
}
