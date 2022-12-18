import React from 'react'

export default function gameCard({img, alt}) {
  return (
    <div className="imgClass">
        <img className="game" src={img} alt={alt}/>
    </div>
  )
}
