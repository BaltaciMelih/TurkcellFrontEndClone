import React from "react";
import "./Category.scss";
import Arrow from "../../assets/games/icons-arrow-large.png";
import FilterCheckbox from "../filter/filter";
import Utility from "../utility/Utility";

const Category = () => {
  let values = Utility().map(item => item[1])
  
  let dd = values.flat()
    .map((x) => x.genres)
    .flat();

  let checkboxValues = [...new Set(dd)].sort()

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Oyun Türü
        </h3>
        <img
          src={Arrow}
          width={40}
          className="arrow text-white"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        />
      </div>

        
      {checkboxValues.map((item, index) => <FilterCheckbox item={item} key={index}></FilterCheckbox>)}
      
    </>
  );
};

export default Category;
