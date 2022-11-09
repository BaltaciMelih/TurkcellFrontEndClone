// JAVASCRIPT GİRİŞ
// var a = 10;
// alert("JS Dünyasına hoş geldiniz");
// alert(a);

// console.log("Deneme Mesajı");

// VARIABLES - DEĞİŞKENLER

// number = sayısal ifadeler

// var firstNumber = 20;
// var secondNumber = 30;
// console.log(firstNumber + secondNumber);
// console.log(typeof firstNumber);

// String = Karakter Dizisi

// var userName = "Enes";
// console.log(userName);
// console.log(typeof userName);

// Boolean = Karşılaştırma Değerleri (True - False)
// var a = true;
// console.log(a);
// console.log(typeof a);

// null - Boş
// var b = null;
// console.log(b);
// console.log(typeof b);

// Object - Nesne
// var user = {
//   name: "Enes",
//   age: 25,
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name, user.age);

// Array - Diziler
// var users = ["varol", "erdem", "şafak", 10];
// console.log(users);
// console.log(typeof users);
// console.log(users[1]);

// Date Metodu
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// Function
// var merhaba = function () {
//   console.log("Merhaba");
// };

// merhaba();
// console.log(typeof merhaba);

// console.log(this);

// var a = 10;
// var b = a;
// console.log("1 - ", a, b); // 10 10 gelir
// a = 20;
// console.log("2 -", a, b); // 20 10 gelir

// var a = 10; // function scope
// let b = 20; // block scope
// const c = 30; // block scope
// global scope
// deneme();

{
  // blcok scope
  // var d = "merhaba";
  // console.log("1- ", d);
  // var b = 40;
  // console.log("1- ", c + b);
}

// function deneme() {
//   var b = 40;
//   console.log("1- ", c + b);
// }

// console.log("2", b);

// console.log("2- ", d);

// {
//   const d = "merhaba";
//   console.log("1- ", d);
// }

// console.log("2- ", d);

// Example
// function abc() {
//   let a = 5;
//   var b = 10;
// }

// {
//   let a = 5;
//   var b = 10;
// }

// abc();
// console.log(a, b);

// TİP DÖNÜŞÜMÜ - TYPE CONVERSION
// var a = "string";
// console.log(a);
// a = 5;
// console.log(a);

// var a = 5;
// console.log(a);
// console.log(typeof a);
// a = String(a);
// console.log(a);
// console.log(typeof a);

// var a = "5";
// console.log(a);
// console.log(typeof a);
// a = Number(a);
// console.log(a);
// console.log(typeof a);

// var a = "deneme";
// console.log(a);
// console.log(typeof a);

// a = Number(a);
// console.log(a);
// console.log(typeof a);

// var a = 5 + "2";
// console.log(a);
// console.log(typeof a);

// Operators
const a = 10;
const b = 4;
let s;

// s = a + b; // Toplama Operatörü
// s = a - b; // Çıkarma Operatörü
// s = a * b; // Çarpma Operatörü
// s = a / b; // Bölme Operatörü
// s = a % b; // Mod Operatörü

// s = Math.PI;
// s = Math.PI.toFixed(2);
// s = Number(Math.PI.toFixed(2));
// s = Math.round(a / b); YUVARLAMA
// s = Math.ceil(a / b); ÜSTE YUVARLAMA
// s = Math.floor(a / b); // AŞAĞI YUVARLAR
// s = Math.sqrt(16);
// s = Math.pow(4, 3);
// s = Math.random();
// s = 100 * Math.random();
// s = Math.floor(100 * Math.random());
// s = Math.floor(Math.random() * 80 + 20);

// console.log(s);

// STRING METODLARI
// let value;
// const firstName = "Enes";
// const lastName = "Söl";
// const department = "Yazılım";
// const salary = "5000";

// value = firstName + " " + lastName;
// value = firstName;
// value += " " + lastName;
// value = firstName.length;
// value = firstName.toLowerCase();
// value = firstName.toUpperCase();
// value = firstName[0];
// value = firstName[firstName.length - 1];
// value = firstName.indexOf("e");
// value = firstName.indexOf("t");
// value = firstName.includes("t");
// value = firstName.includes("e");
// value = firstName.concat(" ", lastName, " Deneme");
// value =
//   "isim: " +
//   firstName +
//   "\nSoyisim: " +
//   lastName +
//   "\nMaaş: " +
//   salary +
//   "\nDepartment: " +
//   department;

// Template Literal
// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Maaş: ${salary}
// Department: ${department}`;

// value =
//   "<ul>" +
//   "<li>" +
//   firstName +
//   "</li>" +
//   "<li>" +
//   "lastName" +
//   "</li>" +
//   "</ul>";

// value = `
// <ul>
//   <li>${firstName}</li>
//   <li>${lastName}</li>
//   <li>${salary}</li>
//   <li>${department}</li>
// </ul>`;

// document.body.innerHTML = value;

// console.log(value);

// Array Özellikleri
// let value;
// const numbers = [45, 78, 34, 79, 5];
// const lang = ["Python", "C++", "Javascript"];

// value = numbers.length;
// value = numbers[3];
// value = numbers[numbers.length - 1];
// numbers.push(200);
// value = numbers;
// value = numbers.indexOf(5);
// value = numbers.includes(5);
// value = numbers.includes(52);
// numbers.pop();
// numbers.shift();
// numbers[1] = 3;
// value = numbers.sort();
// value = numbers.sort().reverse();
// value = numbers.sort(function (x, y) {
//   return y - x;
// });

// console.log(numbers);

// Obje Özellikleri
// let value;
// const user = {
//   name: "Enes Söl",
//   age: 25,
//   email: "sol.aenes@yandex.com",
//   langs: ["Python", "English", "Javascript"],
//   address: {
//     city: "Bursa",
//     street: "Yıldırım",
//   },
//   work: function () {
//     console.log("Çalışıyor");
//   },
// };

// value = user.address.city;
// value = user.work();
// value = user["name"];

// console.log(value);
// console.log(typeof value);

// ZAMAN OBJESİ
let value;

let now = new Date();

// value = now.getFullYear();
// value = now.getMonth();
// value = now.getDay();
// value = now.getDate();
value = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;

console.log(value);
