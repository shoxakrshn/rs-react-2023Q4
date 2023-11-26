import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import {
  selectPage,
  updateNextPage,
  updatePrevPage,
} from '@/store/slices/page.slice';
import { useRouter } from 'next/router';

type PropsType = {
  nextPage: string | null;
  prevPage: string | null;
};

const Pagination: React.FC<PropsType> = ({ nextPage, prevPage }) => {
  const router = useRouter();
  const { currentPage } = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  const onPrevPage = () => {
    dispatch(updatePrevPage());
    router.push(`/?page=${currentPage}`);
  };
  const onNextPage = () => {
    dispatch(updateNextPage());
    router.push(`/?page=${currentPage}`);
  };

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
