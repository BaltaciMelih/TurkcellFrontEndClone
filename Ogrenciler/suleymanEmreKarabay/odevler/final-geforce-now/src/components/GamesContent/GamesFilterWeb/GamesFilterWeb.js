import React, { useState } from "react";
import "./GamesFilterWeb.scss";

function GamesFilterWeb(props) {
  let [filter, setFilter] = useState([]);

  const changeFilter = (e) => {
    const newFilterItem = e.target;
    if (!filter.includes(newFilterItem) && newFilterItem.checked === true) {
      filter = filter.concat([newFilterItem.id]);
      setFilter(filter);
    } else {
      console.log("silinecek");
    }
  };

  var expanded = false;

  function showCheckboxes() {
    var checkboxes = document.getElementById(props.id);
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  }

  return (
    <form>
      <div className="multiselect">
        <div className="selectBox" onClick={showCheckboxes}>
          <select id={props.selectID}>
            <option>{props.title}</option>
          </select>
          <div className="overSelect"></div>
        </div>
        <div id={props.id}>
          {props.items.map((title, i) => (
            <label key={i} htmlFor={title}>
              <input
                onChange={changeFilter}
                className="input"
                type="checkbox"
                id={title}
              />
              {title}
            </label>
          ))}
        </div>
      </div>
    </form>
  );
}

export default GamesFilterWeb;
