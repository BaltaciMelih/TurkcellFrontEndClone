import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../store/cartContext';

// Context  içerisindeki sepetteki ürünlerin listeleneceği sayfa...

function CartPage() {
  const { cart, setCart } = useContext(cartContext);

  const removeItem = (id) => {
    let newCart = cart.filter((q) => q.id != id);
    setCart(newCart);
  };

  return (
    <>
      <button onClick={() => setCart([])}>Remove All</button>
      <ul>
        {cart &&
          cart.map((item, index) => {
            return (
              <li key={index}>
                {item.name} - {item.price.toFixed(2)}* {item.quantity}
                <span style={{ fontWeight: 'bold' }}> = {item.price * item.quantity} </span>
                <button onClick={() => removeItem(item.id)}>Remove Item</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default CartPage;
