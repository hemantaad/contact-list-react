import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { itemCount, pageSize, currentPage, onPageChange } = this.props;

    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
