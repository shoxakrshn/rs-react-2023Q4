import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { CharacterType } from '../../types/types';
import Loader from '../../components/Loader/Loader';
import { getDetails } from '../../service/service';

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const page = useOutletContext();

  const [characterDetail, setCharacterDetail] = useState<CharacterType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const { data } = await getDetails(id as string);

        setCharacterDetail(data);
        setIsLoading(false);
      } catch {
        throw new Error("Can't get detail info");
      }
    };

    fetchData();
  }, [id]);

  const onCloseHandler = () => {
    navigate(`/page/${page}`);
  };

  const tvShowRender = () => {
    if (characterDetail?.tvShows.length === 0) {
      return <p>no shows</p>;
    }

    return (
      <>
        {characterDetail?.tvShows.map((item, idx) => <li key={idx}>{item}</li>)}
      </>
    );
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ul className="mb-4">
            <li className="rounded overflow-hidden">
              <img src={characterDetail?.imageUrl} alt="pic" />
            </li>
            <li>Name: {characterDetail?.name}</li>
          </ul>
          <ul>Tv Shows: {tvShowRender()}</ul>

          <button onClick={onCloseHandler}>Close</button>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
