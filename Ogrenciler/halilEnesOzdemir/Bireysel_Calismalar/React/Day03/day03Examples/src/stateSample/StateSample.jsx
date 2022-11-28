import { useState } from 'react';

function StateSample() {
  /*   let name = 'Halil';
  const changeName = () => {
    name = 'Varol';
  }; */
  // Fonksiyon çalışıyor fakat render etmiyor... HMM...

  // Name değişkenin adı, setName değişkeni değiştirecek olan metod, 'Halil' name'in default değeri...
  const [name, setName] = useState('Halil');
  // Setname yaptığım anda bu fonksiyon render olacak, bir kez daha çalışacak...

  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => setName('Mehmet')}>Change Name</button>
    </>
  );
}

export default StateSample;
