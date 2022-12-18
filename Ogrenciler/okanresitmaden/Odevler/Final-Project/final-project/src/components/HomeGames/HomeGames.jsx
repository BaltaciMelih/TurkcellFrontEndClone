import React from 'react'
import game1 from '../../photos/games/1.png'
import game2 from '../../photos/games/2.png'
import game3 from '../../photos/games/3.png'
import game4 from '../../photos/games/4.png'
import game5 from '../../photos/games/5.png'
import game6 from '../../photos/games/6.png'
import game7 from '../../photos/games/7.png'
import game8 from '../../photos/games/8.png'
import game9 from '../../photos/games/9.png'
import game10 from '../../photos/games/10.png'
import game11 from '../../photos/games/11.png'
import game12 from '../../photos/games/12.png'
import './homegames.scss'
import '../Buttons/buttons.scss'


const HomeGames = () => {
  return (
    <div className='homegames'>
        <div className='container'>
            <div className='row'>
            <h2 className='text-center text-primary py-4'>Choose the game you want to play</h2>
                <div className='col-md-2 col-6 mb-5'>
                    <img src={game1} className='img-fluid' alt='oyun1' />
                </div>
                <div className='col-md-2 col-6 mb-5'>
                    <img src={game2} className='img-fluid'alt='oyun2' />
                </div>
                <div className='col-md-2 col-6 mb-4'>
                    <img src={game3} className='img-fluid' alt='oyun3'/>
                </div>
                <div className='col-md-2 col-6 mb-4'>
                    <img src={game4} className='img-fluid'alt='oyun4' />
                </div>
                <div className='col-md-2 col-6 mb-4'>
                    <img src={game5} className='img-fluid' alt='oyun5'/>
                </div>
                <div className='col-md-2 col-6 mb-4'>
                    <img src={game6} className='img-fluid' alt='oyun6'/>
                </div>
                <div className='col-md-2 col-6 mb-4'>
                    <img src={game7} className='img-fluid homegames__responsive'alt='oyun7' />
                </div>
                <div className='col-md-2 col-6 mb-4'>
                    <img src={game8} className='img-fluid homegames__responsive'alt='oyun8' />
                </div>
                <div className='col-md-2 col-6 mb-4'>
                    <img src={game9} className='img-fluid homegames__responsive' alt='oyun9'/>
                </div>
                <div className='col-md-2 col-6 mb-4'>
                    <img src={game10} className='img-fluid homegames__responsive' alt='oyun10'/>
                </div>
                <div className='col-md-2 col-6 mb-4'>
                    <img src={game11} className='img-fluid homegames__responsive' alt='oyun11'/>
                </div>
                <div className='col-md-2 col-6'>
                    <img src={game12} className='img-fluid homegames__responsive' alt='oyun12'/>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='button1'>SEE ALL GAMES</button>
            </div>
        
    </div>
</div>
  )
}

export default HomeGames