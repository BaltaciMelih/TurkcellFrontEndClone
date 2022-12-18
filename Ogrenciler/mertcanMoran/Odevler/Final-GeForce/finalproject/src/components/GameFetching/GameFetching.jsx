import React, { useEffect, useState } from "react";
import "../GameFetching/GameFetching.scss";
import axios from "axios";
import arrow from "../assets/icons-arrow-large.svg";

const GameFetching = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/data")
      .then((res) => setGames(res.data))
      .catch((error) =>
        console.log("Error happened while fetching data!", error)
      );
  }, []);

  return (
    <div className="bg-games">
      <h3 className="text-white fw-bold gameBrowse-title">Browse Games</h3>
      <div className="d-flex justify-content-center gap-3 mb-2">
        <div className="text-white d-md-none d-block filter">Filter</div>
        <div className="text-white ms-md-auto ms-4 a-z d-flex justify-content-center">
          Title A-Z <img src={arrow} alt="" />
        </div>
      </div>
      <div className="container gameBrowse">
        <div className="d-md-flex justify-content-md-between text-white flex-md-wrap">
          <div className="gameBrowse-filter d-md-block d-none bg-dark">
            <h4 className="ms-4">State</h4>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Available
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Patching
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Maintenance
              </label>
            </div>
            <h4 className="ms-4">Genre Filters</h4>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Shooters
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Action
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                RPG
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Racing
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                MOBA/MMO
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Simulation
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Strategy
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Sports
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Kids/Family
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Casual
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Demo
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Horror
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Platformer
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Battle Royale
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Adventure
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexCheckDefault"
              >
                Open World
              </label>
            </div>
          </div>

          <div className="gameBrowse-games bg-dark">
            <div className="m-30 checked-img">
              <h1 className="ps-3 checked-text">A</h1>
            </div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="gameBrowse-letter">
                    {`${game.title[0]}` === "A" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="gameBrowse-games bg-dark ms-md-auto ">
            <div className=" checked-img">
              <h1 className="ps-3 checked-text">B</h1>
            </div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="gameBrowse-letter">
                    {`${game.title[0]}` === "B" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="gameBrowse-games bg-dark ms-md-auto">
            <div className="m-30 checked-img">
              <h1 className="ps-3 checked-text">C</h1>
            </div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="gameBrowse-letter">
                    {`${game.title[0]}` === "C" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="gameBrowse-games bg-dark ms-md-auto">
            <div className=" checked-img">
              <h1 className="ps-3 checked-text">D</h1>
            </div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="gameBrowse-letter">
                    {`${game.title[0]}` === "D" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="gameBrowse-games bg-dark ms-md-auto">
            <div className=" checked-img">
              <h1 className="ps-3 checked-text">E</h1>
            </div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="gameBrowse-letter">
                    {`${game.title[0]}` === "E" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameFetching;
