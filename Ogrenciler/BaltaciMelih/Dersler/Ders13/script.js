// Javascript Giriş
console.log("Javascript Giriş");

// Variables - Değişkenler

// number = sayısal ifadeler
// var firstNumber = 20;
// var secondNumber = 30;
// console.log(firstNumber + secondNumber);
// console.log(typeof firstNumber);

// String = Karakter Dizisi
// var userName = "Melih";
// console.log(userName);
// console.log(typeof userName);

// Boolean = Karşılaştırma İfadeleri
// var a = false;
// console.log(a);
// console.log(typeof a);

// null = boş
// var b = null;
// console.log(b);
// console.log(typeof b);

// Object = Nesne
// var user = {
//     name: "Melih",
//     age: 25
// };
// console.log(user);
// console.log(typeof user);
// console.log(user.name, user.age);

// Array = Diziler
// var users = ["ahmet", "melih", "baltacı", 100];
// console.log(users);
// console.log(typeof users);
// console.log(users[1]);

// Date Metodu
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// Fonksiyon
// var merhaba = function () {
//     console.log("merhaba");
// }
// console.log(merhaba);
// console.log(typeof merhaba);

// console.log(this);

// var a = 10;
// var b = a;
// console.log(a, b);
// a = 20;
// console.log(a, b);

// Scope
// var a = 10; // function scope
// let b = 20; // block scope
// const c = 30; // block scope
// deneme();
// {
//     var d = "merhaba";
//     // console.log(d);
// }
// // console.log(d);

// function deneme() {
//     var b = 40;
//     console.log(c + b);
// }
// console.log(b);

// Tip Dönüşümü

// var a = "string";
// console.log(a);
// a = 5;
// console.log(a);

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

// Operatörler

// const a = 10;
// const b = 4;
// let s;

// // s = a + b; //Toplama
// // s = a - b; //Çıkarma
// // s = a * b; //Çarpma
// // s = a / b; //Bölme
// // s = a % b; //MOD

// // s = Math.round(a / b);
// // s = Math.ceil(a / b);
// // s = Math.floor(a / b);
// // s=Math.PI
// // s = Math.PI.toFixed(2);
// // s = Number(Math.PI.toFixed(2));
// // s = Math.sqrt(16);
// // s = Math.pow(4, 3);
// s = Math.floor(100 * Math.random());
// console.log(s);

// String Metodları

let value;
const firstName = "Melih";
const lastName = "Baltacı";
const department = "Yazılım";
const salary = "1000";

// value = firstName + " " + lastName;
// value = firstName
// value += " " + lastName;

// value = firstName.length;
// value = firstName.toLowerCase();
// value = firstName.toUpperCase();
// value = firstName[0];
// value = firstName[firstName.length - 1];
// value = firstName.indexOf("i");
// value = firstName.includes("h");
// value = firstName.concat(" ", lastName, " Deneme");
// value = "İsim:" + firstName + "\nSoyisim: " + lastName + "\nMaaş: " + salary + "\nDepartman: " + department;

value = `
<ul>
    <li>${firstName}</li>
    <li>${lastName}</li>
    <li>${salary}</li>
    <li>${department}</li>
</ul>
`;
document.body.innerHTML = value;
value = console.log(value);
