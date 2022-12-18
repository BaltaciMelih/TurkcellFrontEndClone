import React from "react";
import Hero from "../assets/hero-banner.png";
import "./Modules.scss";
import leftarrow from "../assets/icon-arrow-left(1).svg";
import rightarrow from "../assets/icon-arrow-right.svg";
import feature1 from "../assets/icon-feature-01.png";
import feature3 from "../assets/icon-feature-03.png";
import group from "../assets/group.png";
import group1 from "../assets/group1.png";
import iconmac from "../assets/icons-mac.png";
import iconpc from "../assets/icons-pc.png";
import iconandroid from "../assets/icons-android.png";

const Modules = () => {
  return (
    <div className="bg-modules">
      <div
        id="carouselDark"
        className="carousel carousel-success slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide-to="0"
            className="active  d-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide-to="1"
            className=" d-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide-to="2"
            className=" d-none"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner position-static">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={Hero}
              className="d-block w-100 hero-banner relative"
              alt="hero-banner"
            />
            <div className="carousel-caption d-none d-md-block absolute text-start">
              <h5 className="privelege">
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </h5>
              <p className="text-white lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempor augue vel porta ullamcorper.
              </p>
              <button type="submit" className="btn w-25 register">
                <a href="/register">REGISTER</a>
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={Hero}
              className="d-block w-100 hero-banner relative"
              alt="hero-banner"
            />
            <div className="carousel-caption d-none d-md-block absolute text-start">
              <h5 className="privelege">
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </h5>
              <p className="text-white lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempor augue vel porta ullamcorper.
              </p>
              <button type="submit" className="btn w-25 register">
                <a href="/register">REGISTER</a>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Hero}
              className="d-block w-100 hero-banner relative"
              alt="hero-banner"
            />
            <div className="carousel-caption d-none d-md-block absolute text-start">
              <h5 className="privelege">
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </h5>
              <p className="text-white lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempor augue vel porta ullamcorper.
              </p>
              <button type="submit" className="btn w-25 register">
                <a href="/register">REGISTER</a>
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDark"
          data-bs-slide="prev"
        >
          <span aria-hidden="true">
            <img
              src={leftarrow}
              alt="leftarrow"
              className="d-md-block d-none me-4"
            />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselDark"
          data-bs-slide="next"
        >
          <span aria-hidden="true">
            <img
              src={rightarrow}
              alt="rightarrow"
              className="d-md-block d-none ms-4"
            />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-md-none bg-black py-5 px-3">
        <h5 className="privelege">
          Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
        </h5>
        <p className="text-white lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tempor augue vel porta ullamcorper.
        </p>
        <button type="submit" className="btn w-50 register">
          <a href="/register">REGISTER</a>
        </button>
      </div>
      <div className="features d-md-flex flex-md-row flex-column">
        <div className="d-md-block">
          <p className="text-white">Features</p>
          <p className="text-white Lorem-ipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="feature-img-div row">
          <div className="col-md-6 col-12 d-flex gap-1">
            <img src={feature1} alt="feature1" />
            <p className="text-white d-flex align-items-center ">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="col-md-6 col-12 d-flex gap-1">
            <img src={feature3} alt="feature3" />
            <p className="text-white d-flex align-items-center ">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="col-md-6 col-12 d-flex gap-1">
            <img src={group} alt="group" />
            <p className="text-white d-flex align-items-center ">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="col-md-6 col-12 d-flex gap-1">
            <img src={group1} alt="group1" />
            <p className="text-white d-flex align-items-center ">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
      <div className="screen">
        <p className="all-screens">On all your screens at home and on the go</p>
        <div className="d-flex gap-3 flex-md-row flex-column justify-content-center align-items-center">
          <div className="d-flex icon-mac">
            <img src={iconmac} alt="macicon" />
            <p className="text-white">Available on Windows</p>
          </div>
          <div className="d-flex icon-pc">
            <img src={iconpc} alt="pcicon" />
            <p className="text-white">Available on Mac</p>
          </div>
          <div className="d-flex icon-android">
            <img src={iconandroid} alt="androidicon" />
            <p className="text-white">Available on Android</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
