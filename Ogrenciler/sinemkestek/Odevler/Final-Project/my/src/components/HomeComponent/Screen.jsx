import React from "react";
import "../HomeComponent/Home.scss";
import Android from "../../assets/icons/icons-android.svg";
import Mac from "../../assets/icons/icons-pc.svg";
import Windows from "../../assets/icons/icons-mac.svg";

const Screen = () => {
  return (
    <div>
      <div className="screen-container d-flex flex-column align-items-center">
        <div className="screen-header">
          <h3>On all your screens at home and on the go</h3>
        </div>
        <div className="screen-content">
          <div className="available">
            <div className="iconContainer">
              <img src={Windows} alt="" />
            </div>
            <p>Available on Windows </p>
          </div>
          <div className="available">
            <div className="iconContainer">
              <img src={Mac} alt="" />
            </div>
            <p>Available on Mac</p>
          </div>
          <div className="available">
            <div className="iconContainer">
              <img src={Android} alt="" />
            </div>

            <p>Available on Android</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
