import React, { useState } from "react"



export default function Counter() {
    let [changeNumber, setChangeNumber] = useState(0);
function artırma () {
setChangeNumber (++changeNumber)

} 
function azaltma () {
    setChangeNumber (--changeNumber)
}
  return (
    <React.Fragment>
        <h1>{changeNumber}</h1>
        {/* <button onClick={()=>setChangeNumber(++changeNumber)}>Artırma</button> */}
        {/* <button onClick={()=>setChangeNumber(--changeNumber)}>Azaltma</button> */}
        <button onClick={()=>artırma()}>Artırma</button>
        <button onClick={()=>azaltma()}>Azaltma</button>
    </React.Fragment>
  )
}
