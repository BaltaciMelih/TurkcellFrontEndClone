import React from 'react'
import './games.scss'
import Register from "../Register/Register"
import image1 from "../../Images/image-1.png"
import image2 from "../../Images/image-2.png"
import image3 from "../../Images/image-3.png"
import image4 from "../../Images/image-4.png"
import image5 from "../../Images/image-5.png"
import image6 from "../../Images/image-6.png"
import image7 from "../../Images/image-7.png"
import image8 from "../../Images/image-8.png"
import image9 from "../../Images/image-9.png"
import image10 from "../../Images/image-10.png"
import image11 from "../../Images/image-11.png"
import image12 from "../../Images/image-12.png"
function gamesSection() {

    const Images1 = [
        { img: image1 },
        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image5 },
        { img: image6 }
    ]
    const Images2 = [
        { img: image7 },
        { img: image8 },
        { img: image9 },
        { img: image10 },
        { img: image11 },
        { img: image12 }
    ]
    return (
        <div className='bg-dark'>
            <div className='d-flex justify-content-center'>
                <h2 className='text-secondary text-center fw-bold'>Choose the game you want to play</h2>
            </div>
            <div className="container">
                <div className="d-flex p-20 flex-wrap">
                    {Images1.map((item, index) => {
                        return (
                            <div key={index} className='col-6 col-md-2 card-padding'>
                                <img src={item.img} className="games-img"/>
                            </div>
                        )
                    })}
                </div>
                <div className=' d-none d-md-block'>
                <div className="d-flex p-20 flex-wrap">
                    {Images2.map((item, index) => {
                        return (
                            <div key={index} className='col-6 col-md-2 card-padding'>
                                <img src={item.img} className="games-img"/>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
            <div className="d-flex justify-content-center p-button">
                <Register text="SEE ALL GAMES"/>
            </div>
        </div>
    )
}

export default gamesSection