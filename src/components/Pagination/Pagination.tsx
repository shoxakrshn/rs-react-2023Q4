import React from 'react';
import { useAppRouter } from '@/hooks/useAppRouter';

type PropsType = {
  nextPage: string | null;
  prevPage: string | null;
};

const Pagination: React.FC<PropsType> = ({ nextPage, prevPage }) => {
  const { router, page, limit, search } = useAppRouter();

  const onPrevPage = () => {
    const href = search
      ? {
          pathname: '/',
          query: {
            page: +(page as string) - 1,
            limit,
            search,
          },
        }
      : {
          pathname: '/',
          query: {
            page: +(page as string) - 1,
            limit,
          },
        };

    router.push(href, undefined, { shallow: true });
  };

  const onNextPage = () => {
    const href = search
      ? {
          pathname: '/',
          query: {
            page: +(page as string) + 1,
            limit,
            search,
          },
        }
      : {
          pathname: '/',
          query: {
            page: +(page as string) + 1,
            limit,
          },
        };

    router.push(href, undefined, { shallow: true });
  };

  return (
    <div className="flex gap-4 items-center my-4">
      <button onClick={onPrevPage} disabled={prevPage === null}>
        Prev
      </button>
      <span data-testid="pageSpan">{page}</span>
      <button onClick={onNextPage} disabled={nextPage === null}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
