import React, { useEffect, useState } from "react";
import "./Sort.scss";
import { Link } from "react-router-dom";
// import gamesSlice from "../../redux/features/games/GamesSlice/gamesSlice";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.games.value,
  };
};
const Sort = (prop) => {
  function sorting(e) {
    if (e.target.value === "1") {
      prop.dispatch({ type: "A-Z" });
    }
    if (e.target.value === "2") {
      prop.dispatch({ type: "Z-A" });
    }
  }

  return (
    <div className="sort-button">
      <select className="form-select button" onChange={(e) => sorting(e)}>
        <option selected value="1">
          Title A-Z
        </option>
        <option value="2">Title Z-A</option>
      </select>
    </div>
  );
};

export default connect(mapStateToProps)(Sort);
