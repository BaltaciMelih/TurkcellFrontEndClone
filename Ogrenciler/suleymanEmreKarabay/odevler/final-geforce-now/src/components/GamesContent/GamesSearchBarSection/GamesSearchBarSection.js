import React, { useEffect, useState } from "react";
import "./GamesSearchBarSection.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import axios from "axios";

function GamesSearchBarSection() {
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

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {};

  const formatResult = (item) => {
    return (
      <>
        <a style={{ display: "block", textAlign: "left" }}>{item.title}</a>
      </>
    );
  };

  return (
    <div className="GamesSearchBarSectionDisDiv">
      <div className="GamesSearchBarSectionTitle text-center">
        Lorem ipsum dolor sit amet consectetur
      </div>
      <div className="GamesSearchBarSectionParagraf text-center">
        With the Cloud Gaming, you can join, play, and share games online with
        anyone in the world. Play any game on any device!
      </div>
      <header className="App-header">
        <div className="searchBar">
          <ReactSearchAutocomplete
            styling={{
              borderRadius: 0,
              border: "none",
              searchIconMargin: "0 0 0 17px",
              clearIconMargin: "21px 24px 21px 0",
              hoverBackgroundColor: "#fff",
              iconColor: "#1e1e1e",
              lineColor: "#000000",
              fontSize: "20px",
              fontFamily: "GreycliffCF",
              height: "56px",
              width: "702px",
            }}
            items={games}
            fuseOptions={{ keys: ["title", "description"] }}
            resultStringKeyName="title"
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            maxResults={4}
          />
        </div>
      </header>
    </div>
  );
}

export default GamesSearchBarSection;
