import React from 'react';

// Bir child component bir üst componentinden veri alıyor.
const ProductDetail = (props) => {
  return (
    <>
      <div>Product Detail Page</div>
      <div>
        <p>Name:{props.name}</p>
        <p>Description:{props.description}</p>
        <p>Price:{props.price}</p>
      </div>
    </>
  );
};

export default ProductDetail;
