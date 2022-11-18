// // Object Literal
// const person1 = {
//     name: "Batuhan",
//     age: 23,
//     showInfo: function(){
//         console.log("Bilgiler Gösteriliyor...")
//     }
// };
// const person2 = {
//     name: "Gülfem",
//     age: 23,
//     showInfo: function(){
//         console.log("Bilgiler Gösteriliyor...")
//     }
// };

// const date = new Date() 

// YAPICI FONKSİYONLAR - Constructor

function Employee(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    // this.showInfo = function(){
    //     console.log("Bilgiler Gösteriliyor...")
    // };
    this.toString = function() {
        console.log(`
        İsim: ${this.name}
        Yaş: ${this.age}
        Maaş: ${this.salary}
        `);
    }
}

Employee.prototype.showInfos = function(){
    console.log(`
    İsim: ${this.name}
    Yaş: ${this.age}
    Maaş: ${this.salary}
    `);
     };

const person1= new Employee("Batuhan", 23, 12000);
const person2= new Employee("Gülfem", 23, 12500);

// console.log(person1);

console.log(person1);
// person1.toString();
person1.showInfos();
