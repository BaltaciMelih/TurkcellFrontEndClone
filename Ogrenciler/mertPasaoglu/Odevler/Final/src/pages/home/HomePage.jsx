import React from "react";
import CarouselSection from "../../components/carousel/MainCarousel";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import modulesBanner from "../../assets/modules-banner-5-logo.png";
import modulesBannerMobile from "../../assets/modules-banner-mobile.png";
import "./HomePage.scss";
import SecondCarouselSection from "../../components/carousel/SecondCarousel";
import Cards from "../../components/card/Card";
import warship from "../../assets/warship.png";
import population from "../../assets/population-zero.png";
import furi from "../../assets/furi.png";
import killingfloor from "../../assets/killing-floor.png";
import moroheim from "../../assets/moroheim.png";
import bannerlord from "../../assets/bannerlord.png";
import grimdown from "../../assets/grim-down.png";
import movingout from "../../assets/moving-out.png";
import overcooked from "../../assets/overcooked.png";
import gtfo from "../../assets/gtfo.png";
import magicka from "../../assets/magicka.png";
import exile from "../../assets/exile.png";
import Button from "../../components/button/Button";
import { NavLink } from "react-router-dom";
import featureIcon from "../../assets/icons/icon-feature-01.png";
import locationIcon from "../../assets/icons/icon-feature-03.png";
import groupIcon from "../../assets/icons/group.png";
import combined from "../../assets/icons/combined-shape.png";
import mac from "../../assets/icons/icons-mac.png";
import pc from "../../assets/icons/icons-pc.png";
import android from "../../assets/icons/icons-android.png";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CarouselSection />
      <div className="row features">
        <div className="col-3">
          <h2 className="feature-header">Features</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="col-3">
          <div class="feature-content gap-3 mb-5">
            <img src={featureIcon} alt="" height={40} />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="feature-content gap-3">
            <img src={locationIcon} alt="" height={40} />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="col-3">
          <div class="feature-content gap-3 mb-5">
            <img src={groupIcon} alt="" height={40} />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="feature-content gap-3">
            <img src={combined} alt="" height={40} />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="available">
        <div className=" available-header">
          <h2>On all your screens at home and on the go</h2>
        </div>
        <div className="available-columns">
          <div className="col-3 available-card-mac p-4">
            <img src={mac} alt="" />
            <p>Available on Windows</p>
          </div>
          <div className="col-3 available-card-pc">
            <img src={pc} alt="" />
            <p>Available on Mac</p>
          </div>
          <div className="col-3 available-card-android p-4 ">
            <img src={android} alt="" />
            <p>Available on Android</p>
          </div>
        </div>
      </div>

      <div className="container bg-black mw-100">
        <div className="row text-center images-header">
          <h2 className="mb-5 text-primary">
            Choose the game you want to play
          </h2>
        </div>
        <div className="images">
          <div className="  img-1 gap-4  d-flex flex-wrap mb-5">
            <img src={warship} alt="" width="183px" />
            <img src={population} alt="" width="183px" />
            <img src={furi} alt="" width="183px" />
            <img src={killingfloor} alt="" width="183px" />
            <img src={moroheim} alt="" width="183px" />
            <img src={bannerlord} alt="" width="183px" />
          </div>
          <div className=" img-2 gap-4 d-flex flex-wrap">
            <img src={movingout} alt="" width="183px" />
            <img src={overcooked} alt="" width="183px" />
            <img src={gtfo} alt="" width="183px" />
            <img src={grimdown} alt="" width="183px" />
            <img src={magicka} alt="" width="183px" />
            <img src={exile} alt="" width="183px" />
          </div>
        </div>
        <div className="text-center mt-5">
          <NavLink to="./games">
            <Button type="primary" text="SEE ALL GAMES" />
          </NavLink>
        </div>
      </div>
      <div className="container text-white bg-black mw-100 p-5">
        <div className="row text-center">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <div className="row price-cards">
          <Cards header="BASIC" price="Free" />
          <Cards header="STANDARD" price="15$/month" />
          <Cards header="PREMIUM" price="30$/month" />
        </div>
      </div>
      <SecondCarouselSection />
      <picture>
        <source media="(min-width: 900px)" srcset={modulesBanner} alt="" />
        <source
          media="(max-width: 900px)"
          srcset={modulesBannerMobile}
          alt=""
        />
        <img className="container-fluid p-0" src="" alt="" />
      </picture>
      <Footer />
    </div>
  );
};

export default HomePage;
