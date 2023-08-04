interface NavigationProps {
  prev: () => void;
  next: () => void;
  handlePage: (page: number) => void;
  pages: number;
  currentPage: number;
  hasMore?: boolean;
}

export function Navigation({
  prev,
  next,
  handlePage,
  pages,
  currentPage,
  hasMore
}: NavigationProps) {
  const totalPagesToShow = 5;
  const halfOfTotalPages = Math.floor(totalPagesToShow / 2);

  const startPage = Math.max(1, currentPage - halfOfTotalPages);
  const endPage = Math.min(startPage + totalPagesToShow - 1, pages);

  const pagesArray = Array
    .from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
 
  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center -space-x-px h-8 text-md mt-8">
        <button
          onClick={prev}
          disabled={currentPage === 1}
          className="disabled:cursor-not-allowed  flex items-center justify-center px-3.5 h-10 ml-0 leading-tight text-gray-500 bg-white border rounded-l-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
        {pagesArray.map((page) => (
          <button
            key={page}
            onClick={() => handlePage(page)}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border ${
              page === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100'
            } rounded-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={next}
          disabled={!hasMore}
          className="disabled:cursor-not-allowed flex items-center justify-center px-3.5 h-10 leading-tight text-gray-500 bg-white border rounded-r-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </ul>
    </nav>
  );
}
