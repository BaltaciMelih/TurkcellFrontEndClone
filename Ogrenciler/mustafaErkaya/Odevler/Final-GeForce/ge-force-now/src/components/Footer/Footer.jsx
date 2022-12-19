import React from 'react'
import './Footer.scss';
import facebookIcon from '../../assets/icons/footericons/icon-facebook.svg';
import twitterIcon from '../../assets/icons/footericons/icon-twitter.svg';
import instagramIcon from '../../assets/icons/footericons/icon-instagram.svg';
import youtubeIcon from '../../assets/icons/footericons/icon-youtube.svg';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='container '>
            <div className="row py-4 text-center text-sm-start">
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="row">
                        <div className="col-sm-4">
                            <ul >
                                <li>Games</li>
                                <li>Membership</li>
                                <li>Download</li>
                            </ul>
                        </div>

                        <div className="col-sm-4">
                            <ul >
                                <li>Contact Us</li>
                                <li>Blog</li>
                                
                            </ul>
                        </div>

                        <div className="col-sm-4 '">
                            <ul   >
                                <li>FAQs</li>
                                <li>Service Status</li>
                            
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 ms-auto footer-right">
                    <div className="row">
                        <div className="col-sm-5 mb-4 mb-sm-0 ">
                            <div className='mb-3'>
                            <span className='fw-bold ' >Follow Us!</span>
                            </div>
                            <div className='footer-icons  '>
                                <img className='facebook-icon' src={facebookIcon} alt="" />
                                <img  src={twitterIcon}alt="" />
                                <img  src={instagramIcon} alt="" />
                                <img  src={youtubeIcon} alt="" />
                            </div>
                        </div>

                        <div className="col-sm-4 mx-auto">
                            <div className='mb-3'>
                            <span className='fw-bold'>Site Language</span>
                            </div>
                            <select name="languages">
                                <option value="Turkish">Turkish</option>
                                <option value="English">English</option>
                                <option value="Deutsch">Deutsch</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* alt taraf */}
        <div className='bg-dark'>
            <div className="container">
                <div className=' d-sm-flex justify-content-between text-white py-2 text-center text-sm-start'>
                    <div className='d-flex flex-column d-sm-block mb-3 mb-sm-0'>
                        <small >Term of Use</small>
                        <small className='mx-sm-4'>Privacy Policy</small>
                        <small>Cookies</small>
                    </div>
                    <div>
                        <small className='all-rights'>
                            Tüm hakları saklıdır
                        </small>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer