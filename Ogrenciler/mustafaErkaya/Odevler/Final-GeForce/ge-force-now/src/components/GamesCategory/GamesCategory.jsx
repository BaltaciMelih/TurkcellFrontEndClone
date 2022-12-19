import React, { useEffect, useState } from "react";
import GameCharCategory from "./GameCharCategory/GameCharCategory";
import GameFilterCategory from "./GameFilterCategory/GameFilterCategory";
import "./GamesCategory.scss";
import Filter from '../../assets/images/filter.png';
import Button from '../Button/Button';
import * as _ from 'lodash';

const GamesCategory = () => {
  const [games, setGames] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [firtsLetters, setFirstLetters] = useState([]);
  const [uniqueChars, setUniqueChars] = useState([])
  
  useEffect(() => {
    console.log("filter:", filter);
    filter.length > 0
      ? setFilteredGames(
          [...games].filter((dt) =>
            filter.some((value) => {
              return dt.genres.includes(value);
            })
          )
        )
      : setFilteredGames([...games]);
  }, [filter]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setFilteredGames(data);
        data.map((dt) => {
          return setCategory((prev) => [...prev, ...dt.genres]);
        });
        data.map((dt) => {
          return setFirstLetters((prev) => [...prev, ...dt.title[0]])
        })
        const arr = []
        data.map((dt) => {
           arr.push(dt.title[0])
        })
        setUniqueChars( [...new Set(arr.sort())])
        
      });
  }, []);

  
  console.log("as", uniqueChars)
 

  let _uniqueChars = [...new Set(firtsLetters.sort())] 
  
  let uniqueCate = [...new Set(category)]; //tekrar eden kategorileri temizledik..

  function sortChange(e) {
    console.log(e.target.value);
    if(e.target.value === "A-Z"){
    //  _uniqueChars = [...(_.uniq(firtsLetters))].sort()
     setUniqueChars(e.target.value)
    }else{
      //  _uniqueChars = [...(_.uniq(firtsLetters))].sort().reverse()
       setUniqueChars(e.target.value)
      }
   
  }
  return (
    <div className="games-category bg-black">
      <div className="container ">
        <div className="row px-3">
          <h3 className="col-12 col-md-7 text-center text-md-start  text-white py-4">
            Browse Games
          </h3>
          <div className="col-6 py-4 px-0 pe-2 filter d-block d-md-none">
            <button
              className="btn btn-dark filter-btn w-100"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Filter
              <img src={Filter} alt="" />
            </button>

            <div
              className="offcanvas offcanvas-end w-100"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="filter-header ">
                <h5 className="offcanvas-title text-center col-12 text-warning" id="offcanvasRightLabel">
                  Filter
                </h5>
                <button
                  type="button"
                  className="btn-close x-btn "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body  p-4 bg-dark text-dark">
                    <GameFilterCategory
                    setFilter={setFilter}
                     unique={uniqueCate}
                     filter={filter}
                   />

                <button
                  type="button"
                  className="btn btn-success btn-component special-btn  "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >APPLY</button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-2 p-0 ps-2 ms-auto py-4 d-flex justify-content-end">
            <select className="select p-2 px-4 bg-dark w-100" onChange={sortChange}>
              <option value="A-Z" className="option">
                Title A-Z
              </option>
              <option value="Z-A" className="option">
                Title Z-A
              </option>
            </select>
          </div>
        </div>
        <div className="row px-3">
          <div className="col-4 d-none d-md-block   ">
            <GameFilterCategory
              setFilter={setFilter}
              unique={uniqueCate}
              filter={filter}
            />
          </div>

          <div className="col ms-md-3 p-0  ">
            <GameCharCategory 
            games={filteredGames} 
            firstLetter={uniqueChars}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesCategory;
