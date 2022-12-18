import React from 'react'
import Button from 'react-bootstrap/Button';
import "./register.scss"
const Buttons = (props) => {
  return (
    <Button variant="secondary" className='rounded-0 text-white register fw-bold'>{props.text}</Button>
  )
}

export default Buttons