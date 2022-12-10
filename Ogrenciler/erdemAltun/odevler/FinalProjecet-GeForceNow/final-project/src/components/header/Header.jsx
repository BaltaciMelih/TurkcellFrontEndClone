import React from "react";
import Logo from "../../assets/navbar/logo@3x.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light px-lg-5 px-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} className="logo mx-sm-0" alt="logo" />
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
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="#">
                  Games
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="#">
                  Membership
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="#">
                  Download
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link" href="#">
                  Membership
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-success px-0">
              LET'S PLAY
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
