import React from 'react'
import { Col } from "react-bootstrap";
import  "./Card.module.scss"

const Card = (props) => {
    const {url, imgSrc, size} = props;
  return (
    <Col md={size} clas>
       <a href={url}><img src={imgSrc} className="col-md-10" alt="İmage" ></img></a> 
    </Col>
  )
}

export default Card