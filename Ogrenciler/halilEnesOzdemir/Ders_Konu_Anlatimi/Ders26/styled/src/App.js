import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([
    {
      name: 'Egehan',
      age: 45,
      note: 90,
    },
    {
      name: 'Süleyman',
      age: 25,
      note: 90,
    },
    {
      name: 'Halil',
      age: 15,
      note: 90,
    },
    {
      name: 'Mustafa',
      age: 15,
      note: 80,
    },
    {
      name: 'Varol',
      age: 15,
      note: 100,
    },
  ]);

  const getStatus = (item) => {
    if (item.note <= 40) {
      return 'low';
    }
    if (item.note <= 60) {
      return 'middle';
    }
    if (item.note <= 80) {
      return 'high';
    }
  };
  return (
    <div className='App'>
      {user.map((item, index) => {
        return <div></div>;
      })}
    </div>
  );
}

export default App;
