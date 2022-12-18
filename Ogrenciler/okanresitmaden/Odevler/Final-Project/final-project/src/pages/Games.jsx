import React, { useState, useEffect } from 'react';
import Card from '../components/ListCard/ListCard';
import SearchImage from '../photos/imggames.png'
import './games.scss'

function GameList() {
  const [games, setGames] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [order, setOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/data`);
      const data = await response.json();
      setGames(data);
    }
    fetchData();
  }, []);

  function handleGenreChange(event) {
    const genre = event.target.value;
    if (event.target.checked) {
      setSelectedGenres([...selectedGenres, genre]);
    } 
    else {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    }
  }

  function handleOrderChange(event) {
    setOrder(event.target.value);
  }

  const filteredGames = games
  .filter(game => game.title.toLowerCase().includes(searchQuery.toLowerCase()))
  .filter(game => selectedGenres.length === 0 || selectedGenres.some(genre => game.genres.includes(genre)));

  

  const sortedGames = filteredGames.sort((a, b) => {
    if (order === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
  const groups = sortedGames.reduce((acc, game) => {
    const letter = game.title[0].toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(game);
    return acc;
  }, {});

  const genres = Array.from(new Set(games.flatMap(game => game.genres))).sort();


  return (
    <div className='gamesgeneralcontainer container-fluid row d-flex justify-content-center'>
      <img src={SearchImage} alt="searchimg" className="img-fluid" />
      <div className='searchpart'>
        <h2 className='mb-4 text-center'>Lorem ipsum dolor sit amet consectetur.</h2>
        <p className='mb-5 text-center'>With the Cloud Gaming, you can join,play,and share games online with anyone in the world. Play any game on any device!</p>
      <input
      className='searchinput'
      type="text"
      placeholder="Search Games"
      value={searchQuery}
      onChange={event => setSearchQuery(event.target.value)}
    />
      </div>
      <div className='d-flex responsive__header justify-content-between'>
      <h2 className='text-white text-center browseheader py-5'>Browse Games</h2>
      <select id="order-select" value={order} onChange={handleOrderChange}>
          <option value="asc">Title A-Z</option>
          <option value="desc">Title Z-A</option>
        </select>
      </div>
      <div className='d-flex browse col-md-5 col-12 mx-5 py-3 flex-column  px-5'>
        {genres.map(genre => {
          if(genre !== null){
            return(
              <div className='text-white' key={genre}>
              <input
                className='browse__input'
                type="checkbox"
                value={genre}
                onChange={handleGenreChange}
             
  />
              {genre}
            </div>
            )
          }
    })}
      </div>
      <div className='col-md-6 col-12 gamescontainer mx-5'>
        <div className='games__box'>
          {Object.entries(groups).map(([letter, group]) => (
            <div key={letter}>
              <div className='space'></div>
              <h2 className='text-start mx-5 text-primary'>{letter}</h2>

              {group.map((game, index) => (
                <Card key={index * 4} name={game.title} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameList;
