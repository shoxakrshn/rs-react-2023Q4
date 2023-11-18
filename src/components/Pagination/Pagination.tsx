import { useSearchParams } from 'react-router-dom';

type PropsType = {
  nextPage: string | null | undefined;
  prevPage: string | null | undefined;
};

const Pagination: React.FC<PropsType> = ({ nextPage, prevPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get('page') as string);

  const onPrevPage = () => setSearchParams({ page: `${currentPage - 1}` });
  const onNextPage = () => setSearchParams({ page: `${currentPage + 1}` });

  return (
    <div className="flex gap-4 items-center my-4">
      <button onClick={onPrevPage} disabled={prevPage === null}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button onClick={onNextPage} disabled={nextPage === null}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
