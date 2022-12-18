import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import Style from "./navbar.css";

const Navbar = () => {
  const NavUnlisted = styled.ul`
  a {
    text-decoration: none;
  }
  .current{
    background-color:blue;
  }
`;

  // const linkStyle = (params) =>
  //   params.isActive ? Style.style : null;
  return (
    // <div>
    //   <NavLink to="/" className={linkStyle}>
    //     Anasayfa
    //   </NavLink>
    //   <NavLink to="/user" className={linkStyle}>
    //     Kullanıcı
    //   </NavLink>
    // </div>
    <div>
      <NavUnlisted>
      <NavLink to="/" activeClassName="current" exact>
        Anasayfa
      </NavLink>
      <NavLink to="/user" activeClassName="current" exact>
        Kullanıcı
      </NavLink>
    </NavUnlisted>
    </div>
  );
};

export default Navbar;
