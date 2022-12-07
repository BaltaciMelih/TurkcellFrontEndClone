import React from 'react'
import Navbar from './Navbar'
import  Products  from './Products'
import Carousel from './Carousel'


export const Home = () => {
  return (
     <>
        <Navbar/>
        <Carousel/>
        <Products/>
     </>
  )
}
