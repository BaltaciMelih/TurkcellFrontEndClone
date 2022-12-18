import React from 'react';
import './screen.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function screenCard({img, text , alt}) {
  return (
    <div className="screenCard">
        <img src={img} alt={alt}/>
        <p className="screenP">{text}</p>
    </div>
  )
}
