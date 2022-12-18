import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const CarouselHero = () => {
  return (
    <div id="carouselHero" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item position-relative active">
          <img
            src="../assets/hero-banner.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-item-content d-flex flex-column">
            <h1>GamePlus ile ayrıcalıklı GeForce Now deneyimine hoş geldin!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor augue vel porta ullamcorper.
            </p>
            <NavLink to="/register">
              <Button color="primary" width="185" content="REGISTER" />
            </NavLink>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <img
            src="../assets/hero-banner.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-item-content d-flex flex-column">
            <h1>GamePlus ile ayrıcalıklı GeForce Now deneyimine hoş geldin!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor augue vel porta ullamcorper.
            </p>
            <Button color="primary" width="185" content="REGISTER" />
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to="1"
                className="active"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <img
            src="../assets/hero-banner.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-item-content d-flex flex-column">
            <h1>GamePlus ile ayrıcalıklı GeForce Now deneyimine hoş geldin!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor augue vel porta ullamcorper.
            </p>
            <Button color="primary" width="185" content="REGISTER" />
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to="2"
                className="active"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHero"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselHero"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselHero;
