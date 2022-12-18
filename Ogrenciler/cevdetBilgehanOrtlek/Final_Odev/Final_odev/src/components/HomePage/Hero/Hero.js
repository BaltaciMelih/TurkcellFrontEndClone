import React from "react";
import "./Hero.scss";
import { BsFillCircleFill } from "react-icons/bs";

import ButonAnasayfa from "../../Buttons/ButonAnasayfa";

function Hero() {
  return (
    <div className="heroDisDiv">
      <a
        className="leftArrow d-none d-lg-block"
        data-bs-target="#carouselHero"
        data-bs-slide="prev"
      >
        <img
          alt="hero"
          className=""
          src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5AF00BE2-757C-4803-AE77-91EB8D57927B.svg"
        ></img>
        <span className="visually-hidden">Previous</span>
      </a>
      <div
        id="carouselHero"
        className="carousel slide herocontent"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active items">
            <div className="heroTitle">
              Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
            </div>
            <div className="heroParagaraf">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor augue vel porta ullamcorper.
            </div>
            <ButonAnasayfa
            Title="REGISTER"
            Type="greenButton"
            Witdh="width-185"
            />
          </div>
          <div className="carousel-item items">
            <div className="heroTitle">
              Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
            </div>
            <div className="heroParagaraf">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor augue vel porta ullamcorper.
            </div>
            <ButonAnasayfa
              Title="REGISTER"
              Type="greenButton"
              Witdh="width-185"
            />
          </div>
          <div className="carousel-item items">
            <div className="heroTitle">
              Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
            </div>
            <div className="heroParagaraf">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor augue vel porta ullamcorper.
            </div>
            <ButonAnasayfa
              Title="REGISTER"
              Type="greenButton"
              Witdh="width-185"
            />
          </div>
        </div>
        <div className="d-lg-none hero-circle">
          <a
            data-bs-target="#carouselHero"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <BsFillCircleFill />
          </a>
          <a
            data-bs-target="#carouselHero"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <BsFillCircleFill />
          </a>
          <a
            data-bs-target="#carouselHero"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <BsFillCircleFill />
          </a>
        </div>
      </div>
      <a
        className="rightArrow d-none d-lg-block"
        data-bs-target="#carouselHero"
        data-bs-slide="next"
      >
        <img
          alt="rightArrow"
          className=""
          src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7BF74048-3476-465B-BBD9-9FA664EE2D8F.svg"
        ></img>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Hero;
