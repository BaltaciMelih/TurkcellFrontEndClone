// Karşılaştırma Operatörleri

// == Eşittir ===> a=10, b=20 ==> a == b ==> false
// a = 10, b = 20; True
// (a = "20"), (b = 20); True
// (a = "20"), (b = 20);
// console.log(a === b);
// === Hem Türü Hem De Değeri eşittir.

// != Eşit Değildir
// (a = "20"), (b = 21);
// console.log(a != b);

// !== Hem Türü Hem De Değeri Eşit Değildir
// (a = 20), (b = 21);
// console.log(a !== b);

// And Operatörü &&
// console.log(2 == 2 && "Varol" == "Javascript");
// console.log(2 == 2 && "Varol" == "Varol");

// Or Operatörü ||
// console.log(2 == 2 || "Varol" == "Javascript");
// console.log(2 == 3 || "Varol" == "Varsol");

// Koşullar
// a = "20";
// b = 20;

// if (a === b) {
//   console.log("If Çalıştı");
// } else {
//   console.log("If Çalışmadı");
// }

// let a = 30;
// let b = 20;

// if (a < b) {
//   console.log("a b'den küçük");
// } else if (a == b) {
//   console.log("a b'ye eşit");
// } else {
//   console.log("a b'den büyük");
// }

// Switch Cases

// const process = 32;

// switch (process) {
//   case 1:
//     console.log("Seçim 1");
//     break;
//   case 2:
//     console.log("Seçim 2");
//     break;
//   case 3:
//     console.log("Seçim 3");
//     break;
//   case 4:
//     console.log("Seçim 4");
//     break;
//   default:
//     console.log("Geçersiz İşlem");
// }

// PROMPT

// let sayi = prompt("Bir sayı giriniz");

// if (sayi % 2 === 0) {
//   console.log("Sayı Çift");
// } else {
//   console.log("Sayı tek");
// }

// Fonksiyonlar
// merhaba();

// function merhaba() {
//   console.log("Merhabalar Efendim");
// }

// merhaba();
// merhaba();

// function user(name, age) {
//   console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user("Enes", 25);
// user("Han", 22);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user("Enes");

// return
// function square(x) {
//   return x * x;
// }

// let a = square(3) + 1;
// console.log(a);

// const database = {
//   host: "localhost",
//   add: function () {
//     console.log("Eklendi");
//   },
//   get: function () {
//     console.log("Veri alındı");
//   },
//   update: function () {
//     console.log("Veri güncellendi");
//   },
//   delete: function () {
//     console.log("Veri silindi");
//   },
// };

// console.log(database.host);
// database.add();
// database.delete();

// const kare = function (x) {
//   return x * x;
// };

// console.log(kare(3));

// Arrow Function
// const kare = (x) => x * x;
// console.log(kare(3));

// Loops

// While

// let i = 0;
// while (i < 10) {
//   console.log(`Deneme ${i}`);
//   i++; // i = i+1
// }

// let i = 0;
// while (i < 10) {
//   if (i == 3 || i == 5) {
//     i++;
//     continue;
//   }
//   console.log(`Deneme ${i}`);
//   i++; // i = i+1
// }

// Do While loop
// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// For Döngüsü

// const langs = ["Python", "C++", "Javascript", "C#"];

// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i]);
// }

// Array map() Example
// const langs = ["Python", "C++", "Javascript", "C#"];

// langs.map(function (Lang) {
//   console.log(Lang);
// });

// let sayi = prompt("Lütfen bir sayı giriniz: ");
// let sonuc = 1;

// for (let i = 2; i <= sayi; i++) {
//   sonuc = sonuc * i;
// }
// console.log(sonuc);

// let sayi = prompt("Lütfen bir sayı giriniz: ");
let sayi = prompt("Lütfen bir sayı giriniz: ");
let toplam = 0;

for (var i = 1; i < sayi; i++) {
  if (sayi % i == 0) toplam += i;
}
if (toplam == sayi) console.log(sayi + " mükemmel bir sayidir");
