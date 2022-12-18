import React from "react";
import "./Banner.scss";

function Banner(props) {
  return (
    <div
      className={`title ${props.FontSize} ${props.Color} ${props.FontWeight}   ${props.MarginBottom}`}
    >
      {props.Title}
    </div>
  );
}

export default Banner;
