import React from "react";
import { Link } from "react-router-dom";
import heroBanner from "../../assets/images/hero-banner.png";
import StyledButton from "../Button/StyledButton";
import "../Carousel/carousel.scss";

const Carousel = () => {
  return (
    <div id="carouselControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner carousel-inner1">
        <div className="carousel-item active">
          <img className="d-block w-100" src={heroBanner} alt="First slide" />
          <div className="carousel-caption" id="Caption1">
            <div className="caption-header caption-header1">
              <h1>
                GamePlus ile ayrıcalıklı GeForce <br /> Now deneyimine
                Hoşgeldin!
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita <br />
                ducimus quisquam iusto placeat aut?
              </p>
              <Link to={"/Register"}>
                <StyledButton bg="#76b900" href="re">
                  REGİSTER
                </StyledButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel1">
          <img className="d-block w-100" src={heroBanner} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={heroBanner} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>

      <a
        className="carousel-control-next"
        href="#carouselControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};

export default Carousel;
