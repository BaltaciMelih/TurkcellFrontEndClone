import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GameBanner from "../components/GamePage-Banner/GameBanner";
import GameFetching from "../components/GameFetching/GameFetching";

const GamesPage = () => {
  return (
    <div>
      <Header />
      <GameBanner />
      <GameFetching />
      <Footer />
    </div>
  );
};

export default GamesPage;
