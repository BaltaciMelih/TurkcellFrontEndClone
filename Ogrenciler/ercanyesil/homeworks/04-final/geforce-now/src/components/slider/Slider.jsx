import React from "react";
import hero from "../../assets/hero-banner.png";
import prev from "../../assets/slider/icon-arrow-left.png";
import next from "../../assets/slider/icon-arrow-right.png";
import "./Slider.scss";
import  Button  from "../button/Button";

const Slider = () => {
  return (
    <div className="carousel">     
      <div
        id="carouselIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">        
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>                              
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img className="d-block w-100" src={hero} alt="First slide" />
          <div className="carousel-content">
            <div className="carousel-title">
              <span>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </span>
            </div>
            <div className="carousel-description">
              <span >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.
              </span>
            </div>            
            <Button className="secondBtn" name={"REGİSTER"}></Button>
          </div>
          </div>
          <div className="carousel-item">
          <img className="d-block w-100" src={hero} alt="Second slide" />
          <div className="carousel-content">
            <div className="carousel-title">
              <span>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </span>
            </div>
            <div className="carousel-description">
              <span >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.
              </span>
            </div>            
            <Button className="secondBtn" name={"REGİSTER"}></Button>
          </div>
          </div>
          <div className="carousel-item">
          <img className="d-block w-100" src={hero} alt="Third slide" />
          <div className="carousel-content">
            <div className="carousel-title">
              <span>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </span>
            </div>
            <div className="carousel-description">
              <span >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.
              </span>
            </div>            
            <Button className="secondBtn" name={"REGİSTER"}></Button>
          </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="prev"
        >
          <span aria-hidden="true"><img src={prev} alt="prev"></img></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="next"
        >
          <span aria-hidden="true"><img src={next} alt="next"></img></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
