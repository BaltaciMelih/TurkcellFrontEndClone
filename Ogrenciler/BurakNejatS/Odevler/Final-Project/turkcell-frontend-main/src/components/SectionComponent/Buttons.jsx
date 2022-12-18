import React from 'react'
import "../SectionComponent/button.css"

export default function Buttons(props) {
  return (
    <>
    <div className="button1">
       <button className="buttonGlobal" type='button'> {props.text}</button>
       </div></>
  )
}
