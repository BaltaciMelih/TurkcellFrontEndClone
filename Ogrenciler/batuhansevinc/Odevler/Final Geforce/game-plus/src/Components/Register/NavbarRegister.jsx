import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Images/logo.png';
import './navbarRegister.scss';
function navbarRegister() {
  return (
    <div className='container-fluid p-0'>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <div>
              <Navbar.Brand href="#home"><img src={logo} className="navbar-image" /></Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggler' />
              <Navbar.Collapse id="basic-navbar-nav" className='navbar-toggle-collapse'>
                <Nav className="me-auto">
                  <Nav.Link href="#">Games</Nav.Link>

                  <Nav.Link href="#">Membership</Nav.Link>
                  <Nav.Link href="#">Download</Nav.Link>
                  <Nav.Link href="#">Blog</Nav.Link>
                  <Nav.Link href="#">Support</Nav.Link>
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