import React from "react";

export const PaginationCustom = (props) => {
  const { totalPages, currentPage, onPageChange } = props;

  if (totalPages <= 1) return null;

  const handleChange = (page) => {
    if (page >= 0 && page <= totalPages && page != currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav className="pagination-custom">
      <ul className="pagination mb-0">
        <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handleChange(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${index === currentPage ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => handleChange(index)}>
              {index + 1}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages - 1 ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => handleChange(currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};
