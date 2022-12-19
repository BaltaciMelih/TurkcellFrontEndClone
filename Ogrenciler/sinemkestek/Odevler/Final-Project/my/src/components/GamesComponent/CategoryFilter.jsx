import React from "react";

import "./CategoryFilter.scss";

const CategoryFilter = ({ categories }) => {
  return (
    <div className="container  my-3">
      <div className="row  desktop-filter">
        <div className=" row  ">
          {/* <div className="non-show-mobile col ">
            <div className="d-flex">
              <h2>Browse Games</h2>
              <Sort></Sort>
            </div>
          </div> */}
        </div>
        <h5 className="text-light align-start">Filtreler</h5>
        <div className="accordion col " id="accordionCategory">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Genre Filters
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionCategory"
            >
              <div className="accordion-body">
                <ul className="p-0">
                  {categories.map((category) => {
                    return (
                      <li>
                        <input type="checkbox" />{" "}
                        <label htmlFor="">{category}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
