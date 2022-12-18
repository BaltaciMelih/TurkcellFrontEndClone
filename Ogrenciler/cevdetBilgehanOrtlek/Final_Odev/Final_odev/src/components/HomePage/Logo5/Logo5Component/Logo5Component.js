import React from "react";
import "./Logo5Component.scss";

function Logo5Component(props) {
  return (
    <div
      className={`altigen d-flex justify-content-center align-items-center border-0 ${props.Logo5BannerDNone}`}
    >
      <img
        className="Logo"
        alt="Logo"
        src={props.Logo5BannerLogo}
      ></img>
    </div>
  );
}

export default Logo5Component;
