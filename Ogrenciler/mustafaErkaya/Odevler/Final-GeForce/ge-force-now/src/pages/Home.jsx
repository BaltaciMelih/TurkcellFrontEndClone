import React from 'react'

import Banner from '../components/Banner/Banner';
import Screen from '../components/Screen/Screen';
import Game from '../components/Game/Game';
import Package from '../components/Package/Package';
import Console from '../components/Console/Console';
import FiveLogo from '../components/FiveLogo';
import Features from '../components/Features/Features';





const Home = () => {
  return (
    <>

       <Banner/>
       <Features/>
       <Screen/>
       <Game/>
       <Package/>
       <Console/>
       <FiveLogo/>
   

      
    </>
  )
}

export default Home