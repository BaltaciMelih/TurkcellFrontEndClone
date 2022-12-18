import React from "react";
import "./ScreensModule.scss";
import BannerTitle from "../../BannerTitle/BannerTitle";

function ScreensBanner() {
  return (
    <div className="ScreensBannerDisDiv">
      <BannerTitle
        BannerTitle="On all your screens at home and on the go"
        BannerFontSize="fs-32"
        BannerFontWeight="bold"
        BannerColor="banner-title-white"
        BannerMarginBottom="banner-margin-bottom-62"
      />{" "}
      <div className="ScreensBannerItems">
        <div className="ScreensBannerItem">
          <div className="ImageDiv">
            <img
              alt="screens"
              src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/C69E6F76-ED36-4FFC-8D75-FFA3188B0E1E.svg"
            ></img>
          </div>
          <div className="ScreensBannerItemTitle">Available on Windows</div>
        </div>
        <div className="ScreensBannerItem">
          <div className="ImageDiv">
            <img
              className="ImageDiv"
              alt="screens"
              src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B9F2C037-179B-4C7E-B3B1-D7440F430386.svg"
            ></img>
          </div>
          <div className="ScreensBannerItemTitle">Available on Mac</div>
        </div>
        <div className="ScreensBannerItem">
          <div className="ImageDiv">
            <img
              alt="screens"
              src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/FF527D5C-B6BD-4D1E-81ED-11062B23BF5B.svg"
            ></img>
          </div>
          <div className="ScreensBannerItemTitle">Available on Android</div>
        </div>
      </div>
    </div>
  );
}

export default ScreensBanner;
