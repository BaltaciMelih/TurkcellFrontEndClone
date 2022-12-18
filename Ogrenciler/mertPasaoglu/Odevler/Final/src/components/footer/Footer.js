import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row d-flex justify-content-between my-3 mx-5 footer">
          <div className="col-6 d-flex footer-end">
            <div className="col">
              <ul>
                <li>Games</li>
                <li>Membership</li>
                <li>Download</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Contact Us</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>FAQs</li>
                <li>Service Status</li>
              </ul>
            </div>
          </div>

          <div className="col-4 d-flex footer-end">
            <div className="col">
              <ul>
                <li>
                  <b>Follow Us!</b>{" "}
                </li>
                <ul>
                  <li>
                    <i></i>
                  </li>
                  <li>
                    <i></i>
                  </li>
                  <li>
                    <i></i>
                  </li>
                  <li>
                    <i></i>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <b>Site Language</b>{" "}
                </li>
                <NavDropdown
                  className="text-dark mt-2"
                  title="English"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                </NavDropdown>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="d-flex bg-dark text-white footer-end px-5">
            <div className="col-10 d-flex mt-3 footer-end">
              <p className="mx-5">Terms of Use</p>
              <p className="mx-5">Privacy Policy</p>
              <p className="mx-5">Cookies</p>
            </div>
            <div className="col-2 my-3">
              <span>Tum Haklari Saklidir</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
