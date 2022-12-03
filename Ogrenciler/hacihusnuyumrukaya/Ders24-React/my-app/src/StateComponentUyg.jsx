import React, { useState } from "react";
let i=0;
export default function StateComponentUyg() {

    const [count,setCount]=useState(0);
    return (
      <div>
        <div>{count} </div>
        <button onClick={() => setCount(count + 1)}>+ </button>
        <button onClick={() => setCount(count - 1) }>-</button>
        <button onClick={() => setCount( 0)}>  sıfırla </button>
      </div>
    );
}
