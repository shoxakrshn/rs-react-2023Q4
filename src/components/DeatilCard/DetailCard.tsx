import Link from 'next/link';
import Image from 'next/image';
import type { CharacterType } from '../../types/types';
import { useAppRouter } from '@/hooks/useAppRouter';

type PropsType = {
  character: CharacterType;
};

const DetailCard: React.FC<PropsType> = ({ character }) => {
  const { page, limit, search } = useAppRouter();

  const href = search
    ? {
        pathname: `/`,
        query: { page, limit, search },
      }
    : {
        pathname: `/`,
        query: { page, limit },
      };

  return (
    <div>
      <ul className="mb-4">
        <li className="rounded overflow-hidden">
          <Image src={character?.imageUrl} width={300} height={200} alt="pic" />
        </li>
        <li>Name: {character?.name}</li>
      </ul>
      <ul className="mb-4">
        Tv Shows:
        {character?.tvShows.length ? (
          character.tvShows.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <p>no TV shows</p>
        )}
      </ul>
      <Link href={href}>Close</Link>
    </div>
  );
};

export default DetailCard;
