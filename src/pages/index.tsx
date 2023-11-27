import Layout from '@/components/Layout/Layout';
import { useAppRouter } from '@/hooks/useAppRouter';
import { getCharacters, getRunningQueriesThunk } from '@/store/query/disneyApi';

import { wrapper } from '@/store/store';
import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';

export default function Home() {
  const { router, page, limit, search } = useAppRouter();

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
