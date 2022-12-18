import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/Banner/Banner';
import BottomSlider from '../components/BottomSlider/BottomSlider';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Games from '../components/Games/Games';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Pricing from '../components/Pricing/Pricing';
import Screens from '../components/Screens/Screens';
import datas from '../mock/CardMock';
import gameImage from '../mock/GameMock';
import { gameImageDesktop } from '../mock/GameMock';

import React from 'react';
import pricingMock from '../mock/PricingMock';
import bottomData from '../mock/BottomSliderMock';

function Home() {
  return (
    <>
      <Header />
      <Hero datas={datas} />
      <Games gameImage={gameImage} gameImageDesktop={gameImageDesktop} />
      <Pricing pricingMock={pricingMock} />
      <BottomSlider bottomData={bottomData} />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
