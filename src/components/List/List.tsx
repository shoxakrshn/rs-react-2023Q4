import Item from '../Item/Item';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetCharactersQuery } from '../../store/api';
import { useEffect } from 'react';
import { selectBasic, updateLoaderSearch } from '../../store/slice';
import { useRouter } from 'next/router';

const List: React.FC = () => {
  const { search, pageSize, loaderSearch } = useAppSelector(selectBasic);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentPage = +(router.query.page as string);

  const { data, isFetching } = useGetCharactersQuery({
    search,
    pageSize,
    pageNumber: currentPage || 1,
  });

  useEffect(() => {
    dispatch(updateLoaderSearch(isFetching));
  }, [isFetching]);

  if (data?.data.length === 0) {
    return <p>no results</p>;
  }

  if (loaderSearch) return <Loader />;

  return (
    <main>
      <Pagination
        nextPage={data ? data.info.nextPage : null}
        prevPage={data ? data.info.previousPage : null}
      />
      <div className="flex gap-4">
        <ul className="flex flex-wrap gap-x-2  basis-[300px] grow max-w-[853px] gap-y-5 mb-4">
          {data?.data.map((character) => (
            <Item character={character} key={character._id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default List;
