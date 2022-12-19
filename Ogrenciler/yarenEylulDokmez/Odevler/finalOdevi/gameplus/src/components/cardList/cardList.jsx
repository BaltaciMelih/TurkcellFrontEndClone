import React from 'react'
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComp from './card'

export default function CardList(props) {
  const alphabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","Q","Y","Z"]
  return (
    <div className="">
        <div className="cardBox">
        <div className=" polygon">
          <h1 className=" polygonText">A</h1>
        </div>
        {props.lastData.map((data) => {
          return (
              <div className="gameText">
                {`${data.title[0]}` === "A" ? `${data.title}` : null}
              </div>
          );
        })}
    </div>
    <div className="cardBox">
        <div className=" polygon">
          <h1 className=" polygonText">B</h1>
        </div>
        {props.lastData.map((data) => {
          return (
              <div className="gameText">
                {`${data.title[0]}` === "B" ? `${data.title}` : null}
              </div>
          );
        })}
    </div>
    </div>
  )
}
