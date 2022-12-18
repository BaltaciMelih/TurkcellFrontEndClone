import React, { useState } from 'react';
import './SortDropdown.scss';
const SortDropdown = ({ setReversed }) => {
  const [selected, setSelected] = useState('Title A-Z');

  const handleSort = (e) => {
    setSelected(e.target.textContent);
    if (e.target.textContent == 'Title Z-A') {
      setReversed(true);
    } else {
      setReversed(false);
    }
  };

  return (
    <div className=' pe-lg-2   '>
      <div className='dropdown '>
        <button
          className='btn btn-filter dropdown-toggle  w-100'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          {selected}
        </button>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' href='#' onClick={handleSort}>
              Title A-Z
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#' onClick={handleSort}>
              Title Z-A
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortDropdown;
