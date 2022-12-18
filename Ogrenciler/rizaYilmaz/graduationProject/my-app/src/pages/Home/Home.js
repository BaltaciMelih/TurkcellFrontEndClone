import React from 'react'
import "../../style/bootstrap-override.scss";
import AvailableScreen from '../../components/AvailableScreen'
import Carousel from '../../components/Carousel'
import ChooseMembership from '../../components/ChooseMembership'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import ModulesBanner from '../../components/ModulesBanner';
import CarouselBottom from '../../components/CarouselBottom';
import ChooseGame from '../../components/ChooseGame';
function Home() {
  return (
    <div>
    <Menu button={true}/>
    <Carousel/>
    <AvailableScreen/>
    <ChooseGame/>
    <ChooseMembership/>
    <CarouselBottom/>
    <ModulesBanner/>
    <Footer register={false}/>
    </div>
  )
}

export default Home   
    
    
    