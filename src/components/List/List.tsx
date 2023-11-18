import Item from '../Item/Item';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { useGetCharactersQuery } from '../../redux/api';

const List: React.FC = () => {
  const { search, pageSize } = useAppSelector((state) => state.basic);

  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') as string;

  const { data, isLoading } = useGetCharactersQuery({
    search,
    pageSize,
    pageNumber: +currentPage || 1,
  });

  if (data?.data.length === 0) {
    return <p>no results</p>;
  }

  if (isLoading) return <Loader />;

  return (
    <main>
      <Pagination
        nextPage={data?.info.nextPage}
        prevPage={data?.info.previousPage}
      />
      <div className="flex gap-4">
        <ul className="flex flex-wrap gap-x-2  basis-[300px] grow max-w-[853px] gap-y-5 mb-4">
          {data?.data.map((character) => (
            <Item character={character} key={character._id} />
          ))}
        </ul>

        <Outlet context={currentPage} />
      </div>
    </main>
  );
};

export default List;
