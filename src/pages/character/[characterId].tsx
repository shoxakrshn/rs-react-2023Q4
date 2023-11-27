import DetailCard from '../../components/DeatilCard/DetailCard';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/components/Layout/Layout';
import {
  getDetails,
  getRunningQueriesThunk,
  useGetDetailsQuery,
} from '@/store/query/disneyApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useRouter } from 'next/router';
import { wrapper } from '@/store/store';

const CharacterDetailPage: React.FC = () => {
  const router = useRouter();
  const { characterId } = router.query;

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
