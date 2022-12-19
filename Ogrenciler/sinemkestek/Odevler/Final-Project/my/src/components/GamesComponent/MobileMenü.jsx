import React from "react";
import { useState } from "react";
import "./MobileMenü.scss";

import Sort from "./Sort";
const MobileMenü = () => {
  return (
    <div>
      <div className="row mobil-menü  justify-content-evenly">
        <h3>Browse Games</h3>
        <div className="col-6 ">
          <div className="  mobil-filter">
            <button>Filter</button>
            {/* <span className="close">X</span> */}
          </div>
        </div>
        <div className=" col-6">
          <Sort></Sort>
        </div>
      </div>
    </div>
  );
};

export default MobileMenü;
