import { Link, useSearchParams } from 'react-router-dom';
import type { CharacterType } from '../../types/types';

type PropsType = {
  character: CharacterType | undefined;
};

const DetailCard: React.FC<PropsType> = ({ character }) => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') as string;

  return (
    <div>
      <ul className="mb-4">
        <li className="rounded overflow-hidden">
          <img src={character?.imageUrl} alt="pic" />
        </li>
        <li>Name: {character?.name}</li>
      </ul>
      <ul className="mb-4">
        Tv Shows:
        {character?.tvShows.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <Link to={`/?page=${currentPage}`}>Close</Link>
    </div>
  );
};

export default DetailCard;
