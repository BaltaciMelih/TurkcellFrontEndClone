import React from 'react'
import './paymentplan.scss'
import {Check2} from 'react-bootstrap-icons'


const PaymentPlan = () => {
  return (
    <div className='container-fluid payment d-flex justify-content-center'>
        <div className='container row'>
        <h2 className='text-center header__arrange text-white'>Lorem ipsum dolor sit amet consectetur.</h2>
            <div className='col-md-4 col-12 mt-5 mb-5'>
                <div className='payment__box d-flex justify-content-center flex-column'>
                    <div className='paymentbox__header py-4'><h2 className='text-center text-white'>BASIC</h2></div>
                    <h2 className='text-center text-white py-3'>Free</h2>
                    <hr className='text-white'/>
                    <ul className='text-white d-flex flex-column align-items-center mt-4'>
                        <li className='mb-3'><Check2></Check2>Standart Access</li>
                        <li className='mb-3'><Check2></Check2>1-hr session length</li>
                        <li className='mb-3'><Check2></Check2>Standart Access</li>
                        <li className='mb-3'><Check2></Check2>1-hr session length</li>
                    </ul>
                    <div className='d-flex justify-content-center mb-4'>
                        <button className='button2 mx-1'>JOIN NOW</button>
                    </div>
                </div> 
            </div>
            <div className='col-md-4 col-12 mt-5 mb-5'>
                <div className='payment__box d-flex justify-content-center flex-column'>
                   <div className='paymentbox__standart bg-primary'>
                        <div className='paymentbox__header bg-primary py-4'><h2 className='text-center text-white'>STANDART</h2></div>
                        <div className='standart__content'>
                            <h2 className='text-center text-white py-3'>15$/month</h2>
                            <hr className='text-white'/>
                            <ul className='d-flex flex-column align-items-center mt-4'>
                                <li className='mb-3'><Check2></Check2><span>Standart Access</span></li>
                                <li className='mb-3'><Check2></Check2><span>1-hr session length</span></li>
                                <li className='mb-3'><Check2></Check2><span>1-hr session length</span></li>
                                <li className='mb-3'><Check2></Check2><span>1-hr session length</span></li>
                                <div className='d-flex justify-content-center mb-4'>
                                    <button className='button2'>JOIN NOW</button>
                                </div>
                            </ul>   
                        </div>
                   </div>
                </div>
            </div>
            <div className='col-md-4 col-12 mt-5 mb-5'>
            <div className='payment__box d-flex justify-content-center flex-column'>
                    <div className='paymentbox__header py-4'><h2 className='text-center text-white'>PREMIUM</h2></div>
                    <h2 className='text-center text-white py-3'>30$/month</h2>
                    <hr className='text-white'/>
                    <ul className='text-white d-flex flex-column align-items-center mt-4'>
                        <li className='mb-3'><Check2></Check2>Standart Access</li>
                        <li className='mb-3'><Check2></Check2> 1-hr session length</li>
                        <li className='mb-3'><Check2></Check2>Standart Access</li>
                        <li className='mb-3'><Check2></Check2>1-hr session length</li>
                    </ul>
                    <div className='d-flex justify-content-center mx-2 mb-4'>
                        <button className='button2 mx-1'>JOIN NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPlan