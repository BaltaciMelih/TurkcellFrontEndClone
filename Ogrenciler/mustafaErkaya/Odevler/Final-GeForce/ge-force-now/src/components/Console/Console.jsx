import React from 'react'
import console from '../../assets/images/consol.png';
import Button from '../Button/Button';
import lefticon from '../../assets/icons/lefticon.svg';
import righticon from '../../assets/icons/righticon.svg';
import './Console.scss';


const Console = () => {
  return (
    <div id="consoleCarousel" className="carousel slide bg-dark py-md-5 console" data-bs-ride="carousel">
      <div className="carousel-inner container p-0 p-md-3">
        <div className="carousel-item active  ">
          <div className="d-md-flex align-items-center px-3 py-4 my-0 my-md-5 bg-info">
            
               <img src={console} className="img-fluid" alt="..." />
            

            <div className=' text-white px-md-5 '>
              <p className='text-warning my-3'>GAMING - AUGUST 11, 2022</p>
              <h4 className='my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, mollitia.</h4>
              <p className='text-warning large-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quas in! Explicabo minima, est excepturi reiciendis laboriosam fuga fugit vel quos, suscipit soluta, animi quo.</p>
              <Button text='READ MORE' type='secondary'/>
            </div>

            <div className="slider my-3 d-block d-md-none">

                    <button type="button" data-bs-target="#consoleCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#consoleCarousel" data-bs-slide-to="1"  aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#consoleCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
            
          </div>

        </div>
        <div className="carousel-item   ">
          <div className="d-md-flex  align-items-center px-3 py-4 my-0 my-md-5 bg-info">
            <img src={console} className="img-fluid" alt="..." />
            <div className=' text-white px-md-5  '>
              <p className='text-warning my-3 '>GAMING - AUGUST 11, 2022</p>
              <h4 className='my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, mollitia.</h4>
              <p className='text-warning large-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quas in! Explicabo minima, est excepturi reiciendis laboriosam fuga fugit vel quos, suscipit soluta, animi quo.</p>
              <Button text='PLAY NOW' />
            </div>

            <div className="slider my-3 d-block d-md-none">

                    <button type="button" data-bs-target="#consoleCarousel" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#consoleCarousel" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#consoleCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
            
          </div>
        </div>

        <div className="carousel-item  ">
          <div className="d-md-flex  align-items-center px-3 py-4 my-0 my-md-5 bg-info">

            <img src={console} className="img-fluid" alt="..." />


            <div className=' text-white px-md-5 '>
              <p className='text-warning my-3'>GAMING - AUGUST 11, 2022</p>
              <h4 className='my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, mollitia.</h4>
              <p className='text-warning large-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quas in! Explicabo minima, est excepturi reiciendis laboriosam fuga fugit vel quos, suscipit soluta, animi quo.</p>
              <Button text='JOİN US' type='secondary'/>
            </div>

            <div className="slider my-3 d-block d-md-none">

                    <button type="button" data-bs-target="#consoleCarousel" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#consoleCarousel" data-bs-slide-to="1"  aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#consoleCarousel" data-bs-slide-to="2" className="active" aria-label="Slide 3"></button>
                  </div>
            
          </div>
        </div>
      </div>
      <button className="carousel-control-prev left-icon" type="button" data-bs-target="#consoleCarousel" data-bs-slide="prev">
        
        <img src={lefticon} alt="" className='d-none d-md-block' style={{width:'48px', height: '48px'}}/>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next right-icon" type="button" data-bs-target="#consoleCarousel" data-bs-slide="next">
        <img src={righticon} alt="" className='d-none d-md-block' style={{width:'48px', height: '48px'}}/>
        
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
  )
}

export default Console