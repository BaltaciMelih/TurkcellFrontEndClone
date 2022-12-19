import React from 'react'
import Reclogo1 from "../../assets/img/rectangle-logo/reclogo1.svg"
import Reclogo2 from "../../assets/img/rectangle-logo/reclogo2.svg"
import Reclogo3 from "../../assets/img/rectangle-logo/reclogo3.svg"
import Reclogo4 from "../../assets/img/rectangle-logo/reclogo4.svg"
import "./rectangle.css"


function Rectangle() {
  const Logos = [
    {
      img: Reclogo1,
      p: "Lorem ipsum dolor sit amet."
    },
    {
      img: Reclogo2,
      p: "Lorem ipsum dolor sit amet."
    },
    {
      img: Reclogo3,
      p: "Lorem ipsum dolor sit amet."
    },
    {
      img: Reclogo4,
      p: "Lorem ipsum dolor sit amet."
    }
    
  ]
  return (
    <div className='features'>

      <div className='feat container d-none d-lg-block'>
        <div className="row">
          <div className="col-9 joker p-5 mx-auto">
            <div className="row">
              <div className="col-lg-4 d-flex flex-column justify-content-center">
                <h3>Features</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="col-lg-8">
                <div className="row">
                {Logos.map((item, index) => (
                                    <div className="col-md-6 d-flex align-items-center p-3" key={index}>
                                    <img src={item.img} alt="" className='me-3' />
                                    <p className='m-0'>{item.p}</p>
                                    </div>
                ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-lg-none p-5 mx-auto">
            <div className="row">
              <div className="col-lg-4 d-flex flex-column justify-content-center">
                <h3>Features</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="col-lg-8">
                <div className="row">
                {Logos.map((item, index) => (
                                    <div className="col-md-6 d-flex align-items-center p-3" key={index}>
                                    <img src={item.img} alt="" className='me-3' />
                                    <p className='m-0'>{item.p}</p>
                                    </div>
                ))}
                </div>
              </div>

            </div>
          </div>


    </div>
  )
}

export default Rectangle