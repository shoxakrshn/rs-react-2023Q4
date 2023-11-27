import DetailCard from '../../components/DeatilCard/DetailCard';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/components/Layout/Layout';
import {
  getDetails,
  getRunningQueriesThunk,
  useGetDetailsQuery,
} from '@/store/query/disneyApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { wrapper } from '@/store/store';
import { useAppRouter } from '@/hooks/useAppRouter';

const CharacterDetailPage: React.FC = () => {
  const { router, characterId } = useAppRouter();

  const { data } = useGetDetailsQuery(
    typeof characterId === 'string' ? characterId : skipToken,
    {
      skip: router.isFallback,
    },
  );

  return <Layout>{data && <DetailCard character={data.data} />}</Layout>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const characterId = context.params?.characterId;
    if (typeof characterId === 'string') {
      store.dispatch(getDetails.initiate(characterId));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  },
);

export default CharacterDetailPage;
