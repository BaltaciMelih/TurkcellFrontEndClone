import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <>
      <footer className='bg-white py-3 py-lg-3'>
        <div className='row d-flex flex-column align-items-center  flex-sm-row text-center m-0 '>
          <div className='col-5 d-flex flex-column   flex-sm-row justify-content-center align-items-center   justify-content-md-start align-items-start p-0 offset-sm-1 gap-sm-5 mb-2'>
            <div className='col col-sm-2 '>
              <ul className='list-unstyled  d-flex flex-column m-0'>
                <a href='#'>Games </a>
                <a href='#'>Membership</a>
                <a href='#'>Download</a>
              </ul>
            </div>
            <div className='col col-sm-3'>
              <ul className='list-unstyled  d-flex flex-column  m-0 ms-lg-5 '>
                <a href='#'>Contact Us</a>
                <a href='#'>Blog</a>
              </ul>
            </div>
            <div className='col col-sm-3'>
              <ul className='list-unstyled  d-flex flex-column mb-2'>
                <a href='#'>FAQs</a>
                <a href='#'>Service Status</a>
              </ul>
            </div>
          </div>
          <div className='col-4 flex-column d-flex  flex-sm-row  justify-content-center align-items-center offset-sm-1'>
            <div className='col'>
              <ul className='d-flex flex-column p-0 '>
                <a href='#' className='fw-bold '>
                  Follow Us!
                </a>
                <div className='d-flex mx-auto gap-2 '>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/9B563812-1778-49C2-A78A-29E6DAE45954.svg'></img>
                  </a>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/DA18F360-65C4-4613-8306-E37C0920498B.svg'></img>
                  </a>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/BD4D567A-FF56-47AC-B573-702388E59EDA.svg'></img>
                  </a>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/C4F608BE-8375-439B-AD8A-BB1E992E6463.svg'></img>
                  </a>
                </div>
              </ul>
            </div>
            <div className='col '>
              <p className='m-0 fw-bold'>Site Language</p>
              <div className='dropdown '>
                <a
                  className='btn dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  English
                </a>
                <ul className='dropdown-menu '>
                  <a className='dropdown-item' href='#'>
                    English
                  </a>
                  <a className='dropdown-item' href='#'>
                    Turkish
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER 2 */}
      <div className='container-fluid bg-black px-lg-5 py-2 '>
        <div className=' row d-flex flex-column flex-sm-row justify-content-center align-items-center text-center px-lg-5   '>
          <div className='col d-flex flex-column flex-sm-row gap-lg-5 mb-2 align-items-center mb-lg-0 ms-lg-3    '>
            <p className='text-white m-0 footer-2-text'>Terms of Use</p>
            <p className='text-white m-0 footer-2-text'>Privacy Policy</p>
            <p className='text-white m-0 footer-2-text'>Cookies</p>
          </div>
          <div className='col  d-flex flex-column flex-sm-row justify-content-end align-items-star'>
            <p className='text-white text-muted m-0 footer-2-text'>Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
