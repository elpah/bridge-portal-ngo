import { useState } from "react";
import styles from "./pagination.module.css";

import {HiOutlineArrowLeft,HiOutlineArrowRight } from "react-icons/hi";

// create prop for total pages
// determine number of pages by dividing total blog cards by number of blogs to show at a time
const Pagination = ({ totalPages = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - 1);
    let end = start + 3;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - 3);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      {currentPage !== 1 && (
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.page}
        >
          <HiOutlineArrowLeft/>
        </button>
      )}

      {getVisiblePages().map((page) => (
        <button
          key={page}
          className={`${styles.page} ${
            currentPage === page ? styles.active : ""
          }`}
          onClick={() => goToPage(page)}
        >
          {page}
        </button>
      ))}
      {currentPage !== totalPages && (
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.page}
        >
          <HiOutlineArrowRight/>
        </button>
      )}
    </div>
  );
};

export default Pagination;
