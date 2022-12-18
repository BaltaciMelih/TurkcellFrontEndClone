import React from 'react';
import './money.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoneyCard from './moneyCard';
import greent from '../../pics/greentik.png';
import lightt from '../../pics/lighttik.png';
import mediumt from '../../pics/mediumtik.png';


export default function money() {
  return (
    <div className="money">
        <h2 className="moneyH2">Lorem ipsum dolor sit, amet consectetur</h2>
        <div className="cards">
        <MoneyCard moclass={"grayCard"} headClass={"grayHead"} head={"Free"} amount={"Free"} img={lightt} img2={mediumt} mColor={"grayC"} mColor2={"mediumC"}/>
        <MoneyCard moclass={"greenCard"} headClass={"greenHead"} head={"Standart"} amount={"15$/month"} img={greent} img2={greent} mColor={"greenC"} mColor2={"greenC"}/>
        <MoneyCard moclass={"grayCard"}headClass={"grayHead"} head={"Premium"} amount={"30$/month"} img={lightt} img2={mediumt}mColor={"grayC"} mColor2={"mediumC"}/>
        </div>
    </div>
  )
}
