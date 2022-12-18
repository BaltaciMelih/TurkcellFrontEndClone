import React, { useState } from "react";
import herobanner from "../../assets/hero-banner.png";
import herobannersm from "../../assets/hero-banner-sm.png";
import { Carousel, Row, Col } from "react-bootstrap";
import GreenButton from "../../components/greenButton/GreenButton";

import "./Slider.css";
function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="d-block w-100 carousel-item ">
        <div className="p-0 carousel-container d-flex flex-column  w-100 ">
          <Row>
            <Col className="position-relative p-0 m-0 w-100 d-block ">
              <div className="carousel-img-div w-100">
                <img
                  className="w-100 img-fluid carousel-img"
                  src={herobanner}
                  alt="Third slide"
                />
                <img
                  className=" w-100 img-fluid carousel-img-sm "
                  src={herobannersm}
                  alt="Third slide"
                />
              </div>
            </Col>
          </Row>
          <Row className="m-auto h-75 mb-3 p-3 carousel-text position-absolute">
            <Col className="h-75 d-flex flex-column gap-3 ">
              <h1 className=" slide-header">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                et.
              </p>
              <GreenButton variant="dark" href="/register" value="REGISTER" />
            </Col>
          </Row>
          <Row className="m-auto h-75 w-100 mb-3 p-3 carousel-text-sm">
            <Col className="h-75 d-flex flex-column gap-3 ">
              <h1 className=" slide-header">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                et.
              </p>
              <GreenButton variant="dark" href="/login" value="REGISTER" />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item className=" h-100 carousel-item ">
        <Container className="carousel-container d-flex flex-column">
          <Row className="w-75 m-auto mb-3 p-3 text-center carousel-text justify-content-center">
            <Col>
              <h1 className=" slide-header">Lorem, ipsum dolor sit amet!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                et.
              </p>
              <GreenButton variant="dark" href="/login" value="GİRİŞ YAP" />

            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel-img-div">
                <img
                  className="d-block  img-fluid m-auto carousel-img"
                  src={carousel2}
                  alt="Third slide"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Carousel.Item> */}
      {/* <Carousel.Item className=" h-100 carousel-item ">
        <Container className="carousel-container d-flex flex-column">
          <Row className="w-75 m-auto mb-3 p-3 text-center carousel-text justify-content-center">
            <Col>
              <h1 className=" slide-header">Lorem, ipsum dolor sit amet!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                et.
              </p>
              <GreenButton variant="dark" href="/login" value="GİRİŞ YAP" />

            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel-img-div ">
                <img
                  className="d-block w-100  m-auto carousel-img"
                  src={carousel3}
                  alt="Third slide"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Slider;
