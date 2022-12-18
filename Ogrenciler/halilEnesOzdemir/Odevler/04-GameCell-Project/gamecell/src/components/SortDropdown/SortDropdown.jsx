import React, { useState } from 'react';

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
    <div className=' pe-lg-2  w-100 '>
      <div class='dropdown  w-100'>
        <button
          class='btn btn-secondary dropdown-toggle  w-100'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          {selected}
        </button>
        <ul class='dropdown-menu'>
          <li>
            <a class='dropdown-item' href='#' onClick={handleSort}>
              Title A-Z
            </a>
          </li>
          <li>
            <a class='dropdown-item' href='#' onClick={handleSort}>
              Title Z-A
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortDropdown;
