import React from 'react'
import Button from '../Button/Button'
import "./cards.css"

function Cards() {
    return (
        <div>
            {/* <div className="row bg-dark">
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title py-4 text-center bg-success">BASIC</h5>
        <p className="card-text py-5 text-center">With supporting text below as a natural lead-in to additional content.</p>
        <Button text="JOIN NOW"/>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title py-4 text-center">STANDARD</h5>
        <p className="card-text py-5 text-center">With supporting text below as a natural lead-in to additional content.</p>
        <Button text="JOIN NOW"/>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title py-4 text-center">PREMIUM</h5>
        <p className="card-text py-5 text-center">With supporting text below as a natural lead-in to additional content.</p>
        <Button text="JOIN NOW"/>
      </div>
    </div>
  </div>
</div> */}

            <div className="container-fluid my-5">
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
                                <div className="card-footer"><Button/></div>
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
                                <div className="card-footer"><Button/></div>
                        </div>
                    </div>
                    <div className="col">
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
                                <div className="card-footer"><Button/></div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Cards