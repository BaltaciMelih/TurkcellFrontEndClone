import { useState } from 'react';

function InputStateSample() {
  let footballClubs = ['GS', 'FB', 'BJK', 'TS'];

  const [clubs, setClubs] = useState(footballClubs);
  const [name, setName] = useState('');

  const addClub = () => {
    setName('');
    setClubs([...clubs, name]);
  };

  const removeClubs = () => {
    setClubs([]);
  };

  return (
    <>
      <input type='text' value={name} placeholder='Football Clubs' onChange={(e) => setName(e.target.value)} />
      <button onClick={() => addClub()}>Add Club</button>
      <button onClick={() => removeClubs()}>Remove Clubs</button>

      <ul>
        {clubs.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default InputStateSample;
