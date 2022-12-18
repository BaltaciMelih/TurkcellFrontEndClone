import React from 'react';
import Button from '../Button/Button';
import './Games.scss';

function Games({ gameImage, gameImageDesktop }) {
  return (
    <>
      <div className='container-fluid bg-black py-2 '>
        <p className='text-center h3 games-text mb-4'>Choose the game you want to play</p>
        <div className='row mb-3'>
          {gameImage.map((game, index) => {
            return (
              <div key={index} className='col-6 col-sm-4 col-lg-2 mb-3'>
                <img src={game.src} className='img-fluid w-100' alt='...' />
              </div>
            );
          })}
        </div>
        <Button
          children={'SEE ALL GAMES'}
          width='159px'
          height='48px'
          className={`d-block mx-auto d-lg-none  `}></Button>
        <div className='row  '>
          {gameImageDesktop.map((game, index) => {
            return (
              <div key={index} className='col-6  col-sm-4 col-lg-2 mb-3'>
                <img src={game.src} className=' img-fluid  w-100 d-none d-lg-block' alt='...' />
              </div>
            );
          })}
        </div>
        <Button
          children={'SEE ALL GAMES'}
          width='159px'
          height='48px'
          className={`d-block mx-auto d-none d-lg-block`}></Button>
      </div>
    </>
  );
}

export default Games;
