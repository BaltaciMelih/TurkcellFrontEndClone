import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './FilterListItem.scss';

import { removeCheckboxFilter, setCheckboxFilter, setCheckboxList, removeCheckboxList } from '../../reduxStore/filter';

const FilterListItem = () => {
  const { games } = useSelector((state) => state.gameReducer);
  const checkedList = useSelector((state) => state.filters.checked);
  const allGenres = games.map((game) => game.genres);
  const correctGenres = [...new Set(allGenres.flat(1))];
  const filteredGenres = correctGenres.filter((game) => game != null);
  let sortedGenres = filteredGenres.sort();

  const dispatch = useDispatch();

  const handleFilterGenre = (e) => {
    const value = e.target.value;
    console.log(value);

    if (e.target.checked) {
      dispatch(setCheckboxFilter(value));
      dispatch(setCheckboxList(value));
    } else {
      dispatch(removeCheckboxFilter(value));
      dispatch(removeCheckboxList(value));
    }
  };

  return (
    <Fragment>
      <div className=' accordion-bg ' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'>
              <div className='d-flex align-items-center justify-content-between w-100'>
                <p className='genres-text-color h4 '>State</p>
                <img
                  src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/3792185E-A728-4D2F-A89C-0E3D1A67E53F.svg'
                  className='bg-secondary text-black d-inline-block '
                  alt=''
                />
              </div>
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <div className='d-flex flex-column '>
                <div className='d-flex '>
                  <input type='checkbox' />
                  <label htmlFor className='genres-text-color '>
                    Available
                  </label>
                </div>
                <div>
                  <input type='checkbox' className='check_box' />
                  <label htmlFor className='genres-text-color '>
                    Patching
                  </label>
                </div>
                <div>
                  <input type='checkbox' />
                  <label htmlFor className='genres-text-color '>
                    Maintenance
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='true'
              aria-controls='collapseTwo'>
              <div className='d-flex align-items-center justify-content-between  w-100'>
                <span className='genres-text-color h4'>Genre Filters</span>
                <img
                  src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/3792185E-A728-4D2F-A89C-0E3D1A67E53F.svg'
                  className='bg-secondary text-black d-inline-block '
                  alt=''
                />
              </div>
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse show'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              {sortedGenres.map((genre, i) => {
                return (
                  <div className='filter-list' key={i}>
                    <input
                      type='checkbox'
                      name={genre}
                      id={genre}
                      value={genre}
                      onChange={handleFilterGenre}
                      checked={checkedList.find((x) => x == genre)}
                    />
                    <label className='genres-text-color' htmlFor={genre}>
                      {genre}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterListItem;
