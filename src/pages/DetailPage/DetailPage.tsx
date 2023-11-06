import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { IHero } from '../../types/types';
import { getFromLocalStorage } from '../../service/helpers';
import { getHero } from '../../service/service';

const DetailPage: React.FC = () => {
  const { id } = useParams();

  const [heroInfo, setHeroInfo] = useState<IHero>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const hero: IHero = await getHero(id as string);

      setHeroInfo(hero);
      setIsLoading(false);

      const querySearch = getFromLocalStorage('searchKey');
      const queryPage = getFromLocalStorage('page');

      if (querySearch) {
        setSearchParams({
          search: querySearch,
          page: queryPage,
        });
      } else {
        setSearchParams({
          page: queryPage,
        });
      }
    };

    fetchData();
  }, [id, setSearchParams]);

  const onCloseHandler = () => {
    const querySearch = searchParams.get('search');
    const queryPage = getFromLocalStorage('page');

    if (querySearch) {
      navigate(`/?search=${querySearch}&page=${queryPage}`);
    } else {
      navigate(`/?page=${queryPage}`);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className="mb-4">
            <li className="rounded overflow-hidden">
              <img src={heroInfo?.image} alt="pic" />
            </li>
            <li>Name: {heroInfo?.name}</li>
            <li>Gender: {heroInfo?.gender}</li>
            <li>Species: {heroInfo?.species}</li>
            <li>Status: {heroInfo?.status}</li>
          </ul>
          <button onClick={onCloseHandler}>Close</button>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
