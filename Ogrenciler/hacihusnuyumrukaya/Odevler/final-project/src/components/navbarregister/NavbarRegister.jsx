import React from "react";
import styles from "./NavbarRegister.module.scss";
import logo from "../../images/logo.png";
import {Nav,Navbar,Container} from 'react-bootstrap';
 const NavbarRegister= () => {
  return <div > 
    <Navbar  expand="lg" className={styles.bgheader} >
      <Container fluid="lg" className="bg-white">
       <Nav.Link href="/"><img alt="" src={logo} className={styles.logo}/></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav text-dark">
          <Nav className="ms-auto">
            <Navbar.Text className={styles.Games}> <a href="/games">Games</a></Navbar.Text>
            <Navbar.Text className={styles.Membership}> <a href="/">Membership</a></Navbar.Text>
            <Navbar.Text className={styles.Download}> <a href="/">Download</a></Navbar.Text>
            <Navbar.Text className={styles.Blog}> <a href="/">Blog</a></Navbar.Text>
            <Navbar.Text className={styles.Support}> <a href="/">Support</a></Navbar.Text>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>


  </div>;
};

export default NavbarRegister;
