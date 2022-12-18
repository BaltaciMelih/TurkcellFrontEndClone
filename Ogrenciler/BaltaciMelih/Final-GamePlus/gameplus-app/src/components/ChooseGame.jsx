import React from "react";
import Button from "./Button";

const ChooseGame = () => {
  return (
    <div className="choose-game-banner d-flex flex-column align-items-center m-auto">
      <div className="choose-game-content d-flex flex-column align-items-center mb-5">
        <h2 className="mb-4 mx-2">Choose the game you want to play</h2>
        <div className="choose-game-img d-flex flex-wrap mb-4">
          <img src="../assets/choose-game-1.png" alt="" />
          <img src="../assets/choose-game-2.png" alt="" />
          <img src="../assets/choose-game-3.png" alt="" />
          <img src="../assets/choose-game-4.png" alt="" />
          <img src="../assets/choose-game-5.png" alt="" />
          <img src="../assets/choose-game-6.png" alt="" />
          <img src="../assets/choose-game-7.png" alt="" />
          <img src="../assets/choose-game-8.png" alt="" />
          <img src="../assets/choose-game-9.png" alt="" />
          <img src="../assets/choose-game-10.png" alt="" />
          <img src="../assets/choose-game-11.png" alt="" />
          <img src="../assets/choose-game-12.png" alt="" />
        </div>
        <Button color="primary" width="185" content="SEE ALL GAMES" />
      </div>
    </div>
  );
};

export default ChooseGame;
