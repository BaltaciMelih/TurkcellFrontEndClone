import React from "react";
import GamesFilter from "../components/GamesFilter";
import GamesCategory from "../components/GamesCategory";
import GamesContent from "../components/GamesContent";

const GamesPage = () => {
  return (
    <main className="games">
      <GamesFilter />
      <div className="games-list">
        <GamesCategory />
        <GamesContent />
      </div>
    </main>
  );
};

export default GamesPage;
