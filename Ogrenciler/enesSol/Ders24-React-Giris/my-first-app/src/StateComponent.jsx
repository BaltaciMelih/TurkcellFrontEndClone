// import React, { useState } from "react";
// let total = 0;

// export default function StateComponent() {
//   let [changeText, setChangeText] = useState(total);
//   const increaseButton = () => {
//     setChangeText((total += 1));
//   };
//   const decreaseButton = () => {
//     setChangeText((total -= 1));
//   };
//   return (
//     <div>
//       <div id="text">{changeText}</div>
//       <button onClick={increaseButton}>Arttır</button>
//       <button onClick={decreaseButton}>Azalt</button>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function StateComponent() {
  let [changeText, setChangeText] = useState(0);
  const increaseButton = () => {
    setChangeText((counter) => counter + 1);
  };
  const decreaseButton = () => {
    setChangeText((counter) => counter - 1);
  };
  return (
    <div>
      <div id="text">{changeText}</div>
      <div className="buttonWrapper">
        <button class="increaseBtn btn" onClick={increaseButton}>
          Arttır
        </button>
        <button class="decreaseBtn btn" onClick={decreaseButton}>
          Azalt
        </button>
      </div>
    </div>
  );
}
