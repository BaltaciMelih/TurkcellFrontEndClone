import React from "react";

const GamesCard = (props) => {
  return (
    <div className="game-card bg-secondary">
      <div className="game-card-title position-relative mb-4">
        <div className="polygon">
          <img src="/assets/polygon.png" alt="" />
          <span className="position-absolute fw-bold fs-3 text-black">
            {props.letter}
          </span>
        </div>
      </div>
      <div className="game-card-content d-flex flex-wrap">
        {props.games.map((game, index) => {
          if (props.letter === game.title[0])
            return (
              <p className="game-titles" key={index}>
                {game.title}
              </p>
            );
        })}
      </div>
    </div>
  );
};

export default GamesCard;
