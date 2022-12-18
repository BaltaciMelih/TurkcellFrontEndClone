import React from 'react';

import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Screen from '../Components/Screen/Screen';
import Games from '../Components/Games/Games';
import Subscribe from '../Components/Subscribe/Subscribe';
import GamingInfo from '../Components/GamingInfo/GamingInfo';
import Brand from '../Components/Brand/Brand';
import Footer from '../Components/Footer/Footer';
function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Screen/>
        <Games/>
        <Subscribe/>
        <GamingInfo/>
        <Brand/>
        <Footer/>
    </div>
  )
}

export default Home