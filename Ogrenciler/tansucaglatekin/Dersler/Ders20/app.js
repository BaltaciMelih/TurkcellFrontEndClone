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

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    // this.showInfo = function () {
    //   console.log(`
    //   İsim: ${this.name}
    //   Yaş: ${this.age}
    //   Maaş: ${this.salary}
    //   `)};
    // this.toString = function () {
    //   console.log(`
    //   İsim: ${this.name}
    //   Yaş: ${this.age}
    //   Maaş: ${this.salary}
    //   `);
    // };
  }
  
  // Employee.prototype.showInfo = function () {
  //   console.log(`
  //     İsim: ${this.name}
  //     Yaş: ${this.age}
  //     Maaş: ${this.salary}
  //     `);
  // };
  
  Employee.prototype.toString = function () {
    console.log(`
      İsim: ${this.name}
      Yaş: ${this.age}
      Maaş: ${this.salary}
      `);
  };
  
  function Person() {
    this.salary = 5000;
  }
  
  // Object.prototype.showInfo = function () {
  //   console.log(`
  //     İsim: ${this.name}
  //     Yaş: ${this.age}
  //     Maaş: ${this.salary}
  //     `);
  // };
  
  Person.prototype = Object.create(Employee.prototype);
  
  // Person.prototype = Employee.prototype;
  
  const person3 = {
    name: "Yaren",
    age: 20,
    salary: 4000,
    showInfo: function () {
      console.log("Bilgi gösteriliyor...");
    },
  };
  
  const person4 = new Person();
  const person1 = new Employee("Varol", 36, 5000);
  const person2 = new Employee("Bilgehan", 20, 10000);
  
  console.log(person1);
  // console.log(person2);
  // console.log(person3);
  // console.log(person4);
  
  person4.toString();
  
  // person1.toString();
  // person1.showInfo();
  // person2.showInfo();
  // person3.showInfo();
  // person1.toString();