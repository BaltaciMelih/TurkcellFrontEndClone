import React from "react";
import Logo from "../../assets/navbar/logo@3x.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light px-lg-5 px-0">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={Logo}
              className="gameplus-logo mx-sm-0"
              alt="gameplus logo"
            />
          </Link>

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
                <Link
                  to="/games"
                  className="nav-link text-black fw-bold"
                  href="#"
                >
                  Games
                </Link>
              </li>

              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link text-black fw-bold" href="#">
                  Membership
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link text-black fw-bold" href="#">
                  Download
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link text-black fw-bold" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item px-xl-3 px-lg-0">
                <a className="nav-link text-black fw-bold" href="#">
                  Support
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-success fw-bold text-center text-white"
            >
              LET'S PLAY
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
