import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GamesSearchBarSection from "../components/GamesContent/GamesSearchBarSection/GamesSearchBarSection";
import GamesContent from "../components/GamesContent/GamesContent";
import Footer from "../components/Footer/Footer";

function Games() {
  return (
    <>
      <Navbar navbarGizle="" />
      <GamesSearchBarSection />
      <GamesContent />
      <Footer homeControl="d-flex" registerControl="d-none" />
    </>
  );
}

export default Games;
