import React from "react";
import { Link, NavLink } from "react-router-dom";
import StyledButton from "../Button/StyledButton";
import navlogo from "../../assets/images/navlogo.png";
import "./header.scss";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container   fw-bold ">
          <NavLink className="navbar-brand " to="/home">
            <img src={navlogo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav pe-5 ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link active "
                  aria-current="page"
                  to="/GamesPage"
                >
                  Games
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" href="">
                  Membership
                </NavLink>
              </li>
              <li className="nav-item mx-2" href="#">
                <NavLink className="nav-link">Download</NavLink>
              </li>
              <li className="nav-item mx-2" href="#">
                <NavLink className="nav-link">Blog</NavLink>
              </li>
              <li className="nav-item mx-2" href="#">
                <NavLink className="nav-link">Support</NavLink>
              </li>
            </ul>
            <Link to="/Register">
              <StyledButton bg="#76b900" text="Register">
                LETS PLAY
              </StyledButton>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
