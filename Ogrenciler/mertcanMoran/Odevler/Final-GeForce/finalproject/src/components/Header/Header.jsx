import React from "react";
import logo from "../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white px-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo bg-white" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-collapse-width"
            id="navbarText"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="/games">
                  Games
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="/register">
                  Membership
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="/download">
                  Download
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="/support">
                  Support
                </a>
              </li>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn playbtn">
                  LET'S PLAY
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
