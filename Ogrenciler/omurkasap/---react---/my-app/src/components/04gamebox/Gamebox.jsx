import React from 'react'
import Button from '../Button/Button'
import Game1 from "../../assets/img/gamesicon/game1.png"
import Game2 from "../../assets/img/gamesicon/game2.png"
import Game3 from "../../assets/img/gamesicon/game3.png"
import Game4 from "../../assets/img/gamesicon/game4.png"
import Game5 from "../../assets/img/gamesicon/game5.png"
import Game6 from "../../assets/img/gamesicon/game6.jpg"
import Game7 from "../../assets/img/gamesicon/game7.png"
import Game8 from "../../assets/img/gamesicon/game8.png"
import Game9 from "../../assets/img/gamesicon/game9.png"
import Game10 from "../../assets/img/gamesicon/game10.png"
import Game11 from "../../assets/img/gamesicon/game11.png"
import Game12 from "../../assets/img/gamesicon/game12.png"


function Gamebox() {
  return (
    <div className='conteiner-fluid bg-dark'>
        <div className='d-flex flex-wrap mb-3 justify-content-evenly'>
         
            <div className=""><img className='fluid' src={Game1} alt="" /></div>
            <div className=""><img className='fluid' src={Game2} alt="" /></div>
            <div className=""><img className='fluid' src={Game3} alt="" /></div>
            <div className=""><img className='fluid' src={Game4} alt="" /></div>
            <div className=""><img className='fluid' src={Game5} alt="" /></div>
            <div className=""><img className='fluid' src={Game6} alt="" /></div>
            </div>
        <div className='d-flex d-none d-md-flex justify-content-evenly  mt-2'>
            <div className=""><img className='fluid' src={Game7} alt="" /></div>
            <div className=""><img className='fluid' src={Game8} alt="" /></div>
            <div className=""><img className='fluid' src={Game9} alt="" /></div>
            <div className=""><img className='fluid' src={Game10} alt="" /></div>
            <div className=""><img className='fluid' src={Game11} alt="" /></div>
            <div className=""><img className='fluid' src={Game12} alt="" /></div>
        </div>
        <Button text = "SEE ALL GAMES"/>
    </div>
  )
}

export default Gamebox