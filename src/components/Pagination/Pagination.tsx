import { useRouter } from 'next/router';

type PropsType = {
  nextPage: string | null;
  prevPage: string | null;
};

const Pagination: React.FC<PropsType> = ({ nextPage, prevPage }) => {
  const router = useRouter();
  const { page, limit, search } = router.query;

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

    router.push(href);
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

    router.push(href);
  };

  return (
    <div className="flex gap-4 items-center my-4">
      <button onClick={onPrevPage} disabled={prevPage === null}>
        Prev
      </button>
      <span>{page}</span>
      <button onClick={onNextPage} disabled={nextPage === null}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
