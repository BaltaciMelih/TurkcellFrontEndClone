import React from "react";
import Sort from "./Sort";

const Desktop = () => {
  return (
    <div>
      <div className="desktop-items d-none d-lg-flex d-flex justify-content-between align-items-center ">
        <h2>Browse Games</h2>
        <Sort></Sort>
      </div>
    </div>
  );
};

export default Desktop;
