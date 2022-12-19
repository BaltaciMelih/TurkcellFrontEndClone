import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Search from "../components/GamesComponent/Search";
import CategoryFilter from "../components/GamesComponent/CategoryFilter";
import GamesList from "../components/GamesComponent/GamesList";
import "../App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../redux/features/games/GamesSlice/gamesSlice";
// import Sort from "../components/GamesComponent/Sort";
import MobileMenü from "../components/GamesComponent/MobileMenü";
import Desktop from "../components/GamesComponent/Desktop";

const Games = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.games);
  const [gamesLetters, setGamesLetters] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState([]);
  useEffect(() => {
    dispatch(getGames());
    let gamesLetters = [];
    let cate = [];
    games.map((item) => {
      cate.push(item.genres);
      if (!gamesLetters.includes(item.title.substring(0, 1).toUpperCase())) {
        return gamesLetters.push(item.title.substring(0, 1).toUpperCase());
      }
    });

    games.map((dt) => {
      setQuery((prev) => [...prev, dt.title]);
    });

    let a = cate.flatMap((num) => num);
    let b = [...new Set(a)];
    setCategories(b);
    setGamesLetters(gamesLetters);
    console.log("refresh");
  }, []);

  console.log(query);

  return (
    <div>
      <Header></Header>
      <Search games={games} query={query}></Search>
      <div className="bg-black pt-5">
        <div className="container pt-5">
          <div className="row ">
            <Desktop></Desktop>

            <div className="col-12 mx-2 ">
              <MobileMenü></MobileMenü>
            </div>
            <div className="row mt-4 ">
              <div className="col-4 pb-2">
                <CategoryFilter categories={categories}></CategoryFilter>
              </div>
              <div className="col-lg-8  pt-5 ">
                {gamesLetters.sort().map((letter) => {
                  return <GamesList games={games} letter={letter} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Games;
