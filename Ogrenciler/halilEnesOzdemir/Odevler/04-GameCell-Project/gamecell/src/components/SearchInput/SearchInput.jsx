import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTextFilter } from '../../reduxStore/filter';

import './SearchInput.scss';

function SearchInput() {
  const inputValue = useSelector((state) => state.filters.title);
  const { games } = useSelector((state) => state.gameReducer);
  const dispatch = useDispatch();

  const searchGame = (e) => {
    const value = e.target.value;
    dispatch(setTextFilter(value));
    console.log(value);
  };
  return (
    <>
      <div className='search'>
        <input
          type='text'
          list='datalistOptions'
          id='exampleDataList'
          className='form-control py-2'
          value={inputValue || ''}
          onChange={searchGame}
          placeholder='Search...'
          style={{ paddingLeft: '40px' }}
          alt=''
        />
        <img
          src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/A66690CB-EE5E-42C1-8E82-87DBAE4A8486.svg'
          className='search-icon'
        />
        {/* *** */}
        <datalist id='datalistOptions'>
          {games &&
            games.map((data) => {
              return <option value={data.title} key={data.id}></option>;
            })}
        </datalist>
      </div>
    </>
  );
}

export default SearchInput;
