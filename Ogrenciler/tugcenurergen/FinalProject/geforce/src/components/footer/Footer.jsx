import React from "react";
// import "./Footer.css";
import { Nav, Row, Col} from "react-bootstrap";
import FooterDropdown from "./FooterDropdown";
import FooterIcon from "./FooterIcon";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";

function Footer() {
  return (
    <Row className="justify-content-evenly bg-light text-secondary w-100 m-0 p-0">
      <Col className="col-12 col-md-5 text-center mt-2 ">
        <Row className="p-0">
          <Col className="col-12 col-md-4 mt-2 ">
            <Nav.Link className="nav-link " href="/games">
              Games
            </Nav.Link>
            <Nav.Link className="nav-link " href="/games">
              Membership
            </Nav.Link>
            <Nav.Link className="nav-link " href="/games">
              Download
            </Nav.Link>
          </Col>
          <Col className="col-12 col-md-4 mt-2">
            <Nav.Link className="nav-link " href="/games">
              Contact Us
            </Nav.Link>
            <Nav.Link className="nav-link " href="/games">
              Blog
            </Nav.Link>
          </Col>
          <Col className=" col-12 col-md-4 mt-2">
            <Nav.Link className="nav-link " href="/games">
              FAQs
            </Nav.Link>
            <Nav.Link className="nav-link " href="/games">
              Service Status
            </Nav.Link>
          </Col>
        </Row>
      </Col>
      <Col className="col-12 col-lg-5 text-center mt-2">
        <Row>
          <Col className="col-12 col-md-6 mt-2">
            <Nav.Link className="nav-link " href="/games">
              Follow Us!
            </Nav.Link>
            <FooterIcon src={facebook} alt="icon-facebook"/>
            <FooterIcon src={twitter} alt="icon-twitter"/>
            <FooterIcon src={instagram} alt="icon-instagram"/>
            <FooterIcon src={youtube} alt="icon-youtube"/>
          </Col>
          <Col className="col-12 col-md-6 mt-2">
            Site Language
            <FooterDropdown/>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Footer;
