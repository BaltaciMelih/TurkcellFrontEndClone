//ödev2 2 fazdan oluşacak 1. aşama bugünkü dersteki prototiplerin kulanımından
//2. fazı da pzt class haliyle yapılacak.

//object literal
// const person1 = {
//   name: "varol",
//   age: 36,
//   showInfo: function () {
//     console.log("bilgiler gösteriliyor...");
//   },
// };

// const person2 = {
//   name: "okan",
//   age: 20,
//   showInfo: function () {
//     console.log("bilgiler gösteriliyor...");
//   },
// };

// const date = new Date(); //buradaki date bir yapıcı fonksiyon içerisindeki constructor sayesinde date diye bir obje tanımlanmş olur;


//YAPICI FONKSİYON - CONSTRUCTOR ---
function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.showInfo = function () {
    console.log("bilgiler gösteriliyor...");
  }; 
  this.toString = function () { //kalıtım olarak alınan toString override edilebilir
    console.log(`
    isim: ${this.name}
    yaş: ${this.age}
    maaş: ${this.salary}`);
  }
}
  //tek bir yerde oluşturup prototip olarak kullanılabişlir

const person1 = new Employee("varol", 36, 25000);
const person2 = new Employee("tuğçe", 22, 15000);
const person3 = new Employee("Bilgehan", 20, 15000);

person1.toString();