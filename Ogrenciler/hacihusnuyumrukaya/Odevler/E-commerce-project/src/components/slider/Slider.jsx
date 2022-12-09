import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Slider= () => {
  return <div >
      <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://t.lnwfile.com/_/t/_raw/de/9v/d3.jpg"
          alt="First slide" height="400px"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://t.lnwfile.com/_/t/_raw/j5/uq/w7.jpg"
          alt="Second slide" height="400px"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t.lnwfile.com/_/t/_raw/lf/rg/tq.jpg"
          alt="Third slide" height="400px"
        />
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>;
};

export default Slider;