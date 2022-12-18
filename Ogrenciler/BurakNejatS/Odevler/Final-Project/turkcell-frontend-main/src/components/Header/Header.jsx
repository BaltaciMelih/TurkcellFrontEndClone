import React from "react";
import Nav from "react-bootstrap/Nav";
import Buttons from "../SectionComponent/Buttons";
import { NavLink } from "react-router-dom";

import "./header.css";
import Logo from "./HeaderImage/gamePlus-logo/logo@3x.png";

export const Header = () => {
  return (
    <Nav
      id="navbar"
      className=" navbar  navbar-expand-lg navbar-light sticky-top" >
      <a className="navbar-brand px-5" href="#">
        <NavLink to="/home">
          <img className="logo" src={Logo} />
        </NavLink>
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container-fluid ">
        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-around">
            <li className="nav-item">
              <NavLink
                className="nav-link active p-3"
                aria-current="page"
                to="/games">
                Games
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink className="nav-link" href="#Membership">
                Membership
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink className="nav-link" href="#Download">
                Download
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink className="nav-link" href="#Blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink className="nav-link" href="#Support">
                Support
              </NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <Buttons text="LET'S PLAY" />
          </div>
        </div>
      </div>
    </Nav>
  );
};
