import React from 'react'

const ReactFC = (props) => {
  return (
    <div>Bugün Reacta İlerliyorum <span style={props.style}>{props.status}</span></div>
  )
}

export default ReactFC