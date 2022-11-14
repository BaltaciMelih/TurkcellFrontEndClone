// Strict mode activated...
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :)');

// SyntaxError: Unexpected strict mode reserved word...
// const interface = 'Audio';

// FUNCTIONS

// function logger() {
//   console.log('My name is Halil');
// }

//calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// We didn't capture the value into any variable.

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// Actually console.log and Number is built-in functions in Javascript, doing its part...

// ************* Function Declarations vs. Expressions ***************

// Function declaration

// const age1 = calcAge1(1998);

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// console.log(calcAge1(1998));

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1998);
// console.log(age1, age2);

// ************* Arrow Functions ***************

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1998);

// Arrow Function
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1998, 'Halil'));
// console.log(yearUntilRetirement(1993, 'Murat'));
// console.log(yearUntilRetirement(1976, 'Yusuf'));

// *************  Functions Calling Other Functions ***************

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  // console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
