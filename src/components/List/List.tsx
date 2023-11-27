import Item from '../Item/Item';
import Pagination from '../Pagination/Pagination';
import React from 'react';
import type { ResponseType } from '@/types/types';

type PropsType = {
  children?: React.ReactNode;
  data: ResponseType | undefined;
};

const List: React.FC<PropsType> = ({ data, children }) => {
  if (data?.data.length === 0) {
    return <p>no results</p>;
  }

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
