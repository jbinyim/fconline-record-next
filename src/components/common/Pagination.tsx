interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pagesPerGroup = 5;

  const currentGroup = Math.ceil(currentPage / pagesPerGroup);
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-2 items-center justify-center mt-1">
      {/* 이전 그룹 */}
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        {"[이전]"}
      </button>

      {/* 현재 그룹의 페이지 번호 */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            fontWeight: page === currentPage ? "bold" : "normal",
            textDecoration: page === currentPage ? "underline" : "none",
          }}
        >
          {page}
        </button>
      ))}

      {/* 다음 그룹 */}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        {"[다음]"}
      </button>
    </div>
  );
};

export default Pagination;
