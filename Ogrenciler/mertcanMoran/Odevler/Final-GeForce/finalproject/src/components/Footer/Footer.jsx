import React from "react";
import "../Footer/Footer.scss";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import youtube from "../assets/icon-youtube.svg";
import arrow from "../assets/icons-arrow-large.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container flex-md-row flex-column flex-wrap align-items-center">
        <div>
          <p>Games</p>
          <p>Membership</p>
          <p>Download</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>Blog</p>
        </div>
        <div>
          <p>FAQs</p>
          <p>Service Status</p>
        </div>
        <div>
          <p className="followus">Follow Us</p>
          <div className="icons">
            <img src={facebook} alt="facebook" className="ms-2" />
            <img src={twitter} alt="twitter" className="ms-2" />
            <img src={instagram} alt="instagram" className="ms-2" />
            <img src={youtube} alt="youtube" className="ms-2" />
          </div>
        </div>
        <div>
          <p className="text-dark">Site Language</p>
          <p>
            English <img src={arrow} alt="arrow" />
          </p>
        </div>
      </div>
      <div className="bottom-footer flex-md-row flex-column flex-wrap align-items-center">
        <div className="d-md-flex gap-5">
          <p className="pe-md-5">Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
        <p className="all-right">Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
};

export default Footer;
