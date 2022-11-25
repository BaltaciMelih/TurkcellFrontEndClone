//Class
// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   showInfo() {
//     //Prototype olur.New ile kullanabilirsin.
//     console.log(`

//         İsim:${this.name}
//         Yaş:${this.age}
//         Maaş:${this.salary}

//        `);
//   }
// }
const Emp1 = new Employee(Sinem, 26, 5000);
Emp1.showInfo();
//STATIC FUNCTION
class Mat {
  //static cub(x) bu fonksiyona new parametresiyle değişken yaratmadan class adıyla erişilir.
  cube(x) {
    //başına static yazarsın
    console.log(x * x * x);
  }
}
const mat = new Mat(); // bu elemanı yaratmadan dışardan erişebilmek için.
mat.cube(3);

//EXTEND

//SuperClass
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(`
   İsim:${this.name} 
   `);
  }
}
class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age); //miras aldığım parametreler.
    this.salary;
  }
}
