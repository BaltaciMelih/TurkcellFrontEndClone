import React from 'react'
import "./Footer.css"
import Facebook from "../../assets/img/footer/facebook.png"
import Twitter from "../../assets/img/footer/twitter.png"
import Instagram from "../../assets/img/footer/instagram.png"
import Youtube from "../../assets/img/footer/youtube.png"

const Footer = () => {
  return (
    <div className='All-Footer'> 

<footer className="footer bg-white">
          <div className="container bg-white position-relative">
            <div className=" justify-content-around bg-white mx-auto  ">
              <div className="row   bg-white">
              
              <div className="col-md-6 col-lg-2 ">
                <ul className='text-center text-md-start p-0'>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Membership</a></li>
                  <li><a href="#">Download</a></li>
                </ul>
              </div>

              
              <div className="col-md-6 col-lg-2">
              
                <ul className='text-center text-md-start p-0'>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Blog</a></li>
             
                </ul>
              </div>


              <div className=" col-md-6 col-lg-2">
              <h5></h5>
                <ul className='text-center text-md-start p-0'>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Service Status</a></li>
           
                </ul>
              </div>


              <div className=" col-md-6 col-lg-2  ps-md-5 text-center text-md-start ms-auto">
              <h5 className='ms-1'>Follow Us!</h5>  
                <img className='p-2' src={Facebook}></img>
                <img className='p-2' src={Twitter}></img>
                <img className='p-2' src={Instagram}></img>
                <img className='p-2' src={Youtube}></img>
              </div>


              <div className="d-none d-lg-block col-sm-3 col-lg-2 ms-auto">
              <h5>Site Language</h5>
                <ul className='d-flex'>
                  
                  <li ><a href="#">English</a></li>
           
                </ul>
              </div>


            
            </div>
            </div>
          </div>
   
          
        </footer>



        <div className="row bg-dark mb-0">
            <div className=" bg-dark">
                <div className="col bg-dark px-5 text-white text-sm"> 

                <div className="col-5 d-inline-flex ms-5 p-2 justify-content-start">
                    <div className="col small">Terms Of Use</div>
                    <div className="col small">Privacy Policy</div>
                    <div className="col small">Cookies</div>
                </div>
                
                <div className="col-5 d-inline-flex ms-5">
                        <div className="col small text-end">Tüm Hakları Saklıdır</div>
                </div>
                </div>
            
                </div>
            
            </div>

    </div>
  )
}

export default Footer