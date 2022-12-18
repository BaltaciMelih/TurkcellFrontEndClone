import React from 'react'
import Button from '../../components/button'
import foto from '../../pics/readMore.png';
import './read.css';
export default function readMore() {
  return (
    <div className="readCard">
        <div className="img">
            <img src={foto} alt="konsol" height="387px" width="387px"/>
        </div>
        <div className="info">
            <p className="date">Gamıng, August 11,2020</p>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Phasellus cruvus orci et!</h3>
            <p className="story">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button margin="15px 568px 0 0" color="#76b900" bcolor="#292929" border=" solid 1px #76b900" text="READ MORE"/>
        </div>
    </div>
  )
}
