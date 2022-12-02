import State, { useState } from 'react';
import React from 'react';



export default function Deneme() {
  const [count,setCount]=useState(0);
  if(count===-1){alert("pozitif değer gir.")};
  return (
    <div><h1>sayaç</h1>
    <div className='container col-md-3 '>
    <div className='bg-success'>
    <p>{count} </p>
      <button onClick={() => setCount(count + 1)}>
        Arttır
      </button>
      <button onClick={() => setCount(count - 1) }>
        Azalt
      </button>
      <button onClick={() => setCount(count * 0)}>
        sıfırla
      </button>
    
      </div>
      </div>
    </div>
  )
}
