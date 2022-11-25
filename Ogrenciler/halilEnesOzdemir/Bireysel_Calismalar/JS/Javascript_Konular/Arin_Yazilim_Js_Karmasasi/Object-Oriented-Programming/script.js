'use strict';
// Arrow function will actully not work as a function constructor.(This keyword...)

/* const Person = function (firstName, birthYear) {
  // Instance properties...
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this... (BAD PRACTISE) -> SOLVE : Protoype Inheritance...
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
}; */

/* const jonas = new Person('Jonas', 1991);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person);  */ // Check jonas is instance..

// 1. New {} is created
// 2. Function is called, this = {};
// 3. {} linked to prototype
// 4. function automatically return {}

// ---------------------- PROTOTYPES ------------------------

/* Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); */

// -------------PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS -----------
/* console.log(jonas.__proto__);
// Object Prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 6, 7, 4, 9, 3]; */ // new Array = [];
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// However, extending the prototype of a built-in object generally is not good idea

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// Coding Challenge #1

/* 
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
