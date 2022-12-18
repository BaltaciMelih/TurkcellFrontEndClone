import React from 'react';
import './features.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../pics/icon-feature-01.png";
import logo1 from "../../pics/icon-feature-03.png";
import logo2 from "../../pics/group3.png";
import logo3 from "../../pics/group.png";

export default function features() {
  return (
    <div className="features">
        <div className="text">
            <h3>Features</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="lorem">
            <div className="featuresCouple" >
            <img className="img1" src={logo} alt="features1" />
            <p className="p1">Lorem ipsum dolor sit amet</p></div>
            <div className="featuresCouple" >
            <img className="img2" src={logo1} alt="features2" />
            <p className="p2">Lorem ipsum dolor sit amet</p></div>
        </div>
        <div className="lorem">
        <div className="featuresCouple" >
            <img className="img3"src={logo2} alt="features3" />
            <p className="p3">Lorem ipsum dolor sit amet</p></div>
            <div className="featuresCouple" >
            <img className="img4"src={logo3} alt="features4" />
            <p className="p4">Lorem ipsum dolor sit amet</p></div>
        </div>
    </div>
  )
}
