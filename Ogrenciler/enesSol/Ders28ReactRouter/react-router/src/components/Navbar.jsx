import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const linkStyle = (params) => (params.isActive ? "active" : "inactive");
  return (
    <div>
      <NavLink to="/" className={linkStyle}>
        Anasayfa
      </NavLink>
      <NavLink to="/user" className={linkStyle}>
        Kullanıcı
      </NavLink>
    </div>
  );
};

export default Navbar;
