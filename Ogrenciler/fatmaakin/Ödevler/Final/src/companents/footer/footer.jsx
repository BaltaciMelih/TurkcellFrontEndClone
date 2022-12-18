import React from 'react'
import {Container} from 'react-bootstrap'
import faceicon from '../../image/socialmedia/icon-facebook.png'
import twiticon from '../../image/socialmedia/icon-twitter.png'
import instaicon from '../../image/socialmedia/icon-instagram.png'
import youicon from '../../image/socialmedia/icon-youtube.png'
const footer = () => {
  return (
   <Container className='py-5'>
    <div className="row">
      <div className="col d-flex flex-row justify-content-center ">
        <div className="col">
          <ul className='list-group'>
            <li><a href="/">Games</a></li>
            <li><a href="/">Membeship</a></li>
            <li><a href="/">Download</a></li>
          </ul>
        </div>
        <div className="col">
          <ul className='list-group'>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">Blog</a></li>
          
          </ul>
        </div>
        <div className="col">
        <ul className='list-group'>
          <li><a href="/">FAQs</a></li>
          <li><a href="/">Service Status</a></li>
          
          </ul>
          
        </div>
      </div>
      <div className="col d-flex flex-row justify-content-center ">
        <div className="col">
          <b>Follow Us!</b>
          <div className='col d-flex flex-row'>
           <a href="/"><img src={faceicon} alt="" /></a>
           <a href="/"><img src={twiticon} alt="" /></a>
           <a href="/"><img src={instaicon} alt="" /></a>
           <a href="/"><img src={youicon} alt="" /></a>
          </div>
        </div>
        
          <div className="col">
          <b>Site Language</b>
          </div>
         
            <ul className='dropdown-menu'>
              <li><a href="/" className='dropdown-item'>English</a></li>
              <li><a href="/" className='dropdown-item'>Turkish</a></li>
            </ul>
          
      
      </div>
    </div>
    <div className="row bg-black">
    <div class="d-flex mb-3">
  <div class="p-2 footeritem"><a href="/">Privacy Policy</a></div>
  <div class="p-2 footeritem"><a href="/">Cookies</a></div>
  <div class="ms-auto p-2 footeritem">Tüm hakları saklıdır.</div>
</div>

    </div>
   </Container>
  )
}

export default footer