import React from 'react'
import "./Rectangle3.css"

import Footerimg from "../../assets/img/footer/footerimg.png"
import Consoleimg from "../../assets/img/footer/console.png"

const Rectangle3 = () => {
    return (
        <div className='footer'>
            <div className='container-fluid d-none d-xl-block'>
                <div className='container p-0'>
                    <div className="row g-0 position-relative text-white d-flex  align-items-center ms-0">
                        <span className="col-md-6 mb-md-0 p-md-0 pe-0">
                            <img src={Consoleimg} className="" alt="..." />
                        </span>
                        
                        <span className="col-md-6 p-4 ps-md-0 paragraph ">
                            <span className="gaming">
                                GAMING - AUGUST 11, 2020
                            </span>
                            <br /><br />
                            <h5 className="mt-0 loremip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit est repellendus quod?</h5>
                            <p id='under'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        </span>
                        
                    </div>
                </div>
            </div>

            <div className='container-fluid d-block d-xl-none'>
                <div className='container '>
                    <div className="row g-0 position-relative text-white d-flex align-items-start ms-0">
                        <span className="col-md-6 mb-md-0 p-md-4 pe-0 justify-content-md-center">
                            <img src={Consoleimg} className="img-fluid" alt="..." />
                        </span>
                        
                        <span className="col-md-6 p-4 ps-md-0 ">
                            <span className="gaming">
                                GAMING - AUGUST 11, 2020
                            </span>
                            <br /><br />
                            <h5 className="mt-0 loremip title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit est repellendus quod?</h5>
                            <p id='under'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        </span>
                        
                    </div>
                </div>
            </div>

            <div className="">
                <img className='fluid w-100' src={Footerimg} alt="" />
            </div>
        </div>
    )
}

export default Rectangle3