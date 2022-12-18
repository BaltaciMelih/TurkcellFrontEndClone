import React from 'react'
import Slider from '../components/WelcomeSlider/Slider'
import SliderResponsive from '../components/WelcomeSliderResponsive/SliderResponsive'
import Features from '../components/Features/Features'
import HomeGames from '../components/HomeGames/HomeGames'
import PaymentPlan from '../components/Payment/PaymentPlan'
import SliderTwo from '../components/SecondSlider/SliderTwo'



const Home = () => {
  return (
    <>
    <Slider></Slider>
    <SliderResponsive></SliderResponsive>
    <Features></Features>
    <HomeGames></HomeGames>
    <PaymentPlan></PaymentPlan>
    <SliderTwo></SliderTwo>
    </>
  )
}

export default Home
