import React from 'react'
import stroke from '../../assets/icons/packageicons/stroke.svg';
import strokegreen from '../../assets/icons/packageicons/strokegreen.svg';
import line from '../../assets/icons/packageicons/line.svg';
import Button from '../Button/Button';
import './Package.scss';

const Package = () => {
  return (
    <div className='bg-black'>
    <div className='container package '>
        <h2 className='text-center text-white py-5'>You can try our packages</h2>
        <div className="row text-white py-4">
            <div className='p-3 col-lg-4 col-md-6   '>
            <div className="bg-info  ">
                <h3 className='bg-dark text-center p-4'>BASIC</h3>
                <h4 className=' title text-center p-4' >Free</h4>
                <ul className="list-group bg-info  px-4 pb-5 grey">
                    <img className='img-fluid' src={line} alt="" />
                    <li className="list-group-item  "><img src={stroke} alt="" className='me-4'/>Standat Access</li>
                    <li className="list-group-item"> <img src={stroke} alt="" className='me-4'/>1-hr session length</li>
                    <li className="list-group-item text-secondary "> <img src={stroke} alt="" className='me-4 '/>Standart Access</li>
                    <li className="list-group-item mb-3"> <img src={stroke} alt="" className='me-4'/>2-hr session length</li>
                    
                    <Button text='JOİN NOW' />
                   
                </ul>
                </div>
            </div>

            <div className=' my-3  col-lg-4  col-md-6 standart  '>
            <div className=" bg-info border border-2 border-success ">
                <h3 className='bg-success text-center p-4'>STANDART</h3>
                <h4 className=' title text-center p-4' >15$/month</h4>
                
                <ul className="list-group bg-info  px-4 pb-5">
                    <img className='img-fluid' src={line} alt="" />
                    <li className="list-group-item  "><img src={strokegreen} alt="" className='me-4'/>Standat Access</li>
                    <li className="list-group-item"> <img src={strokegreen} alt="" className='me-4'/>1-hr session length</li>
                    <li className="list-group-item text-secondary "> <img src={strokegreen} alt="" className='me-4 '/>Standart Access</li>
                    <li className="list-group-item mb-3"> <img src={strokegreen} alt="" className='me-4'/>2-hr session length</li>
                    
                    <Button text='JOİN NOW' type='secondary' />
                   
                </ul>
                </div>
            </div>

            <div className='p-3 col-lg-4 mx-auto col-md-6'>
            <div className=" bg-info  mx-auto">
                <h3 className='bg-dark text-center p-4'>PREMIUM</h3>
                <h4 className=' title text-center p-4' >30$/month</h4>
                
                <ul className="list-group bg-info  px-4 pb-5 grey">
                    <img className='img-fluid' src={line} alt="" />
                    <li className="list-group-item  "><img src={stroke} alt="" className='me-4'/>Standat Access</li>
                    <li className="list-group-item"> <img src={stroke} alt="" className='me-4'/>1-hr session length</li>
                    <li className="list-group-item text-secondary "> <img src={stroke} alt="" className='me-4 '/>Standart Access</li>
                    <li className="list-group-item mb-3"> <img src={stroke} alt="" className='me-4'/>2-hr session length</li>
                    
                    <Button text='JOİN NOW' />
                   
                </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Package