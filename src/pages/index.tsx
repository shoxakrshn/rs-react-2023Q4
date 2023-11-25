import { useAppSelector } from '@/store/hooks/hooks';
import { selectPage } from '@/store/slices/page.slice';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { currentPage } = useAppSelector(selectPage);

  useEffect(() => {
    router.push(`/?page=${currentPage}`);
  }, [currentPage]);
}
