import React, { useState } from "react";

export default function StateComponent() {
  let [changeText, setChangeText] = useState("Erdem");
  const changeButton = () => {
    console.log(changeText);
    setChangeText("Deneme");
    console.log(changeText);
    console.log(setChangeText);
  };
  return (
    <div>
      <div id="text">{changeText}</div>
      <button onClick={changeButton}>Tıkla</button>
    </div>
  );
}
