import React from 'react';
import './features.scss'
import logo from '../../photos/icon-feature-01.png'
import logo1 from '../../photos/group0.png'
import logo2 from '../../photos/group.png'
import logo3 from '../../photos/icon-feature-03.png'
import maclogo from '../../photos/icons-pc.png'
import Windows from '../../photos/icons-mac.png'
import Android from '../../photos/icons-android.png'

const Features = () => {
  return (
    
    <div className='container-fluid features d-flex flex-column align-items-center'>
        <div className='row d-flex features__border d-block d-md-none '>
            <div className='col-md-4 col-12 d-flex'>
                <ul>
                    <li><h2>Features</h2></li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, est!</li>
                </ul>
            </div>
            <div className='col-md-4 col-12'>
                <ul>
                    <li className=''>
                        <img src={logo} className='features__logo' alt='logo'/>   
                        Lorem ipsum dolor sit amet.</li>
                        
                        <li className=''>
                        <img src={logo3} className='features__logo' alt='logo'/>   
                        Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div className='col-md-4 col-12'>
            <ul>
                    <li className=''>
                        <img src={logo1} className='features__logo' alt='logo'/>   
                        Lorem ipsum dolor sit amet.</li>
                        
                        <li className=''>
                        <img src={logo2} className='features__logo' alt='logo'/>   
                        Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
        <div className='row rowcontainer mb-5 d-flex justify-content-center'>
        <h2 className='text-white text-center mb-5 mt-5'>On all your screens at home and on the go</h2>
            <div className='col-md-3 col-12 d-flex justify-content-center'>
                <div className='box py-4 text-white d-flex align-items-center mb-3'>
                    <img src={Windows} className='platform__logo' alt='logowin' />
                    Available on Windows
                </div>
            </div>
            <div className='col-md-3 col-12 d-flex justify-content-center'>
                <div className='box py-4 text-white d-flex align-items-center mb-3'>
                    <img src={maclogo} className='platform__logo' alt='logomac' />
                    Available on Mac
                </div>
            </div>
            <div className='col-md-3 col-12 d-flex justify-content-center'>
                <div className='box py-4 text-white d-flex align-items-center mb-3'>
                    <img src={Android} className='platform__logo' alt='logoandro' />
                    Available on Android
                </div>
            </div>
        </div>
    </div>
        
    
)  
    
}

export default Features