import React, { useState, useEffect } from "react";
import axios from "axios";
import './browseGames.scss'


function BrowseGames() {

  const [games, setGames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/data")
      .then((res) => setGames(res.data))
      .catch((error) =>
        console.log("Veri Alınamadı.!", error)
      );
  }, [])

  return (
    <div className='bg-dark'>
      <div className='container browseGames'>
        <h3 className='text-white fw-bold browseGames-title'>Browse Games</h3>
        <div className='d-md-flex justify-content-md-between text-white flex-md-wrap'>
          <div className="browseGames-filters bg-danger pl-20">
            <h4 className="browseGames-filters-state">State</h4>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Available
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Patching
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Maintenance
              </label>
            </div>
            <h4 className="browseGames-filters-state">Genre Filters</h4>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Shooters
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Action
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              RPG
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Racing
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              MOBA/MMO
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Simulation
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Strategy
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Sports
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Kids/Family
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Casual
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Demo
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Horror
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Platformer
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Battle Royale
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Adventure
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              Open World
              </label>
            </div>
          </div>
           <div className="container d-flex p-0 d-block d-md-none">
            <div className="col-sm-6 dropdown-filter me-3"><p className="dropdown-filter-text">Filter</p> </div>
            <div className="col-sm-6 dropdown-title"><p className="dropdown-title-text">Title A-Z</p></div>
           </div>
          <div className="browseGames-games bg-info">
            <div className="m-30 plygon-img"><h1 className="ps-3 plygon-text">A</h1></div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="browseGames-paragraph">
                    {`${game.title[0]}` === "A" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="browseGames-games bg-info ms-md-auto ">
            <div className="m-30 plygon-img"><h1 className="ps-3 plygon-text">B</h1></div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="browseGames-paragraph">
                    {`${game.title[0]}` === "B" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="browseGames-games bg-info ms-md-auto">
            <div className="m-30 plygon-img"><h1 className="ps-3 plygon-text">C</h1></div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="browseGames-paragraph">
                    {`${game.title[0]}` === "C" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="browseGames-games bg-info ms-md-auto">
            <div className="m-30 plygon-img"><h1 className="ps-3 plygon-text">D</h1></div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="browseGames-paragraph">
                    {`${game.title[0]}` === "D" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="browseGames-games bg-info ms-md-auto">
            <div className="m-30 plygon-img"><h1 className="ps-3 plygon-text">E</h1></div>
            {games.map((game) => {
              return (
                <div className="d-flex flex-column">
                  <div className="browseGames-paragraph">
                    {`${game.title[0]}` === "E" ? `${game.title}` : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseGames