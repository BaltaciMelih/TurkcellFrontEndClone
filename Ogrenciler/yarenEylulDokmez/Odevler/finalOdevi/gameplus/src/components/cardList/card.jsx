import React from 'react'
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardComp({props}) {
    const alphabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","Q","Y","Z"]
  return (
    <div className="cardBox">
      {alphabet.map((abc) => {
        <div className=" polygon">
          <h1 className=" polygonText">{abc}</h1>
        </div>
        {props.games.map((data) => {
          return (
              <div className="gameText">
                {`${props.games.title[0]}` === "{abc}" ? `${props.games.title}` : null}
              </div>
          );
        })}})}
    </div>
  )
}
