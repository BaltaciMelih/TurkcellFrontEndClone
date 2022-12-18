import React from 'react'
import { Col } from "react-bootstrap";

const GameList = (props) => {
  const {url, imgSrc, size} = props;
  return (
    <div>
      <Col md={size} clas>
       <a href={url}><img src={imgSrc} className="col-md-10" alt="İmage" ></img></a> 
    </Col>
    </div>
  )
}

export default GameList