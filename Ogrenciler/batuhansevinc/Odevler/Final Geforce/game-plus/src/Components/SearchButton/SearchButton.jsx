import React from 'react';
import './SearchButton.scss';
import searchicon from '../../Images/search.png'


function SearchButton() {
  return (
    <div className='container-fluid searchButton'>
        <h1 className='text-center fw-bold text-white m-0 searchButton-title'>Lorem ipsum dolor sit amet consectetur</h1>
        <p className='searchButton-paragraph m-0 text-white text-center'>With the Cloud Gaming, you can join, play, and share games online with anyone in the <br /> world. Play any game on any device!</p>
           <div className='searchButton-button-group d-flex'><div className='searchButton-icon d-flex justify-content-center align-items-center'> <img src={searchicon} alt=""   className='searchButton-icon-img'/></div> <input className='searchButton-button'
        type="text"
        placeholder="Search Games"
      />
      </div>
    </div>
  )
}

export default SearchButton