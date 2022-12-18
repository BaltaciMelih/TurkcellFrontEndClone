import React from 'react';
import { useSelector } from 'react-redux';
import polygon from '../../assets/polygon.svg';

import './GamesMain.scss';

function GamesMain({ reversed }) {
  const title = useSelector((state) => state.filters.title);
  const genreFilter = useSelector((state) => state.filters.genre);

  const { games } = useSelector((state) => state.gameReducer);

  const filteredGames = games.filter((game) => {
    const isGenreOK = genreFilter.length === 0 ? true : game.genres.some((genre) => genreFilter.includes(genre));
    const isTitleOK = game.title.toLowerCase().includes(title.toLowerCase());
    return isGenreOK && isTitleOK;
  });

  let firstLetters = [];

  filteredGames.map((game) => {
    firstLetters.push(game.title[0]);
  });
  let chars = [...new Set(firstLetters.sort())];

  return (
    <>
      {/* <SortComponent /> */}
      {(reversed ? chars.reverse() : chars).map((char, index) => (
        <div className='polygon-container polygon-bg'>
          <div key={index} className='polygon mb-4  '>
            <img className='img-fluid ' src={polygon} alt='' />
            <span className='char'>{char}</span>
          </div>
          <div className='row row-cols-1 row-cols-lg-2 mb-2 py-2 px-3'>
            {filteredGames &&
              filteredGames.map((game, index) => {
                if (game.title[0] === char) {
                  return (
                    <div key={index}>
                      <div className='game-color'>{game.title}</div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      ))}
    </>
  );
}

export default GamesMain;
