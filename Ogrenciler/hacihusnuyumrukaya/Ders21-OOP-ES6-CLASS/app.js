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

// const Emp1 = new Employee("Hacı", "21", 5000);

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
 class Person {
   constructor(name, age) {
     this.name = name;
     this.age = age;

   }
   showInfo() {
     console.log(`
       İsim: ${this.name}
       Yaş: ${this.age}
     `);
   }

 }

 // Subclass, ChildClass
  class Employee extends Person {
   constructor(name, age, salary) {
     // this.name = name;
     // this.age = age;
     super(name, age);
     this.salary = salary;
   }
   // Override
   showInfo() {
     console.log(`
      İsim: ${this.name}
      Yaş: ${this.age}
       Maaş: ${this.salary}
     `);
   }
 }

const emp = new Employee("Hacı", 21, 5000);
 console.log(emp);
 emp.showInfo();
