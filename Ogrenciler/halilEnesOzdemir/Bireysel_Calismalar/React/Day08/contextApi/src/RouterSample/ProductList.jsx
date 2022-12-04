import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../store/cartContext';

function ProductList() {
  const [products, setProducts] = useState([]);

  const { cart, setCart } = useContext(cartContext);

  let navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/products/${id}`);
  };

  const addToCart = (item) => {
    // Eğer ürün sepette varsa adedini bir arttırır, yoksa ürünü sepete ekler...

    let cartProduct = cart.find((q) => q.id == item.id);

    if (cartProduct) {
      cartProduct.quantity = cartProduct.quantity + 1;
      setCart([...cart]);
    } else {
      let newCartProduct = {
        id: item.id,
        name: item.name,
        price: item.unitPrice,
        quantity: 1,
      };
      setCart([...cart, newCartProduct]);
    }
  };

  const decreaseToCart = (item) => {
    // Eğer sepette ürün yoksa  zaten bu fonskiyon çalışmamalı...
    let cartProduct = cart.find((q) => q.id == item.id);

    if (cartProduct) {
      cartProduct.quantity = cartProduct.quantity - 1;

      if (cartProduct.quantity === 0) {
        let newCart = cart.filter((q) => q.id !== cartProduct.id);
        setCart(newCart);
      } else {
        setCart([...cart]);
      }
    }
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
                  <td>
                    <button onClick={() => decreaseToCart(item)}>-</button>
                    <button onClick={() => addToCart(item)}>+</button>
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
