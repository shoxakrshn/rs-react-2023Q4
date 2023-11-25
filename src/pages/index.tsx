import List from '@/components/List/List';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const currentPage = router.query.page || 1;

  console.log('router', router.query.page);

  useEffect(() => {
    router.push(`/?page=${currentPage}`);
  }, [currentPage]);

  return (
    <main>
      <SearchBar />
      <List />
    </main>
  );
}
