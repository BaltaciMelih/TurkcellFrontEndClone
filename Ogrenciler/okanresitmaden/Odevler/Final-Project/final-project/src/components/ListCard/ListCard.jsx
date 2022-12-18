import React from 'react';
import './listcard.scss'

function Card(props) {
  return (
    <div className="card">
      <ul>
      <li className="card-title text-start">{props.name}</li>
      </ul>
    </div>
  );
}

export default Card;