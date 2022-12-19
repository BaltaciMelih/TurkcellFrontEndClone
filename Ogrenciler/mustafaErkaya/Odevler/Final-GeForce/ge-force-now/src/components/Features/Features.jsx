import React from 'react';
import './Features.scss';
import download from '../../assets/icons/feturesicons/featuresDownload.svg';
import game from '../../assets/icons/feturesicons/featuresGame.svg';
import wireless from '../../assets/icons/feturesicons/featuresWireless.svg';
import profile from '../../assets/icons/feturesicons/featuresProfile.svg';


const Features = () => {

  const featuresIcons = [profile, download, game, wireless, ]

  return (
    <div >
        <div className='features bg-info d-none d-lg-block'>
            <div className='container'>
              <div className="row  ">
                <div className="col-md-10 mx-auto bg-info p-5 features-absolute">
                  <div className="row text-white">
                    <div className="col-md-3 text-center text-md-start ">
                      <h3 className='my-3'>Features</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="col-md-8 ms-sm-auto">
                      <div className="row">

                        {featuresIcons.map((icon, index) => {
                          return  <div key={index} className="col-sm-6 d-flex align-items-center my-3">
                          <img src={icon} alt="" className='me-3' />
                          <span>Lorem ipsum dolor sit.</span>
                        
                        </div>
                        })}
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
                          {/* mobil */}
        <div className='bg-info d-block d-lg-none'>
          <div className='container'>
              <div className="row  ">
                <div className="col-md-10 mx-auto bg-info p-5 ">
                  <div className="row text-white">
                    <div className="col-md-3 text-center text-md-start ">
                      <h3 className='my-3'>Features</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="col-md-8 ms-sm-auto">
                      <div className="row">

                        {featuresIcons.map((icon, index) => {
                          return  <div key={index} className="col-sm-6 d-flex align-items-center my-3">
                          <img src={icon} alt="" className='me-3' />
                          <span>Lorem ipsum dolor sit.</span>
                        
                        </div>
                        })}
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Features