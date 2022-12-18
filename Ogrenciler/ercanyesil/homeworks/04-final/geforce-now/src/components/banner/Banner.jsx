import React from 'react';
import modules  from "../../assets/modules-banner-5-logo.png";
import mobileModules  from "../../assets/mobile_modules_banner.png";
import Image from "react-bootstrap/Image";
import "./Banner.scss";

const Banner = () => {
  return (
    <section>
      <Image src={modules} className="banner mobile_banner" />
      <Image src={mobileModules} className="banner web_banner" />
    </section>
  )
}

export default Banner