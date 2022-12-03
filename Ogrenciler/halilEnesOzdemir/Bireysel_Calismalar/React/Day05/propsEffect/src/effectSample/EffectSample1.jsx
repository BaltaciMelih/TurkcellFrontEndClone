import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function EffectSample1() {
  const [sayac, setSayac] = useState(0);
  const [sayac2, setSayac2] = useState(0);

  useEffect(() => {
    console.log('Bu kod satırı sadece component yüklendiğinde çalışır.');
  }, []);

  useEffect(() => {
    console.log('SAYAC 2 STATE ÇALIŞTI.');
  }, [sayac2]);

  // Maliyetli işlem...

  return (
    <>
      <h1>{sayac}</h1>
      <button onClick={() => setSayac(sayac + 1)}>Arttır</button>

      <h1>{sayac2}</h1>
      <button onClick={() => setSayac2(sayac2 + 1)}>Arttır</button>
    </>
  );
}

export default EffectSample1;
