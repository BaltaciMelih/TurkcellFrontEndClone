import React from 'react'
import "./gamebox.css"
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
    <div className='Gamebox conteiner-fluid bg-black '>
      <h3 className='text-center choose py-3'>Choose the game you want to play</h3>
        <div className='d-flex flex-wrap  mb-3 justify-content-evenly'>
         
            <div className=""><img className='fluid' src={Game1} alt="" /></div>
            <div className=""><img className='fluid' src={Game2} alt="" /></div>
            <div className=""><img className='fluid' src={Game3} alt="" /></div>
            <div className=""><img className='fluid' src={Game4} alt="" /></div>
            <div className=""><img className='fluid' src={Game5} alt="" /></div>
            <div className="d-sm-flex d-md-none d-lg-flex"><img className='fluid' src={Game6} alt="" /></div>
            </div>
        <div className='d-flex flex-wrap d-none d-lg-flex justify-content-evenly  mt-2'>
            <div className=""><img className='fluid' src={Game7} alt="" /></div>
            <div className=""><img className='fluid' src={Game8} alt="" /></div>
            <div className=""><img className='fluid' src={Game9} alt="" /></div>
            <div className=""><img className='fluid' src={Game10} alt="" /></div>
            <div className=""><img className='fluid' src={Game11} alt="" /></div>
            <div className=""><img className='fluid' src={Game12} alt="" /></div>
        </div>
        <div className='mt-5 d-flex justify-content-center mb-5'>
        <Button text = "SEE ALL GAMES"/>
        </div>

    </div>
  )
}

export default Gamebox