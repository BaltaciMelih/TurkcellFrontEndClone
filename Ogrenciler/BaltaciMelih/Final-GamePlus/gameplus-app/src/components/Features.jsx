import React from "react";

const Features = () => {
  return (
    <div className="features-banner d-flex flex-wrap m-auto">
      <div>
        <h2>Features</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <div className="d-flex gap-3">
          <img
            className="img-fluid"
            src="../assets/icon-feature-01.png"
            alt=""
          />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="d-flex gap-3">
          <img src="../assets/icon-feature-03.png" alt="" />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <div className="d-flex gap-3">
          <img src="../assets/group2.png" alt="" />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="d-flex gap-3">
          <img src="../assets/group.png" alt="" />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
