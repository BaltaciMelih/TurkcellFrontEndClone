import React from "react";
import polygon from "../images/polygon.png";

import bootsrap from "bootstrap";

import "../styles/gamesCss/gameList.css";

const GameList = ({ characters, allGames, genre }) => {
  const genreFilter = (title, genres) => {
    let convertedString = genres.join(" ");

    let found = genre.every((item) => genres.includes(item));
    return found && title;
  };
  return characters.map((character, i) => (
    <div
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px",
      }}>
      <div className="container col-md-12 col-6 character-bg">
        <div
          className="character "
          style={{
            backgroundImage: { polygon },
            width: "60px",
            height: "50px",
            textAlign: "center",
            fontSize: "30px",
          }}>
          {" "}
          {character}{" "}
        </div>
      </div>
      {allGames
        .sort((a, b) => {
          return a.sortName > b.sortName;
        })
        .map(
          (game) =>
            game.title.charAt(0).toUpperCase() === character && (
              <div className="container col-md-12 col-6 gameTitle">
                <div className="text-white">
                  {" "}
                  {genreFilter(game.title, game.genres)}
                </div>
              </div>
            )
        )}{" "}
    </div>
  ));
};

export default GameList;
