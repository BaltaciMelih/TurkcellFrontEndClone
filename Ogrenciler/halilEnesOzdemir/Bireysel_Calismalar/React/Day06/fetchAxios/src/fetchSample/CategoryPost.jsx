import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function CategoryPost() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('https://northwind.vercel.app/api/categories')
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  const addNewCategory = () => {
    let newCategory = {
      name: 'Yemek',
      description: 'İmamBayıldı',
    };

    fetch('https://northwind.vercel.app/api/categories', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  // const addNewData

  return (
    <>
      <h1>Categories</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          {category &&
            category.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.id}</td>
                </tr>
              );
            })}
          <tr>
            <td>
              <button onClick={addNewCategory}>Add Category</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CategoryPost;
