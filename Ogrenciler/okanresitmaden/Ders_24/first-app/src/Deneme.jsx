
import React, { useState, useEffect } from 'react';

export default function Deneme() {
  const [sayi, setSayi] = useState(0)
  function arttir() {
    setSayi(sayi + 1)
    console.log(sayi);
  }
  function azalt() {
    setSayi(sayi - 1)
  }
  useEffect(() => {
    console.log('State değeri:', sayi)
  })
  return (
    <div>
      <button onClick={arttir}>+1</button>
      <button onClick={azalt}>-1</button>
      <p>{sayi}</p>
    </div>
  );
}

