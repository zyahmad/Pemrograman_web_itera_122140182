import { useMemo } from 'react';

function useBookStats(books) {
  return useMemo(() => {
    const total = books.length;
    const owned = books.filter(book => book.status === 'milik').length;
    const reading = books.filter(book => book.status === 'baca').length;
    const toBuy = books.filter(book => book.status === 'beli').length;

    return { total, owned, reading, toBuy };
  }, [books]);
}

export default useBookStats;
