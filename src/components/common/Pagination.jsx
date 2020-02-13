import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, currentPage, pageSize } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map(page => (
        <li
          className={page === currentPage ? "page-item active" : "page-item"}
          key={page}
        >
          <a className="page-link" onClick={() => props.onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
