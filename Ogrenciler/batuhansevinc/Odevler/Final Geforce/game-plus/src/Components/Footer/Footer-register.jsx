import React from 'react';
import facebook from '../../Images/icon-facebook.png';
import youtube from '../../Images/icon-youtube.png';
import instagram from '../../Images/icon-instagram.png';
import twitter from '../../Images/icon-twitter.png';
import './footer.scss';
import NavLink from 'react-bootstrap/esm/NavLink';
function FooterRegister() {
    return (
        <div>
            <div className="container-fluid bg-white">
                <footer className="text-center footer-text">
                    <div className="container footer">
                        <div className="p-20 d-md-flex justify-content-between">
                            <div className='d-md-flex'>
                            <div className='text-md-start footer-gap'>
                                <NavLink href="#" className="nav-link px-2">Games</NavLink>
                                <NavLink href="#" className="nav-link px-2">Blog</NavLink>
                                <NavLink href="#" className="nav-link px-2">Contact Us</NavLink>
                            </div>
                            </div>
                            <div className='d-md-flex justify-content-center'>
                                <div className='footer-follow text-md-start'>
                                    <p className='fw-bold footer-p-16'>Follow Us!</p>
                                    <div className='d-flex justify-content-md-start justify-content-center'>
                                        <img src={facebook} className="footer-follow-img" />
                                        <img src={twitter} className="footer-follow-img" />
                                        <img src={instagram} className="footer-follow-img" />
                                        <img src={youtube} className="footer-follow-img" />
                                    </div>
                                </div>
                                <div className='footer-right text-md-start'>
                                    <p className='fw-bold m-0'>Site Language</p>
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                English
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Türkçe</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
            <div className="container">
                <div className="cookies text-white text-center">
                    <div className='cookies-right'>
                        <p className='m-0'>Terms of Use</p>
                        <p className='m-0'>Privacy Policy</p>
                        <p className='m-0'>Cookies</p>
                    </div>
                    <div className='cookies-left'>
                        <p className='m-0 small'>Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterRegister