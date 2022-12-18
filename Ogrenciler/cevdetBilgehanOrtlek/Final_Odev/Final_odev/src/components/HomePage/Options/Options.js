import React from "react";
import "./Options.scss";
import OptionsComponent from "./OptionsComponent/OptionsComponent";
import Banner from "../../Banner/Banner";

function Options() {
  return (
    <div className="options container-fluid">
      <div className="container">
        <Banner
          BannerTitle="Lorem ipsum dolor sit amet consectetur"
          BannerFontSize="fs-32"
          BannerFontWeight="bold"
          BannerColor="banner-title-white"
          BannerMarginBottom="banner-margin-bottom-62"
        />
        <div className="row justify-content-between">
          <OptionsComponent
            optionsTitle="BASIC"
            optionsPrice="Free"
            ModuleType="normal"
          />
          <OptionsComponent
            optionsTitle="STANDART"
            optionsPrice="15$/month"
            ModuleType="green"
          />
          <OptionsComponent
            optionsTitle="PREMIUM"
            optionsPrice="30$/month"
            ModuleType="normal"
          />
        </div>
      </div>
    </div>
  );
}

export default Options;
