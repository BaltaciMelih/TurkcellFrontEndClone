// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing module');

// addToCart('bread', 5);

// If i want to see this variables different name, we use 'main' as 'whatwewant'...
// console.log(totalPrice, totalQuantity);

// console.log(price, tq);
console.log('Importing module');

/* import * as ShoppingCart from './shoppingCart.js'; // Just like a class...
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq); */

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apples', 2);

console.log(cart);
