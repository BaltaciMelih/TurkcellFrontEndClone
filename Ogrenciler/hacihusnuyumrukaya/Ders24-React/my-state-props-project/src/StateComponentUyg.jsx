import React, { useState,useEffect,useRef } from "react";
export default function StateComponentUyg() {

    const [count,setCount]=useState(0);
    const [renk,setColor]=useState("blue");;
    const colorChanged=useRef(null);
    useEffect(()=>{
      console.log(count)
    });
    const changeds=()=>{
      document.body.style.backgroundColor=colorChanged.current.value;
      setColor(()=>colorChanged.current.value)
    }
    return (
      <div>
        <div className="text-center">
          <p>Renk ismi giriniz.</p>
          <input type="text" ref={colorChanged}  onChange={changeds} />
          <p>{renk}</p>
        
        <div>{count} </div>
        <button onClick={() => setCount(count + 1)}>+ </button>
        <button onClick={() => setCount(count - 1) }>-</button> 
        <button onClick={() => setCount( 0)}>  sıfırla </button>  

        </div>
      </div>
    );
}
