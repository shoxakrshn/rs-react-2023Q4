import { useNavigate } from 'react-router-dom';
type PropsType = {
  nextPage: string | null;
  prevPage: string | null;
  currentPage: number;
};

const Pagination: React.FC<PropsType> = ({
  nextPage,
  prevPage,
  currentPage,
}) => {
  const navigate = useNavigate();

  const onPrevPage = () => navigate(`/page/${currentPage - 1}`);
  const onNextPage = () => navigate(`/page/${currentPage + 1}`);

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
