import React, { useState } from "react";

export default function StateComponent() {
  let [count, setCount] = useState(0);

  let Art = () => {
    setCount(count + 2);
  };
  let Azalt = () => {
    setCount(count - 2);
  };

  // setCount(() => {
  //   let fakt = () => {
  //     setCount(() => {
  //       let result = 1;
  //       for (var i = 2; i <= count; i++) {
  //         result = result * i;
  //       }
  //       return result;
  //     });
  //   };
  // });

  return (
    <div>
      <button onClick={Art}>Arttır</button>
      <button onClick={Azalt}>Azalt</button>
      <div>{count}</div>
      {/* // eslint-disable-next-line no-undef
      <button onClick={fakt}>Faktoriyel</button> */}
    </div>
  );
}
