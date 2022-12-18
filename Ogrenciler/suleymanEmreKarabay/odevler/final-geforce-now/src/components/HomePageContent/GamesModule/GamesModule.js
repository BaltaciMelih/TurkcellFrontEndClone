import React from "react";
import "./GamesModule.scss";
import GamesModuleComponent from "./GamesModuleComponent/GamesModuleComponent";
import ButtonHomePage from "../../Buttons/ButtonHomePage/ButtonHomePage";
import BannerTitle from "../../BannerTitle/BannerTitle";

function GamesModule() {
  return (
    <>
      <div className="games-module container-fluid">
        <div className="container">
          <BannerTitle
            BannerTitle="Choose the game you want to play"
            BannerFontSize="fs-32"
            BannerFontWeight="bold"
            BannerColor="banner-title-green"
            BannerMarginBottom="banner-margin-bottom-32"
          />
          <div className="row">
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/E88FD84E-22D5-438A-B8C6-775B824E55E7.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/58DA1533-C161-4A84-ABCE-AE4F7EFE85EA.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/57C6889C-95CD-44EE-BA3F-4F1FD0607C35.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/C6EB2B80-FE4F-428B-8530-A4FC358308A3.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B7599230-4EE5-473B-B59D-09A588310AAA.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/027E9F95-2FAD-4F5F-BBFF-79EA5384E5D5.png" />
          </div>
          <div className="row mb-3">
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/454A979F-2C27-4A43-9F8A-7B3CA20463C2.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/70910B7E-1DDE-437F-B2FB-5066B93315A4.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/998DA04B-BA15-4A1A-85F8-441663160616.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/9790F664-B4C0-4742-A413-799B7062BB37.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/E8366DBB-4710-45EE-ABEA-C7ABB97CD179.png" />
            <GamesModuleComponent adress="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/35E912FE-5BED-4805-B081-45BF86FC91D4.png" />
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-sm-2 text-center">
              <ButtonHomePage
                buttonTitle="SEE ALL GAMES"
                buttonType="greenButton"
                buttonWitdh="width-185"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamesModule;
