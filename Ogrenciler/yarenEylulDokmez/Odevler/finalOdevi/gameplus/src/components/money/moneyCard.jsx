import React from 'react';
import './money.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../button';
import line from '../../pics/line.png';

export default function moneyCard(props) {
  return (
    <div className={props.moclass}>
        <div className={props.headClass}>
            <p className="headP">{props.head}</p></div>
        <p className="mcardP">{props.amount}</p>
        <img className="line" src={line} alt="line" />
        <div className="element">
          <div className="matter">
            <img className="tik"  src={props.img} alt="matter1" />
            <p className={props.mColor}>Standart Access</p>
          </div>
          <div className="matter">
            <img className="tik" src={props.img} alt="matter2" />
            <p className={props.mColor}>1-hr session lenght</p>
          </div>
          <div className="matter">
            <img className="tik"  src={props.img2} alt="matter3" />
            <p className={props.mColor2}>Standart Access</p>
          </div>
          <div className="matter">
            <img className="tik"  src={props.img} alt="matter4" />
            <p className={props.mColor}>1-hr session lenght</p>
          </div>
        </div>
        <Button width="326px"margin="0 30px"  heightK="48px" widthK="236px" marginK="0 30px" text="JOIN NOW"/>
    </div>
  )
}
