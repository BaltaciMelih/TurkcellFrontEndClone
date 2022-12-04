import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  let navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Unit Price</td>
            <td>Details</td>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={'/products/' + item.id}> {item.name}</Link>
                  </td>
                  <td>{item.unitPrice}</td>
                  <td>
                    <button onClick={() => goToDetail(item.id)}>Go To Detail</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default ProductList;
