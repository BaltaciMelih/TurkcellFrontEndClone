// const person1 = {
//     name: "Erdem",
//     age: 28,
//     showInfo: function () {
//         console.log("bilgi gösteriliyor...")
//     }
// };

// const person2 = {
//     name: "Atilla",
//     age: 38,
//     showInfo: function () {
//         console.log("bilgi gösteriliyor...")
//     }
// };

// const date = new Date() 

// yapıcı fonksiyon - constructor 

function Employee (name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    // this.showInfo = function () {
    //      console.log("bilgi gösteriliyor...")
    //      }
    // this.toString = function () {
    //     console.log(`
    //     İsim : ${this.name},
    //     Yas : ${this.age},
    //     Maaş : ${this.salary}
    //     `)
    // }
};

Employee.prototype.showInfo = function () {
       console.log(`
       İsim : ${this.name},
       Yas : ${this.age},
       Maaş : ${this.salary}
       `)
      }

const person1 = new Employee ("Erdem", 28, 5000);
const person2 = new Employee ("Atilla", 38, 25000);


console.log(person1);

person1.toString();
person1.showInfo()