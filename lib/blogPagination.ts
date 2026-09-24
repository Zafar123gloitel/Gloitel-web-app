export function getBlogPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1);

  const shown = new Set([1, total, current - 1, current, current + 1]);
  if (current <= 3) {
    shown.add(2);
    shown.add(3);
  }
  if (current >= total - 2) {
    shown.add(total - 1);
    shown.add(total - 2);
  }
  const pages = [...shown].filter(page => page >= 1 && page <= total).sort((a, b) => a - b);
  const result: (number | 'ellipsis')[] = [];
  for (const page of pages) {
    const previous = result[result.length - 1];
    if (typeof previous === 'number' && page - previous === 2) result.push(previous + 1);
    else if (typeof previous === 'number' && page - previous > 2) result.push('ellipsis');
    result.push(page);
  }
  return result;
}

export function getBlogPagination(totalResults: number, pageSize: number, requestedPage: number) {
  const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  return {
    totalPages,
    currentPage,
    startIndex,
    rangeStart: totalResults === 0 ? 0 : startIndex + 1,
    rangeEnd: Math.min(startIndex + pageSize, totalResults),
  };
}
