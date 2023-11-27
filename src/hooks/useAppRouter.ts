import { useRouter } from 'next/router';

export const useAppRouter = () => {
  const router = useRouter();
  const { page, limit, search, characterId } = router.query;

  return { page, limit, search, characterId, router };
};
