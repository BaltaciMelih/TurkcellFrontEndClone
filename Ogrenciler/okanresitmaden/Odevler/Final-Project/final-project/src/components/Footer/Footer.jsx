import React from 'react'
import './footer.scss'
import {Facebook} from 'react-bootstrap-icons'
import {Twitter} from 'react-bootstrap-icons'
import {Instagram} from 'react-bootstrap-icons'
import {Youtube} from 'react-bootstrap-icons'


const Footer = () => {
  return (
    <>
        <footer className='container-fluid mb-3'>
            <div className='footer__lists mt-5'>
                <ul className='footerlists__first'>
                    <li>Games</li>
                    <li>Membership</li>
                    <li>Download</li>
                </ul>
                <ul className='footerlists__second'>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
                <ul className='footerlists__third'>
                    <li>FAQs</li>
                    <li>Service Status</li>
                </ul>
                <ul className='footerlists__four'>
                    <li className='mb-2 mx-1'><strong>Follow Us!</strong></li>
                    <li className='d-flex'>
                        <Facebook className='mx-1'></Facebook>
                        <Twitter className='mx-1'></Twitter>
                        <Instagram className='mx-1'></Instagram>
                        <Youtube className='mx-1'></Youtube>
                    </li>
                </ul>
                <ul className='footerlists__five'>
                    <li className='mb-2'><strong>Site Language</strong></li>
                    <li>English</li>
                </ul>
            </div>
        </footer>
        <div className='copyrightpart'>
            <div className='copyright__elements'>
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                    <li className='footerendpart__copyright mb-2'>Tüm hakları saklıdır.</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer