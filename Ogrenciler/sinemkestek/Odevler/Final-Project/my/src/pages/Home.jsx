import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Features from "../components/HomeComponent/Features";
import Carousel from "../components/Carousel/Carousel";
import Screen from "../components/HomeComponent/Screen";
import banner5 from "../assets/images/modules-banner-5-logo.png";
import Card from "../components/Cards/Card";
import Games from "../components/HomeComponent/Games";
import Carousel2 from "../components/Carousel2/Carousel2";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <Features></Features>
      <Screen></Screen>
      <Games></Games>
      <Card></Card>
      <Carousel2></Carousel2>

      <div className="">
        <img src={banner5} alt="" className="w-100 " />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
