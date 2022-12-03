import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function AddCategoryWithAxios() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addNewCategory = () => {
    let newCategory = {
      name: name,
      description: description,
    };

    axios
      .post('https://northwind.vercel.app/api/categories', newCategory)
      .then((res) => console.log('Axios response', res.data));
  };
  return (
    <>
      <div>
        <label>Name:</label>
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type='text' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <button onClick={() => addNewCategory()}>Add </button>
      </div>
    </>
  );
}

export default AddCategoryWithAxios;
