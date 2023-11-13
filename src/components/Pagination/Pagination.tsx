import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../../context/PageContext/PageContext';

type PropsType = {
  nextPage: string | null;
  prevPage: string | null;
};

const Pagination: React.FC<PropsType> = ({ nextPage, prevPage }) => {
  const navigate = useNavigate();
  const page = usePageContext();

  const onPrevPage = () => navigate(`/page/${page - 1}`);
  const onNextPage = () => navigate(`/page/${page + 1}`);

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
