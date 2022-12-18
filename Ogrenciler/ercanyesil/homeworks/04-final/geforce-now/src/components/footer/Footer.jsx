import React from "react";
import styles from "./Footer.module.scss";
import facebook from "../../assets/footer/path.png"
import twitter from "../../assets/footer/path_2.png"
import instagram from "../../assets/footer/shape.png"
import youtube from "../../assets/footer/shape_2.png"
import down from "../../assets/color-black.png"
const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_left}>
          <ul>
            <li>
              <span>Games</span>
            </li>
            <li>
              <span>Membership</span>
            </li>
            <li>
              <span>Download</span>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
            <li>
              <span>Blog</span>
            </li>
            <li>
              <span>FAQs</span>
            </li>
            <li>
              <span>Service Status</span>
            </li>
          </ul>
        </div>
        <div className={styles.footer_content_right}>
          <div className={styles.follow_us}>
            <span>Follow us</span>
            <div className={styles.follow_us_icons}>
                <img src={facebook} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
                <img src={instagram} alt="instagram"/>
                <img src={youtube} alt="youtube"/>
            </div>
          </div>
          <div className={styles.follow_us}>
            <span>Site Language</span>
            <div className={styles.follow_us_icons}>
                <span>English</span>
                <img src={down} alt="down"/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <div className={styles.footer_copyright_content}>
          <div>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>Cookies</span>
          </div>
          <div>
            <span>Tüm hakları saklıdır.</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
