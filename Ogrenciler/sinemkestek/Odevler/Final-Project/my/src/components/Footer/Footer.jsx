import React from "react";
import icon from "../../assets/icons/icon-facebook.svg";
import icon2 from "../../assets/icons/icon-twitter.png";
import icon3 from "../../assets/icons/icon-youtube.png";
import icon4 from "../../assets/icons/shape.png";
import "./footer.scss";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container ">
          <div className="row footer justify-content-center mx-auto p-4">
            <div className="footerList d-md-flex text-center text-md-start  justify-content-center col-md-5 ">
              <div>
                <ul>
                  <li>Games</li>
                  <li>Membership</li>
                  <li>Download</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Contact Us</li>
                  <li>Blog</li>
                  <li>Gift Cards</li>
                  <li>Promocode</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>FAQs</li>
                  <li>Service Status</li>
                </ul>
              </div>
            </div>
            <div className="footerItem col-md-3 ms-auto d-md-flex text-center text-md-start ">
              <div className=" social-container">
                <h6>Follow Us!</h6>
                <div className="social-icon">
                  <img src={icon} className="img-fluid" alt="" />
                  <img src={icon2} className="img-fluid" alt="" />
                  <img src={icon3} className="img-fluid" alt="" />
                  <img src={icon4} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="lang ">
                <div className="mb-2">
                  <label htmlFor="lang">Site Language:</label>
                </div>
                <select name="lang" id="langs">
                  <option value="eng">English</option>
                  <option value="turk">Turkish</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className=" bottom-container ">
          <div className=" bottom-footer d-flex  justify-content-around ">
            <div className=" ">
              <div className=" list-item d-flex  ">
                <p className="footer-2">Terms Of Use</p>
                <p className="footer-2">Privacy Policy</p>
                <p className="footer-2">Cookies</p>
              </div>
            </div>
            <div className="">
              <p className="footer-2">Tüm hakları saklıdır</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
