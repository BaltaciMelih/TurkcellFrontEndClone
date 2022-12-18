import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content-left">
          <ul>
            <li>
              <NavLink>Games</NavLink>
            </li>
            <li>
              <NavLink>Membership</NavLink>
            </li>
            <li>
              <NavLink>Dowload</NavLink>
            </li>
            <li>
              <NavLink>Contact Us</NavLink>
            </li>
            <li>
              <NavLink>Blog</NavLink>
            </li>
            <li>
              <NavLink>FAQs</NavLink>
            </li>
            <li>
              <NavLink>Service Status</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <div className="follow-us">
            <span>Follow Us!</span>
            <div className="follow-us-icon">
              <img src="../assets/icon-facebook.png" alt="" />
              <img src="../assets/icon-instagram.png" alt="" />
              <img src="../assets/icon-twitter.png" alt="" />
              <img src="../assets/icon-youtube.png" alt="" />
            </div>
          </div>
          <div className="language">
            <span>Site Language</span>
            <select name="" id="">
              <option value="">English</option>
              <option value="">Turkish</option>
            </select>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-content d-flex flex-wrap m-auto py-3">
          <div className="d-flex flex-wrap policy">
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
