import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid m-0">
          <NavLink to="/" className="navbar-brand">
            <img className="image-l" src="../assets/logo.png" alt="" />
            <img
              className="image-s"
              src="../assets/logo-black-powered-main.png"
              alt=""
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/games">Games</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/*">Membership</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register">Dowload</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/*">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/*">Support</NavLink>
              </li>
            </ul>
            <NavLink to="/register">
              <Button
                className="nav-item"
                color="primary"
                width="185"
                content="LET'S PLAY"
              ></Button>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
