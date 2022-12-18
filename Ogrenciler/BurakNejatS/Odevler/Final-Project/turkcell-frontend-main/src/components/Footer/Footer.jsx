import React from "react";
import { Container, Row, Col } from "reactstrap";
import facebook from "../../images/footer-img/icon-facebook.png";

import instagram from "../../images/footer-img/icon-instagram.png";
import twitter from "../../images/footer-img/icon-twitter.png";
import youtube from "../../images/footer-img/icon-youtube.png";

import "../Footer/footer.css";

export const Footer = () => {
  return (
    <div className="w-100 bg-light">
      <Container>
        <Row className="footer-text">
          <div className="col-md-1 col-12 p-3 me-4 text-center">
            <a href="">
              {" "}
              <div>Games</div>
            </a>
            <a href="">
              <div>Membership</div>
            </a>
            <a href="">
              <div>Download</div>
            </a>
          </div>
          <div className="col-md-1 col-12 p-3 me-4 text-center">
            <a href="">
              <div>Contact Us</div>
            </a>
            <a href="">
              <div>Blog</div>
            </a>
          </div>
          <div className="col-md-5 p-3 col-12 me-4 ">
            <a href="">
              <div className="footer-faqs ">FAQS</div>
            </a>
            <a href="">
              <div className="footer-faqs">Service Status</div>
            </a>
          </div>
          <div className="col-md-2 p-3 ">
            <div className="fw-bold pb-2 fs-6 text-center">Follow Us!</div>
            <div className="d-flex justify-content-center">
              <img className="pe-2" src={facebook} alt="" />
              <img className="pe-2" src={twitter} alt="" />
              <img className="pe-2" src={instagram} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div className="col-md-2 p-3 text-center ">
            <div className="fw-bold pb-2 fs-6 ">Site Language</div>
            <div className="fs-6">English</div>
          </div>
        </Row>
      </Container>
      <div className="w-100 bg-dark">
        <Container className="bg-dark w-100 ">
          <Row className="text-light  footer2-text">
            <Col className="col-md-6 d-flex justify-content-start p-2 ">
              <div className="col-md-2 ">Term of Use</div>
              <div className="col-md-2 ">Privacy Policy</div>
              <div className="col-md-2 ">Cookies</div>
            </Col>
            <Col className=" d-flex justify-content-end p-2">
              <div className="col-md-2 "></div>
              <div className="col-md-3  ">Tüm hakları saklıdır.</div>
              <div className="col-md-1"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
