import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function AddUser() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('https://northwind.vercel.app/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setCategories(data);
          setLoading(false);
        }, 2000);
      });
  };

  const removeData = (id) => {
    let options = {
      method: 'DELETE',
    };
    fetch('https://northwind.vercel.app/api/categories/' + id, options)
      .then((res) => res.json)
      .then((data) => {
        let newCategoryList = categories.filter((ctg) => ctg.id !== id);
        setCategories(newCategoryList);
      });
  };

  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <h1>Datas</h1>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Description</td>
                <td>Id</td>
              </tr>
            </thead>
            <tbody>
              {categories &&
                categories.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.id}</td>
                      <td>
                        <button onClick={() => removeData(item.id)}>Remove</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default AddUser;
