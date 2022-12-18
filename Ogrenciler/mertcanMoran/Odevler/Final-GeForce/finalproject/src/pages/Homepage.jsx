import React from "react";
import Header from "../components/Header/Header";
import Modules from "../components/Modules/Modules";
import Footer from "../components/Footer/Footer";
import Games from "../components/Games/Games";
import MaskSlider from "../components/Mask-Slider/MaskSlider";
import LogitechBanner from "../components/Logitech-Banner/LogitechBanner";

const Homepage = () => {
  return (
    <>
      <Header />
      <Modules />
      <Games />
      <MaskSlider />
      <LogitechBanner />
      <Footer />
    </>
  );
};

export default Homepage;
