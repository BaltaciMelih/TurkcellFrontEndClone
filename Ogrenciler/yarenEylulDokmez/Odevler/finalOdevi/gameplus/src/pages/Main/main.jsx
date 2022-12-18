import React from 'react';
import './main.css'
import Header from '../../components/Header/header';
 import FeaturesBase from '../../components/features/featuresBase';
 import Footer from '../../components/Footer/footer';
 import Banner from '../../components/banner/banner';
import Screen from '../../components/screen/screen';
import ChooseGame from '../../components/chooseGame/chooseGame';
import Money from '../../components/money/money';
import comp from '../../pics/comp.png';
import compK from '../../pics/modules-mobile-banner-2-logos.png';
//import ReadMore from '../../components/readMore/readBase';

export default function main() {
  return (
    <div>
        <Header/>
        <Banner/>
        <FeaturesBase/>
        <Screen/>
        <ChooseGame/>
        <Money/>
        {/* <ReadMore/> */}
        <div className="comp">
          <img src={comp} alt="comp" />
        </div>
        <div className="compK">
          <img src={compK} alt="compk" />
        </div>
        <Footer/>
    </div>
  )
}
