import React from "react";
import "./GameCharCategory.scss";
import polygon from "../../../assets/icons/polygon.svg";


const GameCharCategory = ({ games, firstLetter}) => {

  let arr = [];
  games.map((item) => {
    arr.push(item.title[0]);
  });
console.log(firstLetter)
//  console.log("firstletter", firstLetter)  GameCategort'den props göndermiştik patladık
  let chars = [...new Set(arr.sort())];


  return (
    <div className="game-char-category ">
      <div className="container">
      

        {chars.sort((b,a) => firstLetter === "Z-A" ? a.localeCompare(b) :  b.localeCompare(a) )
        .map((char, index) => (
          <div className="card-container bg-dark mb-4 p-4" key={index}>
            <div className="polygon mb-4">
              <img className="img-fluid" src={polygon} alt="" />
              <span className=" char text-dark">{char}</span>
            </div>
            <div className="row">
              {games.map((game, index) => {
                if (game.title[0] === char) {
                  return (
                    <a href={game.steamUrl} target="_blank" className="col-6 " key={index}>
                      <p>{game.title}</p>
                      {/* <span className="text-danger border-bottom  ">
                        {game.genres}
                      </span> */}
                    </a>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCharCategory;
