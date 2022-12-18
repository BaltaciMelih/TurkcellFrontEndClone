import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './GamesHero.scss';

function GamesHero() {
  return (
    <>
      <div className='container-fluid bg-image py-1 py-sm-0'>
        <div className='container d-flex flex-column py-5 py-sm-0 justify-content-sm-center align-items-center h-100'>
          <div className='row '>
            <div className='col d-flex flex-column gap-2 mx-auto text-center mb-2'>
              <h1 className='text-white fs-3 '>Lorem ipsum dolor sit amet consectetur</h1>
              <h3 className='text-white lead   '>
                With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any
                game on any device!
              </h3>
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamesHero;
