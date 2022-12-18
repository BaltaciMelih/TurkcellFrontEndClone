import React from "react";
import "../GamePage-Banner/GameBanner.scss";

const GameBanner = () => {
  return (
    <div className="gamepage-banner d-flex flex-column">
      <span>Lorem ipsum dolor sit amet consectetur</span>
      <span>
        With the Cloud Gaming, you can join, play, and share games online with
        anyone in the world. Play any game on any device!
      </span>
      <input type="text" placeholder="Search Games" />
    </div>
  );
};

export default GameBanner;
