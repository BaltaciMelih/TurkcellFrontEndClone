import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import Register from "../Register/Register";
import logo from '../../Images/logo.png';
import './navbar.scss';
function navbarRegister() {
  return (
    <div className='container-fluid p-0'>
      <div>
        <Navbar bg="light" expand="lg" className='mx-60'>
          <Container>
            <div>
              <Navbar.Brand href="/"><img src={logo} className="navbar-image ps-60" /></Navbar.Brand>
            </div>
            <div className='pe-60'>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggler' />
              <Navbar.Collapse id="basic-navbar-nav" className='navbar-toggle-collapse'>
                <Nav className="me-auto d-flex align-items-md-center">
                  <NavLink to="/games" className='Navbar-link p-0'>Games</NavLink>
                  <NavLink to="/register" className='Navbar-link p-0'>Membership</NavLink>
                  <NavLink to="/" className='Navbar-link p-0'>Download</NavLink>
                  <NavLink to="/" className='Navbar-link p-0'>Blog</NavLink>
                  <NavLink to="/" className='Navbar-link p-0'>Support</NavLink>
                  <NavLink to="/" className='Navbar-link p-0'><div className='ps-60'><Register text="LET'S PLAY"/></div></NavLink>
                   
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>

  )
}

export default navbarRegister