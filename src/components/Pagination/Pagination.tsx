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
    <>
      <button onClick={prevPage} disabled={prevPageUrl === null}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button onClick={nextPage} disabled={nextPageUrl === null}>
        Next
      </button>
    </>
  );
};

export default Pagination;
