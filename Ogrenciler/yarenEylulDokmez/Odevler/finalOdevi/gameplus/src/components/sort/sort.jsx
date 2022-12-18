import React from 'react'
import './sort.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function sort() {
  return (
    <div className="col-md-1">
    <li className="dropdown sort">
        <a className=" dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Title A-Z</a>
        <ul className="dropdown-menu">
            <li><a href="#"className="dropdown-item">Title A-Z</a></li>
            <li><a href="#" className="dropdown-item">Title Z-A</a></li>
        </ul>
    </li>
    </div>
  )
}
