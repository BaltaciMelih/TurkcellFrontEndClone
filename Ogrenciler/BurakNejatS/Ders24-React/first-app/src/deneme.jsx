import State, { useState } from 'react';
import React from 'react';



export default function Deneme() {
  const [count,setCount]=useState(0);
  return (
    <div><h1>sayaç</h1>
    <p>{count} </p>
      <button onClick={() => setCount(count + 1)}>
        Arttır
      </button>
      <button onClick={() => setCount(count - 1)}>
        Azalt
      </button>
      <button onClick={() => setCount(count * 0)}>
        sıfırla
      </button>
    
    
    </div>
  )
}


// export const Button = (props) => {
//   return (
//     <button onClick={() =>
//       props.sign == "+" ? props.updateCount(1) : props.updateCount(-1)} >
//       {props.sign}
//     </button>
//   );
// }