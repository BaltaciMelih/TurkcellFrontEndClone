import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './GamesHero.scss';

function GamesHero() {
  return (
    <>
      <div className='container-fluid bg-image'>
        <div className='container d-flex flex-column justify-content-center align-items-center h-100 '>
          <div className='row '>
            <div className='col-10 mx-auto text-center mb-2'>
              <h1 className='text-white fs-1 '>Lorem ipsum dolor sit amet consectetur</h1>
              <h3 className='text-white lead '>
                With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any
                game on any device!
                <SearchInput />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamesHero;
