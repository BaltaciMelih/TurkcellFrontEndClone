import './header.css';
import Button from '../button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../pics/logo.png';
import { NavLink } from "react-router-dom";

export default function header() {
  return (
    <div className='header'>
      <Navbar expand="lg">
      <Container fluid>
      <NavLink to="/"><Navbar.Brand className="logo"> <img
              src={logo}
              width="317px"
              height="53px"
              className="d-inline-block align-top"
              alt="logo"
      /></Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          <NavLink to="/games" className='navbarText'>Games</NavLink>
            <a className='navbarText' href="#">Membership</a>
            <a className='navbarText' href="#">Download</a>
            <a className='navbarText' href="#">Blog</a>
            <a className='navbarText last' href="#">Support</a>
            <NavLink to="/register"><Button margin=" 20px 0 20px 61px" marginK="20px 0 20px 20px" text="LET'S PLAY"/></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}
