import React, { useState } from "react";
import "./GamesContent.scss";
import GamesContentGetGameList from "./GamesContentGetGameList/GamesContentGetGameList";
import GamesFilterWeb from "./GamesFilterWeb/GamesFilterWeb";
import { VscSettings } from "react-icons/vsc";

function GamesContent() {
  const alfabe = [
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
    "Y",
    "Z",
    "W",
    "X",
  ];
  const [sortState, setSortState] = useState("none");
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a > b ? 1 : -1) },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  return (
    <>
      <div className="game-list-section-dis-div">
        <div className="game-list-section-top">
          <div className="game-list-section-top-title">Browse Games</div>
          <div className="game-list-section-top-sort">
            <div className="d-lg-none">
              <a data-bs-toggle="modal" data-bs-target="#mobil-filter-id">
                <div className="mobil-filter">
                  <div className="mobil-filter-title">Filter</div>
                  <div className="mobil-filter-icon">
                    <VscSettings />
                  </div>
                </div>
              </a>
            </div>
            <select id="sorting" onChange={(e) => setSortState(e.target.value)}>
              <option value="ascending">Title A-Z</option>
              <option value="descending">Title Z-A</option>
            </select>
          </div>
        </div>
        <div className="game-list-section-bottom">
          <div className="d-none d-lg-block game-list-section-left">
            <GamesFilterWeb
              id="web-state"
              selectID="web-state-select"
              title="State"
              items={["Available", "Patching", "Maintenance"]}
            />
            <GamesFilterWeb
              id="web-genre"
              selectID="web-genre-select"
              title="Genre Filters"
              items={[
                "Shooters",
                "Action",
                "RPG",
                "Racing",
                "MOBA/MMO",
                "Simulation",
                "Strategy",
                "Sports",
                "Kids/Family",
                "Casual",
                "Demo",
                "Horror",
                "Platformer",
                "Battle Royale",
                "Adventure",
                "Open World",
              ]}
            />
          </div>
          <div className="game-list-section-right">
            <GamesContentGetGameList
              alfabet={alfabe.sort(sortMethods[sortState].method)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GamesContent;
