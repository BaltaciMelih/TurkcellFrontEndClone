import React from "react";
// import "./Footer.css";
import { Nav, Row, Col } from "react-bootstrap";

function FooterDark() {
  return (
    <Row className="bg-secondary justify-content-center w-100 m-auto text-center">
      <Col className="col-12 col-md-7 mt-2 ">
        <Row>
          <Col className="col-12 col-md-2">
            <Nav.Link className="nav-link " href="/games">
              Contact Us
            </Nav.Link>
          </Col>
          <Col className="col-12 col-md-2">
            <Nav.Link className="nav-link " href="/games">
              Contact Us
            </Nav.Link>
          </Col>
          <Col className="col-12 col-md-2 ">
            <Nav.Link className="nav-link " href="/games">
              Contact Us
            </Nav.Link>
          </Col>
        </Row>
      </Col>
      <Col className="col-12 col-md-3  mt-2">
        <Row className="w-100 p-0">
          <Col>Tüm hakları saklıdır</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default FooterDark;
