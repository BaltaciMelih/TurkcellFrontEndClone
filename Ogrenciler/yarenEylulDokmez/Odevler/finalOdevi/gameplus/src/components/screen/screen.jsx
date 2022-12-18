import React from 'react';
import './screen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreenCard from './screenCard';
import mac from '../../pics/icons-mac.png';
import pc from '../../pics/icons-pc.png';
import android from '../../pics/icons-android.png';

export default function screen() {
  return (
    <div className="screen">
        <h2 className="screenH2">On all your Screens at home and on the go</h2>
        <div className="screenCards">
        <ScreenCard img={mac} alt={"mac"} text={"Available on Windows"}/>
        <ScreenCard img={pc} alt={"pc"} text={"Available on Mac"}/>
        <ScreenCard img={android} alt={"android"} text={"Available on Android"}/>
        </div>
    </div>
  )
}
