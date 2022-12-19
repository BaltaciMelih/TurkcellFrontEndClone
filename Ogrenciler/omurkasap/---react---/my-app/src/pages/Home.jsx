import React from 'react'
import Header from '../components/02header/Header'
import Navbar from '../components/01navbar/Nav'
import Rectangle from '../components/03rectangle/Rectangle'
import Rectangle2 from '../components/03rectangle/Rectangle2'
import Regitem from '../components/03rectangle/Regitem'
import Gamebox from '../components/04gamebox/Gamebox'
import Cards from '../components/05cards/Cards'
import Footer from '../components/06footer/Footer'


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Rectangle/>
        <Rectangle2/>
        <Gamebox/>
        <Cards/>
        <Footer/>
        
    
    </div>
  )
}
