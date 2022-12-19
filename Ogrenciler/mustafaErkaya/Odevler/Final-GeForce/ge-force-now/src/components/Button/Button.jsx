import React from 'react'
import './Button.scss';



const Button = (props) => {
  return (
    <button type={props.submit} className={`btn-component btn px-4 ${props.type==='secondary' ? 'btn-outline-success text-success'  :  'btn-success text-white'}`}>{props.text}</button>
  )
}

export default Button