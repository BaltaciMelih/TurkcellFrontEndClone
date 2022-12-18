import React from "react";
import CarouselHero from "../components/CarouselHero";
import Devices from "../components/Devices";
import ChooseGame from "../components/ChooseGame";
import Membership from "../components/Membership";
import CarouselBlog from "../components/CarouselBlog";
import Module from "../components/Module";

const HomePage = () => {
  return (
    <main>
      <CarouselHero />
      <Devices />
      <ChooseGame />
      <Membership />
      <CarouselBlog />
      <Module />
    </main>
  );
};

export default HomePage;
