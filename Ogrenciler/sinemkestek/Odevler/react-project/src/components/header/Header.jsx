import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBeer } from "react-icons/fa";
import { HiUser, HiShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <div className="navBrand d-flex align-items-center justify-content-center">
        <Navbar.Brand href="#">
          <img style={{ width: "290px", height: "150px" }} src="" alt="logo" />
        </Navbar.Brand>
      </div>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="NavBar mb-3 mx-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#Home" className="nav-item">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#About" className="nav-item">
                    About Us
                  </Nav.Link>
                  <NavDropdown
                    title="Product"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#Shop" className="nav-item">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className="nav-item">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" className="nav-item">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="">
              <button className="btn  m-1 ">
                <HiUser className="nav-logo" />
              </button>
              <button className="btn  m-1">
                <HiShoppingCart className="nav-logo" />
              </button>
            </div>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};
export default Header;
