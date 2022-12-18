import React from "react";
import Logo5Component from "./Logo5Component/Logo5Component";
import "./Logo5.scss";
import Banner from "../../Banner/Banner";

function Logo5() {
  return (
    <div className="Logo5 container-fluid">
      <Banner
        Title="Lorem ipsum dolor sit amet consectetur adipiscing"
        FontSize="fs-28"
        FontWeight="normal"
        Color="banner-title-white"
        MarginBottom="banner-margin-bottom-34"
      />
      <div className="Logo5Row justify-content-center align-items-center">
        <Logo5Component
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7614B09F-1509-4DB2-AEA4-CC0E4DC7EA83.png"
          Logo5BannerDNone=""
        />
        <Logo5Component
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/6BEF4BE2-F633-4C6F-B4EE-08517F548B3E.png"
          Logo5BannerDNone=""
        />
        <Logo5Component
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7614B09F-1509-4DB2-AEA4-CC0E4DC7EA83.png"
          Logo5BannerDNone="d-none d-lg-flex"
        />
        <Logo5Component
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/6BEF4BE2-F633-4C6F-B4EE-08517F548B3E.png"
          Logo5BannerDNone="d-none d-lg-flex"
        />
        <Logo5Component
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7614B09F-1509-4DB2-AEA4-CC0E4DC7EA83.png"
          Logo5BannerDNone="d-none d-lg-flex"
        />
      </div>
    </div>
  );
}

export default Logo5;
