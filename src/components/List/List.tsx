import Item from '../Item/Item';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { useGetCharactersQuery } from '../../store/query/api';
import React, { useEffect } from 'react';
import {
  selectSearch,
  updateLoaderSearch,
} from '../../store/slices/search.slice';
import { useRouter } from 'next/router';

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { search, pageSize, loaderSearch } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentPage = +(router.query.page ?? 1);

  const { data, isFetching } = useGetCharactersQuery({
    search,
    pageSize,
    pageNumber: currentPage,
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
        {children}
      </div>
    </main>
  );
};

export default List;
