import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import Category from "../../components/category/Category";
import "./Search.scss";
import Canvas from "../canvas/Canvas";
import SearchBar from "../searchBar/SearchBar";
import Utility from "../utility/Utility";

const Search = () => {
  const [games, setGames] = useState([]);
  const [searchTitle, setSearchTerm] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      const response = await axios.get("http://localhost:3002/data");
      setGames(response.data);
    };

    loadPosts();
  }, []);

  return (
    <>
      <div className="games-page">
        <div className="container-fluid games-banner w-100">
          <div className="text-center text-white pt-5">
            <h1>Lorem ipsum dolor sit amet consectecur</h1>
            <p>
              With the Cloud Gaming, you can join, play, and share games online
              with anyone in the world. Play any game on any device!
            </p>
          </div>

          <div className="search-cont d-flex justify-content-center">
            <SearchBar
              className="search-area"
              placeholder={"Ara"}
              data={games}
            ></SearchBar>
          </div>
        </div>

        <h1 className="browse-games text-white d-flex d-md-none justify-content-center mt-3 mb-3">
          Browse Games
        </h1>

        <div className="games container-fluid d-flex justify-content-center justify-content-md-between my-0 mx-5 p-0 p-md-5 text-white">
          <div className="aside d-none d-md-block">
            <h1 className="browse-games text-white">Browse Games</h1>

            <div className="category-container p-4">
              <Category />
            </div>
          </div>

          <div className="game-card w-100 mx-3 mx-md-4">
            <div className="dropdown sort-dropdown d-flex justify-content-between justify-content-md-end">
              <Canvas className="denede" />
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                className="dropdown-toggle btn btn-secondary btn-az ms-3 "
                data-bs-toggle="dropdown"
              >
                Sırala A-Z
              </button>
              <div
                tabIndex="-1"
                role="menu"
                aria-hidden="true"
                className="dropdown-menu sort-menu text-white"
              >
                <button
                  type="button"
                  value="Sırala A-Z"
                  tabIndex="0"
                  role="menuitem"
                  className="active dropdown-item text-white"
                >
                  Sırala A-Z
                </button>
                <button
                  type="button"
                  value="Sırala Z-A"
                  tabIndex="0"
                  role="menuitem"
                  className="dropdown-item text-white"
                >
                  Sırala Z-A
                </button>
              </div>
            </div>
            {Utility().map((item, index) => (
              <Card item={item} key={index}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
