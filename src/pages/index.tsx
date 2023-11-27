import Layout from '@/components/Layout/Layout';
import { getCharacters, getRunningQueriesThunk } from '@/store/query/disneyApi';

import { wrapper } from '@/store/store';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { page, limit, search } = router.query;

  const href = search
    ? {
        pathname: '/',
        query: {
          page: page || '1',
          limit: limit || '10',
          search: search || '',
        },
      }
    : {
        pathname: '/',
        query: {
          page: page || '1',
          limit: limit || '10',
        },
      };

  useEffect(() => {
    router.push(href);
  }, []);

  return <Layout />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const { search, limit, page } = context.query;

    store.dispatch(
      getCharacters.initiate({
        search: (search as string) || '',
        pageSize: (limit as string) || '10',
        pageNumber: (page as string) || '1',
      }),
    );

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  },
);
