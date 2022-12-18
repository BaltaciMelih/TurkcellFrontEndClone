import React from 'react'
import NewsLogo from '../../photos/slider2.png'
import './slidertwo.scss'
import Banner from '../../photos/modules-banner-5-logo.png'
import ResponsiveBanner from '../../photos/modules-mobile-banner-2-logos.png'
const SliderTwo = () => {
  return (
    <>
    <div className='container-fluid bg-dark'>
            <div id="carouselcontentgameplus" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators displayfeature">
                    <button type="button" data-bs-target="#carouselcontentgameplus" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselcontentgameplus" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselcontentgameplus" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner py-5">
                    <div className="carousel-item active">
                        <div className='row d-flex justify-content-center'>
                            <div className='col-9 mx-5 mt-2 d-flex flex-row slidertext carousel__border p-0'>
                                <img src={NewsLogo} className='img-fluid' alt='first' />
                                <div className='mx-3 mt-5 py-2 slidertext'>
                                    GAMING - AUGUST 11,2020
                                    <h2 className='mb-3 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo architecto ab, facilis repellendus asperiores!</h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam possimus distinctio numquam perspiciatis sunt maiores cupiditate cum aliquid, libero recusandae iste inventore? Similique accusantium in molestias cumque ullam, vitae maiores possimus officia nam quos corporis quis id, voluptatibus, enim asperiores atque excepturi laborum. Ea doloremque quidem ducimus est explicabo?
                                    <div className='mt-3 d-block'>
                                        <button className='button3'>READ MORE</button> 
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    
                    </div>
                    <div className="carousel-item">
                    <div className='row d-flex justify-content-center'>
                            <div className='col-9 mx-5 mt-2 d-flex flex-row slidertext carousel__border p-0'>
                                <img src={NewsLogo} className='img-fluid' alt='first' />
                                <div className='mx-3 mt-5 py-2 slidertext'>
                                    GAMING - AUGUST 11,2020
                                    <h2 className='mb-3 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo architecto ab, facilis repellendus asperiores!</h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam possimus distinctio numquam perspiciatis sunt maiores cupiditate cum aliquid, libero recusandae iste inventore? Similique accusantium in molestias cumque ullam, vitae maiores possimus officia nam quos corporis quis id, voluptatibus, enim asperiores atque excepturi laborum. Ea doloremque quidem ducimus est explicabo?
                                    <div className='mt-3 d-block'>
                                        <button className='button3'>READ MORE</button>  
                                    </div>  
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className='row d-flex justify-content-center'>
                            <div className='col-9 mx-5 mt-2 d-flex flex-row slidertext carousel__border p-0'>
                                <img src={NewsLogo} className='img-fluid' alt='first' />
                                <div className='mx-3 mt-5 py-2 slidertext'>
                                    GAMING - AUGUST 11,2020
                                    <h2 className='mb-3 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo architecto ab, facilis repellendus asperiores!</h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam possimus distinctio numquam perspiciatis sunt maiores cupiditate cum aliquid, libero recusandae iste inventore? Similique accusantium in molestias cumque ullam, vitae maiores possimus officia nam quos corporis quis id, voluptatibus, enim asperiores atque excepturi laborum. Ea doloremque quidem ducimus est explicabo?
                                    <div className='mt-3 d-block'>
                                        <button className='button3'>READ MORE</button>  
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev displayarrow" type="button" data-bs-target="#carouselcontentgameplus" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next displayarrow" type="button" data-bs-target="#carouselcontentgameplus" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
    </div>
    <div className='banner'>
        <img src={Banner} className='img-fluid banner__pc' alt='bannerpc'/>
    </div>
    <div className='banner__mobile'>
        <img src={ResponsiveBanner} className='img-fluid bannermobile__size' alt='bannermobile'/>
    </div>
    </>
    
  )
}

export default SliderTwo