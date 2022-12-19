import React from "react";
import "../HomeComponent/Home.scss";
import screenIcon1 from "../../assets/icons/icon-feature-01.svg";
import screenIcon2 from "../../assets/icons/icon-feature-03.svg";
import screenIcon3 from "../../assets/icons/group4.svg";
import screenIcon4 from "../../assets/icons/group.svg";

const Features = () => {
  return (
    <div>
      <div className="features-container d-flex justify-content-center  ">
        <div className="features-content row">
          <div className="features-header col-md-4">
            <div className=" features-header d-flex flex-column  ">
              <h2>Features</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="featureList col-md-8 ">
            <div className="m-2 row">
              <ul className=" col-md-6">
                <li className="list-el">
                  <img src={screenIcon1} alt="" />
                  Lorem ipsum dolor sit amet.
                </li>
                <li className="list-el">
                  <img src={screenIcon2} alt="" />
                  Lorem ipsum dolor sit amet.
                </li>
              </ul>
              <ul className="col-md-6">
                <li className="list-el">
                  <img src={screenIcon3} alt="" />
                  Lorem ipsum dolor sit amet.
                </li>
                <li className="list-el">
                  <img src={screenIcon4} alt="" />
                  Lorem ipsum dolor sit amet.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
