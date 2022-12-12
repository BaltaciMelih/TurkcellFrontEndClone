import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = (params) =>
    params.isActive ? { backgroundColor: "red" } : { margin: "10px 20px" };
  return (
    <div>
      <NavLink to="/" style={linkStyle}>
        Anasayfa
      </NavLink>
      <NavLink to="/user" style={linkStyle}>
        Kullanıcı
      </NavLink>
      <NavLink to="/portal" style={linkStyle}>
        Kullanıcı
      </NavLink>
      <NavLink to="/parametre/5" style={linkStyle}>
        Kullanıcı
      </NavLink>
      <NavLink to="/haberler" style={linkStyle}>
        Kullanıcı
      </NavLink>
    </div>
  );
};

export default Navbar;
