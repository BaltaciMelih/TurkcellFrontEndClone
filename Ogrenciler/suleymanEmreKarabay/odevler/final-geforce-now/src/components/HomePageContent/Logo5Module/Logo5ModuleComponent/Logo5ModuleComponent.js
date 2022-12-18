import React from "react";
import "./Logo5ModuleComponent.scss";

function Logo5BannerComponent(props) {
  return (
    <div
      className={`altigen d-flex justify-content-center align-items-center border-0 ${props.Logo5BannerDNone}`}
    >
      <img
        className="altigenLogo"
        alt="altigenLogo"
        src={props.Logo5BannerLogo}
      ></img>
    </div>
  );
}

export default Logo5BannerComponent;
