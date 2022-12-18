import React from "react";
import styles from "./Logitech.module.scss";
import mobilebanner from "../../images/modules-mobile-banner-2-logos.png";
import desktopbanner from "../../images/modules-banner-5-logo.png";

 const Logitech= () => {

  return <div > 
    <img alt="" src={desktopbanner} className={styles.desktop}/>
    <img alt="" src={mobilebanner} className={styles.mobile}/>


  </div>; 
};

export default Logitech;
