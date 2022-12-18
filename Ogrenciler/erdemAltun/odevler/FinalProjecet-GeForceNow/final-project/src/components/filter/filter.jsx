import React, { useState } from "react";

const FilterCheckbox = (props) => {
  const [selectedCategory, setSelectedCategory] = useState([]);

  let arr = [];

  const handleCheckboxChange = (value) => {
    console.log(value);
  };
  return (
    <div className="collapse show" id="collapseExample">
      {props.item !== null && (
        <div className="card filter-games w-100 category-card card-body text-darkgray">
          <div className="mb-3 d-flex check">
            <input
              className="checkbox-input me-3"
              type="checkbox"
              value={props.item}
              onChange={() => handleCheckboxChange(props.item)}
            />
            <span className="checkbox__label ">{props.item}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default FilterCheckbox;
