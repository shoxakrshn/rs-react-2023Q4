type PropsType = {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  prevPageUrl: string | null;
  nextPageUrl: string | null;
};

const Pagination: React.FC<PropsType> = ({
  currentPage,
  nextPage,
  prevPage,
  prevPageUrl,
  nextPageUrl,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <button onClick={prevPage} disabled={prevPageUrl === null}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button onClick={nextPage} disabled={nextPageUrl === null}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
