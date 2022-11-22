// // // Object Literal
// // const person1 = { 
// //     name: "Mustafa",
// //     aga: 25,
// //     showInfo: function(){
// //         console.log("bilgiler gösteriliyor");
// //     }
// // }

// // const person2 = {
// //     name: "Ahmet",
// //     aga: 16,
// //     showInfo: function(){
// //         console.log("bilgiler gösteriliyor");
// //     }
// // };

// // Yapıcı fonksiyon yapıp o fonksiyondan türetmemiz daha iyi olur

// const date = new Date() // gibi

// // Yapıcı Fonksiyon - Constructor

// function Employee(name, age, salery){
//     this.name = name;
//     this.age = age;             // this nedir ?????????
//     this.salery = salery;
//     // this.showInfo = function(){
//     //     console.log("bilgiler gösteriliyor");
//     // }
//     // this.toString = function (){ // toString Ezmiş olduk.
//     //     console.log(`
//     //     isim: ${this.name}
//     //     yaş: ${this.age}
//     //     maaş: ${this.salery}
//     //     `);
//     // }
// }

// Employee.prototype.showInfos = function(){  //employenin prorotypena sgowInfos verdik !!!!! önemli
//     console.log(`
//     isim: ${this.name}
//     yaş: ${this.age}
//     maaş: ${this.salery}
//     `);
//      }

// const person1 = new Employee("Mustafa", 25, 7500);
// const person2 = new Employee("Ramazan", 16, 3000);

// console.log(person1);
// // person1.toString();
// // person2.toString();

// person1.showInfos();

// // objectten kalıtım alıp person1 ve person2 olarak nesne türetiyoruz.
// // üretilen objectlerden tekrar yapıcı fonksiyon üretip kalıtım alıp nesne türetebiliriz.


const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null