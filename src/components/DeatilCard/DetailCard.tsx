import Link from 'next/link';
import Image from 'next/image';
import type { CharacterType } from '../../types/types';
import { useAppSelector } from '@/store/hooks/hooks';
import { selectPage } from '@/store/slices/page.slice';

type PropsType = {
  character: CharacterType;
};

const DetailCard: React.FC<PropsType> = ({ character }) => {
  const { currentPage } = useAppSelector(selectPage);

  return (
    <div>
      <ul className="mb-4">
        <li className="rounded overflow-hidden">
          <Image src={character.imageUrl} width={300} height={200} alt="pic" />
        </li>
        <li>Name: {character?.name}</li>
      </ul>
      <ul className="mb-4">
        Tv Shows:
        {character.tvShows.length ? (
          character.tvShows.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <p>no TV shows</p>
        )}
      </ul>
      <Link href={`/?page=${currentPage}`}>Close</Link>
    </div>
  );
};

export default DetailCard;
