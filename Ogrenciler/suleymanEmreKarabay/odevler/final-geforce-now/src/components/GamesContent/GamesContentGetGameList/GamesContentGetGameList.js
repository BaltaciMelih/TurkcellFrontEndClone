import React, { useEffect, useState } from "react";
import "./GamesContentGetGameList.scss";
import axios from "axios";
function GamesContentGetGameList(props) {
  const [games, setgames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: games } = await axios.get("http://localhost:3000/data");

        setgames(games);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  games.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return props.alfabet.map((letter, index) => (
    <div key={index} className="gamesDisDiv">
      <div className="gamesLetterDiv">
        <div className="gamesLetter">
          <a href="#">{letter}</a>
        </div>
      </div>
      <div className="letterGames">
        <div className="row align-items-center">
          {games.map((game, i) => {
            if (letter === game.title[0]) {
              return (
                <div key={i} className="letter-games-item col-sm-6 m-0 p-0 ">
                  <a key={game.id} href="">
                    {game.title}
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  ));
}

export default GamesContentGetGameList;
