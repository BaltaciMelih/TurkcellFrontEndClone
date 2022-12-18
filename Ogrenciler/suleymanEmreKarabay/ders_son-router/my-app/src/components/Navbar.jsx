import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {

    const linkClass = (params) =>
    params.isActive ? "bg-red" : "";

  return (
    <div>
      <NavLink to="/" className={linkClass}>
        Anasayfa
      </NavLink>
      <NavLink to="/user" className={linkClass}>
        Kullanıcı
      </NavLink>
    </div>
  );
};

export default Navbar;