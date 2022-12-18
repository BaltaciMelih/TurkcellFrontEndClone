import React, { useEffect, useState } from "react";
import "../styles/games.css";

import gamesBanner from "../images/games-banner.png";
import { getAllGames } from "../services/gameServices";
import GameList from "../components/GameList";
import GameFilter from "../components/GameFilter";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Games = () => {
  const [allGames, setAllGames] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    async function getPosts() {
      setAllGames(await getAllGames());
    }
    getPosts();
  }, []);

  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <>
      <Header />
      <div class="image-container col-md-12 ">
        <img src={gamesBanner} alt="Resim" />
        <div class="overlay">
          <div className="row">
            <p className="text-light fs-1">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="text-light fs-6 col-md-7 text-center">
              With the Cloud Gaming, you can join, play, and share games online
              with anyone in the world. Play any game on any device!
            </p>
            <input
              className="col-md-8 p-1"
              type="text"
              placeholder="Search Games"
            />
          </div>
        </div>
      </div>

      <section className="aside-filter"></section>
      <div className="text-light text-center col-md-2 fw-bold fs-5">
        OYUN ARA
      </div>
      <div style={{ display: "flex" }}>
        <div id="leftSide">
          <GameFilter setGenre={setGenre} />
        </div>
        <div id="rightSide">
          <GameList characters={characters} allGames={allGames} genre={genre} />
        </div>
      </div>

      <Footer />
    </>
  );
};

// export default function Gamesfilter() {
//   const listGames = document.querySelector("input");

//   listGames.addEventListener("keyup", function () {
//     let filterValue = { getAllGames };
//     console.log(filterValue);

//     let li = document.getElementById(".card");

//     for (let i = 0; i < li.length; i++) {
//       console.log(li[i].innerHTML);
//       if (li[i].innerHTML.indexOf(filterValue) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   });
//   return <div>

//   </div>;
// }
