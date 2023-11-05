import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IHero } from '../../types/types';

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [heroInfo, setHeroInfo] = useState<IHero>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const request = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      const hero: IHero = await request.json();
      setHeroInfo(hero);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className="mb-4">
            <li className="rounded overflow-hidden">
              <img src={heroInfo?.image} alt="pic" />
            </li>
            <li>Name: {heroInfo?.name}</li>
            <li>Gender: {heroInfo?.gender}</li>
            <li>Species: {heroInfo?.species}</li>
            <li>Status: {heroInfo?.status}</li>
          </ul>
          <button onClick={() => navigate('/')}>Close</button>
        </>
      )}
    </div>
  );
};

export default DetailPage;
