// Object Literal
// const person1 = {
//   name: "Varol",
//   age: 36,
//   showInfo: function () {
//     console.log("Bilgi gösteriliyor...");
//   },
// };
// const person2 = {
//   name: "Okan",
//   age: 20,
//   showInfo: function () {
//     console.log("Bilgi gösteriliyor...");
//   },
// };

// const date = new Date()

// Yapıcı Foknsiyon - Constructor

// function Employee(name, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
//   this.showInfo = function () {
//     console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age}
//     Maaş: ${this.salary}
//     `);
//   };
//   this.toString = function () {
//     console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age}
//     Maaş: ${this.salary}
//     `);
//   };
// }

// // Employee.prototype.showInfo = function () {
// //   console.log(`
// //     İsim: ${this.name}
// //     Yaş: ${this.age}
// //     Maaş: ${this.salary}
// //     `);
// // };

// Employee.prototype.toString = function () {
//   console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age}
//     Maaş: ${this.salary}
//     `);
// };

// function Person() {
//   this.salary = 5000;
// }

// // Object.prototype.showInfo = function () {
// //   console.log(`
// //     İsim: ${this.name}
// //     Yaş: ${this.age}
// //     Maaş: ${this.salary}
// //     `);
// // };

// Person.prototype = Object.create(Employee.prototype);

// // Person.prototype = Employee.prototype;

// const person3 = {
//   name: "Yaren",
//   age: 20,
//   salary: 4000,
//   showInfo: function () {
//     console.log("Bilgi gösteriliyor...");
//   },
// };

// const person4 = new Person();
// const person1 = new Employee("Varol", 36, 5000);
// // const person2 = new Employee("Bilgehan", 20, 10000);

// console.log(person1);
// // console.log(person2);
// // console.log(person3);
// // console.log(person4);

// person4.toString();

// // person1.toString();
// // person1.showInfo();
// // person2.showInfo();
// // person3.showInfo();
// // person1.toString();

// Class
// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   showInfo() {
//     console.log(`
//       İsim: ${this.name}
//       Yaş: ${this.age}
//       Maaş: ${this.salary}
//     `);
//   }
// }

// const Emp1 = new Employee("Varol", "37", 5000);

// Emp1.showInfo();
// console.log(Emp1);

// Static Functions
// class Mat {
//   static cube(x) {
//     console.log(x * x * x);
//   }
// }

// // const mat = new Mat();

// Mat.cube(3);

// Extend

// SuperClass, BaseClass
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;

//   }
//   showInfo() {
//     console.log(`
//       İsim: ${this.name}
//       Yaş: ${this.age}
//     `);
//   }

// }

// // Subclass, ChildClass
// class Employee extends Person {
//   constructor(name, age, salary) {
//     // this.name = name;
//     // this.age = age;
//     super(name, age);
//     this.salary = salary;
//   }
//   // Override
//   showInfo() {
//     console.log(`
//       İsim: ${this.name}
//       Yaş: ${this.age}
//       Maaş: ${this.salary}
//     `);
//   }
// }

// const emp = new Employee("Varol", 37, 5000);
// console.log(emp);
// emp.showInfo();
