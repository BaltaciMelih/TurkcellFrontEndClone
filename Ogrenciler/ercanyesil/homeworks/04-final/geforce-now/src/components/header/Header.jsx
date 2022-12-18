import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import Button from '../button/Button';
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <Navbar bg="white" expand="lg" className={styles.headerH}>
      <Container>
      <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className={`me-auto ${styles.rightHeader}`}>
            <Nav.Link as={Link} to="/games">Games</Nav.Link>
            <Nav.Link as={Link} to="/register">Membership</Nav.Link>
            <Nav.Link >Download</Nav.Link>
            <Nav.Link >Blog</Nav.Link>
            <Nav.Link >Support</Nav.Link>   
            <Button className="firstBtn" name={"LET'S PLAY"}></Button>          
          </Nav>  
          

        </Navbar.Collapse>
        
      </Container>
      </Navbar>
    </header>
  )
}

export default Header