import React from "react";
 import { BsFillCartPlusFill } from "react-icons/bs";
 import { FiUser } from "react-icons/fi";
//  import styles from "./Navbar.module.scss";
import {Button,Form,Nav,Navbar} from 'react-bootstrap';

 const Navbars= () => {
  return <div > 
    <Navbar bg="light" expand="xl" className="text-center bg-light">
    <div className="ms-5">LOGO</div>
      <Nav className="ms-auto  fs-5 d-flex">
      <Form className="d-flex ">
            <Button href="/login" variant="outline-secondary me-3"><FiUser/>Giriş Yap</Button>
            <Button  variant="outline-secondary me-5"><BsFillCartPlusFill/> Sepetim</Button>
      </Form>
      </Nav>
      </Navbar>
      
   <Navbar bg="light" expand="xl" >
    
        <Navbar.Brand href="#home" className="ms-3 fs-5">E-Ticaret</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ms-3">
          <Nav className="me-auto ms-5 fs-5">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <Nav.Link href="/product">Ürünler</Nav.Link>
            <Nav.Link href="/">Hakkımızda</Nav.Link>
            <Nav.Link href="/">İletişim</Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
   
        </Navbar.Collapse>

    </Navbar>
       {/* <div className={styles.bg}>
      <nav className="text-center">
        E-ticaret
        <button><BsFillCartPlusFill/>Sepetim</button>
      </nav>
      <nav className="navbar navbar-expand-lg " >
    
          <div className="container-fluid">
            <a className="navbar-brand col-3 ms-4" href="#">Tahta Kaşık</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar" aria-controls="Navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="Navbar">
              <ul className="navbar-nav me-auto mb-2 ms-5 mb-lg-0 fs-5">
                <li className="nav-item me-2">
                  <a className="nav-link active" aria-current="page" href="/">Ana Sayfa</a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link" href="/product">Ürünler</a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link" href="/admin">Hakkımızda</a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link" href="/admin">İletişim</a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link" href="/admin">Giriş Yap</a>
                </li>
              </ul>
            </div>
          </div>
      
  </nav>
  </div>   */}
  </div>;
};

export default Navbars;
