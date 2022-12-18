import ReactDOM from "react-dom";
import React from 'react'

const Portal = (target, text) => {
  return (
    ReactDOM.createPortal(<div>Merhaba benim adim Portal, bulundugum konum {text}</div>, target)
    
  )
}

export default Portal