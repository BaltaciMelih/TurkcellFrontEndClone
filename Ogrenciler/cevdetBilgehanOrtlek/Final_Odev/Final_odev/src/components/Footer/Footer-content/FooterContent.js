import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import "./Footer-content.scss";

function FooterContent(props) {
  return (
    <Container fluid className="footer-content">
      <Container className="">
        <Row className="justify-content-between">
          <Col lg={5} className="footer-content-left me-lg-0">
            <Row className={`text-center text-lg-start ${props.homeControl}`}>
              <Col lg={3} className="footer-content-left-first me-5">
                <ul className="ul">
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      Games
                    </a>
                  </li>
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      MemberShips
                    </a>
                  </li>
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      Download
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} className="footer-content-left-second me-5">
                <ul className="ul">
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} className="footer-content-left-thirty">
                <ul className="ul">
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      FAQs
                    </a>
                  </li>
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      Service Status
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row
              className={`text-center text-lg-start ${props.registerControl}`}
            >
              <Col lg={3} className="footer-content-left-first me-5">
                <ul className="ul">
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      Games
                    </a>
                  </li>
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      Blog
                    </a>
                  </li>
                  <li className="mb-1 mb-lg-0">
                    <a href="#" className="footer-content-left-font">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="footer-content-right">
            <Row className="justify-content-around">
              <Col lg={5} className="me-lg-0 text-center text-lg-start">
                <Row className="social-media-title">
                  <strong>Follow Us!</strong>
                </Row>
                <Row className="social-media-row">
                  <Col xs={1} className="social-media-icon">
                    <a href="https://www.facebook.com/GeForce-NOW-powered-by-GAME-102694971733001/">
                      <FaFacebookF />
                    </a>
                  </Col>
                  <Col xs={1} className="social-media-icon">
                    <a href="https://twitter.com/GFNbyGAMEPLUS">
                      <FaTwitter />
                    </a>
                  </Col>
                  <Col xs={1} className="social-media-icon">
                    <a href="https://www.instagram.com/gfnbygameplus/">
                      <FaInstagram />
                    </a>
                  </Col>
                  <Col xs={1} className="social-media-icon">
                    <a href="https://www.youtube.com/channel/UCg_Ahh7orrjFKcQ2hUBI8Eg">
                      <TfiYoutube />
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="language text-center">
                <Row className="text-center language-title text-lg-start">
                  <strong>Site Language</strong>
                </Row>
                <Row className="justify-content-start">
                  <Col sm={4}>
                    <select className="border-0">
                      <option>English</option>
                      <option>German</option>
                    </select>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FooterContent;
