import React from "react";
import "./../GamesComponent/search.scss";
import searchIcon from "../../assets/icons/search.svg";
// import { getGames } from "../../redux/features/games/GamesSlice/gamesSlice";
// import { useDispatch } from "react-redux";
import { useState } from "react";

const Search = ({ games, query }) => {
  // const [search, setSearch] = useState([]);

  return (
    <div>
      <div className="search-container ">
        <div className="search-content">
          <div className="search-header  text-center">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <span className="text-light">
              With the Cloud Gaming,you can join,play,and share gmaes online
              with anyoone in the world. Play any game on any device!
            </span>
          </div>

          <div className="search-box">
            <div className="search-bar">
              <img src={searchIcon} alt="search-icon" />
              <input
                type="search"
                placeholder="Search Games"
                className="w-100"
                onChange={(e) => {
                  // setSearch(e.target.value);
                }}
              />

              <div className="search-filter-container ">
                {/* {query
                  .filter((val) => {
                    return search.toLowerCase() === ""
                      ? null
                      : val.toLowerCase().includes(search.toLowerCase());
                  })
                  .map((title) => (
                    <p>{title}</p>
                  ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// const dispatch = useDispatch();
// const { games } = useSelector((state) => state.games);

export default Search;
