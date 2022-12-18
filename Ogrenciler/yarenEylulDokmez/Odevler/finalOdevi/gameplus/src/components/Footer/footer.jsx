import React from 'react';
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import fb from '../../pics/icon-facebook.png';
import twt from '../../pics/icon-twitter.png';
import ig from '../../pics/icon-instagram.png';
import yt from '../../pics/icon-youtube.png';

export default function () {
  return (
    <div>
        <div className="footerTop">
          <div className="col1">
          <a className="colText" href="#">Games</a>
          <a className="colText" href="#">Membership</a>
          <a className="colText" href="#">Download</a>
          </div>
          <div className="col2">
          <a className="colText" href="#">Contact Us</a>
          <a className="colText" href="#">Blog</a>
          </div>
          <div className="col2">
          <a className="colText" href="#">FAQs</a>
          <a className="colText" href="#">Service Status</a>
          </div>
          <div className="follow">
            <p >Follow Us!</p>
            <div>
            <img className="icons"  src={fb} alt="fb" />
            <img className="icons" src={twt} alt="twt" />
            <img className="icons" src={ig} alt="ig" />
            <img className="icons end" src={yt} alt="yt" /></div>
          </div>
          <div className="lang">
            <p >Site Language</p>
            <div className="dropdown langDrop">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                English
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">English</a></li>
                <li><a className="dropdown-item" href="#">Türkçe</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBottom">
            <a className="bottomLink" href="#">Term of Use</a>
            <a className="bottomLink" href="#">Privacy Policy</a>
            <a className="bottomLink" href="#">Cookies</a>
            <p className="bottomEnd">Tüm Hakları Saklıdır</p>
        </div>
    </div>
  )
}