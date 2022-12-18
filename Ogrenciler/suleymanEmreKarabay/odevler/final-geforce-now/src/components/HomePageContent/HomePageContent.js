import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroModule from "../HomePageContent/HeroModule/Hero";
import FeaturesModule from "../HomePageContent/FeaturesModule/FeaturesModule";
import ScreensModule from "../HomePageContent/ScreensModule/ScreensModule";
import GamesModule from "../HomePageContent/GamesModule/GamesModule";
import OptionsModule from "../HomePageContent/OptionsModule/OptionsModule";
import BlogModule from "../HomePageContent/BlogModule/BlogModule";
import Logo5Module from "../HomePageContent/Logo5Module/Logo5Module";
import Footer from "../Footer/Footer";

function HomePageContent() {
  return (
    <>
      <Navbar navbarGizle="" />
      <HeroModule />
      <FeaturesModule />
      <ScreensModule />
      <GamesModule />
      <OptionsModule />
      <BlogModule />
      <Logo5Module />
      <Footer homeControl="d-flex" registerControl="d-none" />
    </>
  );
}

export default HomePageContent;
