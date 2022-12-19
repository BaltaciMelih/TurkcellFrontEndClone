import React from "react";
import StyledButton from "../Button/StyledButton";
import heroBanner from "../../assets/images/hero-banner.png";

const CarouselInner = () => {
  return (
    <div>
      {" "}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={heroBanner} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={heroBanner} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={heroBanner} alt="Third slide" />
        </div>
      </div>
      <div className="carousel-caption">
        <div className="caption-header">
          <h1>GamePlus ile ayrıcalıklı GeForce Now deneyimine Hoşgeldin!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            ducimus quisquam iusto placeat aut?
          </p>
          <StyledButton id="register">Register</StyledButton>
        </div>
      </div>
    </div>
  );
};

export default CarouselInner;
