import React from "react";
import "./Header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import GreenButton from "../greenButton/GreenButton";
import { RiMenu4Fill } from "react-icons/ri";

function Header() {
  return (
    <Navbar fixed="top" className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="ms-3 brand" href="/">
          <img className="brand-img" src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle className="me-3" aria-controls="basic-navbar-nav">
          <RiMenu4Fill size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav w-100 me-4 justify-content-end gap-5  bg-light ">
            <Nav.Link className="nav-link " href="/games">
              Games
            </Nav.Link>
            <Nav.Link className="nav-link " href="#">
              Membership
            </Nav.Link>
            <Nav.Link className="nav-link " href="#">
              Download
            </Nav.Link>
            <Nav.Link className="nav-link " href="#">
              Blog
            </Nav.Link>
            <Nav.Link className="nav-link " href="#">
              Support
            </Nav.Link>
            <GreenButton variant="dark" href="/register" value="LET'S PLAY" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
