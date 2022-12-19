import React from 'react'
import game1 from '../../assets/images/games/game-1.png';
import game2 from '../../assets/images/games/game-2.png';
import game3 from '../../assets/images/games/game-3.png';
import game4 from '../../assets/images/games/game-4.png';
import game5 from '../../assets/images/games/game-5.png';
import game6 from '../../assets/images/games/game-6.png';
import game7 from '../../assets/images/games/game-7.png';
import game8 from '../../assets/images/games/game-8.png';
import game9 from '../../assets/images/games/game-9.png';
import game10 from '../../assets/images/games/game-10.png';
import game11 from '../../assets/images/games/game-11.png';
import game12 from '../../assets/images/games/game-12.png';
import Button from '../Button/Button';
import './Game.scss';

const Game = () => {

  const games = [game1,game2, game3, game4, game5, game6, game7, game8, game9,game10, game11, game12]
  return (
    <div className='bg-black py-2'>
      <div className='container games '>
        <h2 className='text-success text-center my-3 my-md-5'>Choose the game you want to play</h2>
        <div className="row">
          {games.map((game, index) => {
            return <div key={index} className="col-6 col-xl-2 col-lg-3 col-md-4 p-3 text-center">
              <img className='img-fluid rounded-3' src={game} alt="" />
            </div>
          })}
          <div className='text-center my-3 my-md-5'>
          <Button text='SEE ALL GAMES'/>
          </div>
        </div>
       
     </div>
    </div>
  )
}

export default Game