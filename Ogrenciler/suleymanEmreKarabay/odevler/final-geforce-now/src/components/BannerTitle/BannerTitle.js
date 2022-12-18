import React from "react";
import "./BannerTitle.scss";

function BannerTitle(props) {
  return (
    <div
      className={`title ${props.BannerFontSize} ${props.BannerColor} ${props.BannerFontWeight}   ${props.BannerMarginBottom}`}
    >
      {props.BannerTitle}
    </div>
  );
}

export default BannerTitle;
