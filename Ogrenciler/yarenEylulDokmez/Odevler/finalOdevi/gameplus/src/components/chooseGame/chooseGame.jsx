import React from 'react';
import './chooseGame.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameCard from './gameCard';
import Button from '../button';
import game1 from '../../pics/game1.png';
import game2 from '../../pics/game2.png';
import game3 from '../../pics/game3.png';
import game4 from '../../pics/game4.png';
import game5 from '../../pics/game5.png';
import game6 from '../../pics/game6.png';
import game7 from '../../pics/game7.png';
import game8 from '../../pics/game8.png';
import game9 from '../../pics/game9.png';
import game10 from '../../pics/game10.png';
import game11 from '../../pics/game11.png';
import game12 from '../../pics/game12.png';

export default function chooseGame() {
  return (
    <div className="chooseGame">
        <h2 className="gamesH2">Choose the game you want to play</h2>
        <div className="games">
            <GameCard img={game1} alt="game1"/>
            <GameCard img={game2} alt="game2"/>
            <GameCard img={game3} alt="game3"/>
            <GameCard img={game4} alt="game4"/>
            <GameCard img={game5} alt="game5"/>
            <GameCard img={game6} alt="game6"/>
            <GameCard className="gone" img={game7} alt="game7"/>
            <GameCard className="gone" img={game8} alt="game8"/>
            <GameCard className="gone" img={game9} alt="game9"/>
            <GameCard className="gone" img={game10} alt="game10"/>
            <GameCard className="gone" img={game11} alt="game11"/>
            <GameCard className="gone" img={game12} alt="game12"/>
        </div>
        <Button text="SEE ALL GAMES" margin="30px 526px 0 508px" heightK="48px" widthK="159px" marginK="18px 12.5px 0.4px 0"/>
    </div>
  )
}
