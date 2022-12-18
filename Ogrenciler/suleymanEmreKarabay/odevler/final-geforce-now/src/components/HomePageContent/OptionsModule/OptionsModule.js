import React from "react";
import "./OptionsModule.scss";
import OptionsModuleComponent from "./OptionsModuleComponent/OptionsModuleComponent";
import BannerTitle from "../../BannerTitle/BannerTitle";

function OptionsModule() {
  return (
    <div className="options-module container-fluid">
      <div className="container">
        <BannerTitle
          BannerTitle="Lorem ipsum dolor sit amet consectetur"
          BannerFontSize="fs-32"
          BannerFontWeight="bold"
          BannerColor="banner-title-white"
          BannerMarginBottom="banner-margin-bottom-62"
        />
        <div className="row justify-content-between">
          <OptionsModuleComponent
            optionsModuleTitle="BASIC"
            optionsModulePrice="Free"
            ModuleComponentType="normal"
          />
          <OptionsModuleComponent
            optionsModuleTitle="STANDART"
            optionsModulePrice="15$/month"
            ModuleComponentType="green"
          />
          <OptionsModuleComponent
            optionsModuleTitle="PREMIUM"
            optionsModulePrice="30$/month"
            ModuleComponentType="normal"
          />
        </div>
      </div>
    </div>
  );
}

export default OptionsModule;
