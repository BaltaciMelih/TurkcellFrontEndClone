import React from 'react'
import Button from '../Button/Button'
import "./cards.css"

function Cards() {
    return (
        <div className='cards'>
        
            <div className="container-fluid my-5 mt-0">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-header" id='cardHeader1'>BASIC</div>
                            <div className="card-body" id='cardBody1'>
                                <div className="card-title" id='cardTitle1'>FREE</div>
                                <hr />
                            <ul className=''>
                                    <li>Standart Access</li>
                                    <li>1-hr session length</li>
                                    <li>Standart Access</li>
                                    <li>1-hr session length</li>
                                </ul>
                                </div>
                                <div className="card-footer"><Button text="JOIN NOW"/></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header" id='cardHeader2'>STANDARD</div>
                            <div className="card-body" id='cardBody2'>
                            <div className="card-title">15$/Mounth</div>
                                <hr />
                            <ul className=''>
                                    <li>Standart Access</li>
                                    <li>1-hr session length</li>
                                    <li>Standart Access</li>
                                    <li>1-hr session length</li>
                                </ul>
                                </div>
                                <div className="card-footer"><Button text="JOIN NOW"/></div>
                        </div>
                    </div>
                    <div className="col mx-auto">
                        <div className="card">
                            <div className="card-header" id='cardHeader3'>PREMIUM</div>
                            <div className="card-body" id='cardBody3'>
                            <div className="card-title" id='cardTitle3'>30$/Mounth</div>
                                <hr />
                            <ul className=''>
                                    <li>Standart Access</li>
                                    <li>1-hr session length</li>
                                    <li>Standart Access</li>
                                    <li>1-hr session length</li>
                                </ul>
                                </div>
                                <div className="card-footer"><Button text="JOIN NOW"/></div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Cards