import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function EffectSample1() {
  const [sayac, setSayac] = useState(0);

  useEffect(() => {
    console.log('Bu kod satırı sadece component yüklendiğinde çalışır.');
  }, []);

  // Maliyetli işlem...

  return (
    <>
      <h1>{sayac}</h1>
      <button onClick={() => setSayac(sayac + 1)}>Arttır</button>
    </>
  );
}

export default EffectSample1;
