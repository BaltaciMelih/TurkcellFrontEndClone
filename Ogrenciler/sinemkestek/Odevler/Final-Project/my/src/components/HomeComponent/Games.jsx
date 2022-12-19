import React from "react";
import { Link } from "react-router-dom";
import WarShip from "../../assets/images/world-of-warships.png";
import game2 from "../../assets/images/game2.png";
import game3 from "../../assets/images/game3.png";
import game4 from "../../assets/images/game4.png";
import game5 from "../../assets/images/game5.png";
import game6 from "../../assets/images/game6.png";
import game7 from "../../assets/images/game7.png";
import game8 from "../../assets/images/game8.png";
import game9 from "../../assets/images/game9.png";
import game10 from "../../assets/images/game10.png";
import game11 from "../../assets/images/game11.png";
import game12 from "../../assets/images/game12.png";
import StyledButton from "../Button/StyledButton";

const Games = () => {
  const gameList = [
    WarShip,
    game2,
    game3,
    game4,
    game5,
    game6,
    game7,
    game8,
    game9,
    game10,
    game11,
    game12,
  ];

  return (
    <div className="bg-black py-2">
      <div className="container games d-flex flex-column  align-items-center ">
        <h3 className="gamesHeader text-center my-3 my-md-5">
          Choose the game you want to play
        </h3>
        <div className="row">
          {gameList.map((game, index) => {
            return (
              <div
                key={index}
                className="gameBox col-6 col-xl-2 col-lg-3 col-md-4 p-3 "
              >
                <img className="img-fluid rounded-3" src={game} alt="" />
              </div>
            );
          })}
        </div>
        <Link to={"/GamesPage"}>
          <StyledButton>SEE ALL GAMES</StyledButton>
        </Link>
      </div>
    </div>
  );
};

export default Games;
