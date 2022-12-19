import React from 'react'
import "./regitem.css"
import Recitem1 from "../../assets/img/rectangla2-item-logo/recitem1.png"
import Recitem2 from "../../assets/img/rectangla2-item-logo/recitem2.png"
import Recitem3 from "../../assets/img/rectangla2-item-logo/recitem3.png"

function Regitem() {
  return (
    <div className='conteiner-fluid regitem mb-5'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3  d-flex justify-content-around'>
            <div className='col-8 col-xl-6 col-xxl-3 text-white bg-black mt-5 p-5 border border-1 border-secondary shadow-lg'>
              <span className="d-flex justify-content-around">
              <img className='ms-1' src={Recitem1} alt="" /> <span className='text-start me-1 mt-2'>Available on Windows</span>
              </span>
              </div>
            <div className='col-8 col-xl-6 col-xxl-3 text-white bg-black mt-5 p-5 border border-1 border-secondary shadow-lg'>
              <span className="d-flex justify-content-around">
              <img className='ms-2' src={Recitem2} alt="" /> <span className='text-start me-5 mt-2'>Available on Mac</span>
              </span>
              </div>
            <div className='col-8 col-xl-6 col-xxl-3 text-white bg-black mt-5 p-5 border border-1 border-secondary shadow-lg'>
              <span className="d-flex justify-content-around">
              <img className='ms-2' src={Recitem3} alt="" /> <span className='text-start me-5 mt-2'>Available on Android</span>
              </span>
              </div>
            
        </div>
        </div>
  )
}

export default Regitem