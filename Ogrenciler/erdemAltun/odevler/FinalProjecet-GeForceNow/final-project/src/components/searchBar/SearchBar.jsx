import React, { useState } from "react";
import "./SearchBar.scss";
import { CgSearch, CgClose } from "react-icons/cg";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setTimeout(function () {
      setFilteredData([]);
      setWordEntered("");
    }, 100);
  };

  return (
    <div className="search" onBlur={clearInput}>
      <div className="searchInputs position-relative">
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <CgSearch size={25} id="searchBtn" />
          ) : (
            <CgClose size={25} id="searchBtn" onClick={clearInput} />
          )}
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          className="searchbar-input d-block"
        />
      </div>
      {wordEntered.length > 2 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                href={value.steamUrl}
                target="_blank"
                key={value.title + value.publisher + value.store + value.id}
              >
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
