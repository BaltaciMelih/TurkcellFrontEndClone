import React from "react";
import styles from "./Header.module.scss";
import { ButtonTest } from "../index";
import logo from "../../images/logo.png";
import {Nav,Navbar,Container} from 'react-bootstrap';
 const Header= () => {
  return <div > 
    <Navbar  expand="lg" className={styles.bgheader} >
      <Container fluid="lg" className="bg-white">
      <Nav.Link href="/"><img alt="" src={logo} className={styles.logo}/></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav text-dark">
          <Nav >
            <Navbar.Text className={styles.Games}> <a href="/games" style={{textDecoration:"none"}}>Games</a></Navbar.Text>
            <Navbar.Text className={styles.Membership}> <a href="/" style={{textDecoration:"none"}}>Membership</a></Navbar.Text>
            <Navbar.Text className={styles.Download}> <a href="/" style={{textDecoration:"none"}}>Download</a></Navbar.Text>
            <Navbar.Text className={styles.Blog}> <a href="/" style={{textDecoration:"none"}}>Blog</a></Navbar.Text>
            <Navbar.Text className={styles.Support}> <a href="/" style={{textDecoration:"none"}}>Support</a></Navbar.Text>
          </Nav>
          <Nav.Link href="/register"><ButtonTest className={styles.Rectangle} text={"LET'S PLAY"}></ButtonTest></Nav.Link>
        </Navbar.Collapse>
        </Container>
    </Navbar>


  </div>;
};

export default Header;
