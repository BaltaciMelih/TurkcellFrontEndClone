import React from 'react';
import { useState } from 'react';

function InputCategoryPost() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addCategory = () => {
    let newCategory = {
      name: name,
      description: description,
    };
    let options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(newCategory),
    };
    fetch('https://northwind.vercel.app/api/categories', options)
      .then((res) => res.json())
      .then((data) => console.log('Data', data));
  };

  return (
    <>
      <h1>Add Category By Input</h1>
      <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <input type='text' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
      <button onClick={addCategory}>Add Category</button>
    </>
  );
}

export default InputCategoryPost;
