import React from 'react'
import Recitem1 from "../../assets/img/rectangla2-item-logo/recitem1.png"
import Recitem2 from "../../assets/img/rectangla2-item-logo/recitem2.png"
import Recitem3 from "../../assets/img/rectangla2-item-logo/recitem3.png"

function Regitem() {
  return (
    <div className='conteiner regitem'>
        <div className='row bg-dark'>
            <div className='col-4 text-white bg-dark mt-5 p-5'>
              <span className="d-flex justify-content-around">
              <img src={Recitem1} alt="" />Available on Windows
              </span>
              </div>
            <div className='col-4 text-white bg-dark mt-5 p-5'><img src={Recitem2} alt="" />Available on Mac</div>
            <div className='col-4 text-white bg-dark mt-5 p-5'><img src={Recitem3} alt="" />Available on Android</div>
        </div>
        </div>
  )
}

export default Regitem