import React from "react";
import BannerLogo from "../images/hero-banner.png";
import "../styles/home.css";
import "../components/SectionComponent/pricingPlan.css";

import games1 from "../images/games-images/1-world-of-warships-fb-ig-2048-x-2048.png";
import games2 from "../images/games-images/2-world-of-warships-fb-ig-2048-x-2048.png";
import games3 from "../images/games-images/3-world-of-warships-fb-ig-2048-x-2048.png";
import games4 from "../images/games-images/4-world-of-warships-fb-ig-2048-x-2048.png";
import games5 from "../images/games-images/5-world-of-warships-fb-ig-2048-x-2048.png";
import games6 from "../images/games-images/6-world-of-warships-fb-ig-2048-x-2048.png";
import games7 from "../images/games-images/7-world-of-warships-fb-ig-2048-x-2048.png";
import games8 from "../images/games-images/8-world-of-warships-fb-ig-2048-x-2048.png";
import games9 from "../images/games-images/9-world-of-warships-fb-ig-2048-x-2048.png";
import games10 from "../images/games-images/10-world-of-warships-fb-ig-2048-x-2048.png";
import games11 from "../images/games-images/11-world-of-warships-fb-ig-2048-x-2048.png";
import games12 from "../images/games-images/12-world-of-warships-fb-ig-2048-x-2048.png";
import pc from "../images/icons-pc.png";
import mac from "../images/icons-mac.png";
import android from "../images/icons-android.png";
import ArrowRight from "../images/icon-arrow-right.png";
import ArrowLeft from "../images/icon-arrow-left.png";
import groupk from "../images/feature/groupk.png";
import group from "../images/feature/group.png";
import feature from "../images/feature/icon-feature-01.png";
import moduleWeb from "../images/module-banner/module.web.png";
import moduleMobil from "../images/module-banner/module-mobil.png";
import featureIcon from "../images/feature/icon-feature-03.png";

import Buttons from "../components/SectionComponent/Buttons";
import { NavLink } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import PricingPlan from "../components/SectionComponent/PricingPlan";
import bootsrap from "bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CarouselSection from "../components/SectionComponent/CarouselSection";

export const Home = () => {
  return (
    <div>
      <Header />
      <Carousel>
        <Carousel.Item>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <img src={ArrowLeft} alt="" />
            </span>
          </button>
          <div className="bannerLogo col-12 col-md-12">
            <img src={BannerLogo} alt="First slide" />
          </div>

          <Carousel.Caption>
            <div className="Gameplus col-md-7 text-center   ">
              Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
            </div>
            <div className="Lorem col-md-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor augue vel porta ullamcorper.
            </div>
            <div className="mb-5 pb-5">
              {" "}
              <NavLink to="/register">
                <Buttons text="Registers"></Buttons>
              </NavLink>
            </div>
          </Carousel.Caption>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <img src={ArrowRight} alt="" />
            </span>
          </button>
        </Carousel.Item>
        <Carousel.Item>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <img src={ArrowLeft} alt="" />
            </span>
          </button>
          <div className="bannerLogo col-12 col-md-12">
            <img src={BannerLogo} alt="First slide" />
          </div>

          <Carousel.Caption>
            <div className="Gameplus col-md-7 text-center   ">
              Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
            </div>
            <div className="Lorem col-md-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor augue vel porta ullamcorper.
            </div>
            <div className="mb-5 pb-5">
              {" "}
              <NavLink to="/register">
                <Buttons text="Registers"></Buttons>
              </NavLink>
            </div>
          </Carousel.Caption>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <img src={ArrowRight} alt="" />
            </span>
          </button>
        </Carousel.Item>
      </Carousel>

      <div className="col-md-12 col-12 bg-dark">
        <div
          className="container border border-dark bg-dark col-md-8 col-12"
          id="lorem0"
        >
          <div className="col-md-12 bg-dark features">
            <div className="row">
              <div className="text-light col-12 col-md-4">
                <p className="fs-2 text-center  ">Features</p>
                <div className="text-center ">
                  <p className="text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>{" "}
                </div>
              </div>
              <div className="p-3  col-12 col-md-4 ">
                <div className="row">
                  <div className="text-light m-2">
                    <img src={feature} alt="" /> Lorem ipsum dolor sit amet.{" "}
                  </div>
                  <div className="text-light m-2">
                    <img src={featureIcon} alt="" /> Lorem ipsum dolor sit amet.{" "}
                  </div>
                </div>
              </div>
              <div className="p-3 col-12 col-md-4 ">
                <div className="row">
                  <div className="text-light m-2">
                    <img src={group} alt="" /> Lorem ipsum dolor sit amet.{" "}
                  </div>
                  <div className="text-light m-2">
                    <img src={groupk} alt="" /> Lorem ipsum dolor sit amet.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100">
        <div className="row">
          <div className="col col-md-12 col-sm-12 col-12 text-center bg-dark text-light p-4 fs-2 ">
            On all your screens at home and on the go
          </div>
          <div className="bg-dark col-md-4 p-5">
            <div className="box-screen  p-4 d-flex justify-content-start">
              <img src={mac} alt="pc" />
              <p className="text-light text-center m-3">Available on Windows</p>
            </div>
          </div>
          <div className="bg-dark col-md-4 p-5">
            <div className="box-screen  p-4 d-flex justify-content-start ">
              <img src={pc} alt="mac" />
              <div className="text-light  m-3">Available on Mac</div>
            </div>
          </div>
          <div className="bg-dark col-md-4 p-5">
            <div className="box-screen   p-4 d-flex justify-content-start  ">
              <img src={android} alt="android" />{" "}
              <p className="text-light text-center  m-3">
                Available on Android
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-100 col-12 ms-3" id="games-box">
        <div className="row  ">
          <div className="choose fs-2 col-md-12 text-center  p-4">
            Choose the game you want to play
          </div>
          <div className="col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games1} alt="" />
            </a>
          </div>
          <div className="col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games2} alt="" />
            </a>
          </div>
          <div className="col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games3} alt="" />
            </a>
          </div>
          <div className="col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games4} alt="" />
            </a>
          </div>
          <div className="col-md-2  col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games5} alt="" />
            </a>
          </div>
          <div className="col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games6} alt="" />
            </a>
          </div>
          <div className="game-image col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games7} alt="" />
            </a>
          </div>
          <div className="game-image col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games8} alt="" />
            </a>
          </div>
          <div className="game-image col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games9} alt="" />
            </a>
          </div>
          <div className="game-image col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games10} alt="" />
            </a>
          </div>
          <div className="game-image col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games11} alt="" />
            </a>
          </div>
          <div className="game-image col-md-2 col-sm-6 col-6  p-2">
            <a href="#">
              <img src={games12} alt="" />
            </a>
          </div>
          <div className=" col-md-12   d-flex justify-content-center   p-2">
            <Buttons text="SEE ALL GAMES" />
          </div>
        </div>
      </div>
      <PricingPlan />
      <CarouselSection />
      <div className="container">
        <div className="row">
          <div>
            <img className="module fluid w-100" src={moduleWeb} alt="dasdf" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
