import { useRouter } from 'next/router';

type PropsType = {
  nextPage: string | null;
  prevPage: string | null;
};

const Pagination: React.FC<PropsType> = ({ nextPage, prevPage }) => {
  const router = useRouter();
  const currentPage = +(router.query.page as string);

  const onPrevPage = () => router.push(`/?page=${currentPage - 1}`);
  const onNextPage = () => router.push(`/?page=${currentPage + 1}`);

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
