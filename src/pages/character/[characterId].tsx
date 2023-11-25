import DetailCard from '../../components/DeatilCard/DetailCard';
import { CharacterType } from '@/types/types';
import { GetServerSidePropsContext } from 'next';

type PropsType = {
  characterData: CharacterType;
};

const CharacterDetailPage: React.FC<PropsType> = ({ characterData }) => {
  // const { data } = useGetDetailsQuery(characterId);

  return <DetailCard character={characterData} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const characterId = context.params?.characterId;
  const request = await fetch(
    `https://api.disneyapi.dev/character/${characterId}`,
  );

  const response = await request.json();
  const { data: characterData } = response;

  return { props: { characterData } };
}

export default CharacterDetailPage;
