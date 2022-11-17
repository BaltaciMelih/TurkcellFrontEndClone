'use strict';
// Arrow function will actully not work as a function constructor.(This keyword...)

const Person = function (firstName, birthYear) {
  // Instance properties...
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this... (BAD PRACTISE) -> SOLVE : Protoype Inheritance...
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log();

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person); // Check jonas is instance..

// 1. New {} is created
// 2. Function is called, this = {};
// 3. {} linked to prototype
// 4. function automatically return {}

// ---------------------- PROTOTYPES ------------------------

Person.prototype.calcAge = function () {
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
console.log(jonas.hasOwnProperty('species'));
