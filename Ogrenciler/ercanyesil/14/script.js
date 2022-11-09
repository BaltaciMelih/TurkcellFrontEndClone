// Karşılaştırma Operatörleri

// == Eşittir ===>
// (a = 10), (b = 20);
// (a = "20"), (b = 20);
// console.log(a == b);

// === Hem Türü Hemde değeri eşittir.
// (a = "20"), (b = 20);
// console.log(a === b);

// != Eşit Değildir
// (a = "20"), (b = 21);
// console.log(a != b);

// !== Hem Türü Hemde değeri eşit değildir.
// (a = "20"), (b = 20);
// console.log(a !== b);

// < Küçüktür
// > Büyüktür
// (a = 20), (b = 21);
// console.log(a < b);

// <= Küçük Eşit
// >= Büyük Eşit
// (a = 20), (b = 21);
// console.log(a >= b);

// And Operatörü &&
// console.log(2 == 2 && "Varol" == "Varol");

// Or Operatörü ||
// console.log(2 == 2 || "Varol" == "Python");

// Koşullar
// a = "20";
// b = 20;
// if (a === b) {
//   console.log("if Çalıştı");
// } else {
//   console.log("if çalışmadı");
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

// Switch Case

// const process = 3;

// switch (process) {
//   case 1 < process < 100:
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

// let sayi = prompt("Bir sayı giriniz.");

// if (sayi % 2 === 0) {
//   console.log("Girdiğiniz sayı çifttir");
// } else {
//   console.log("Girdiğiniz sayı tektir");
// }

// Fonksiyonlar

// function merhaba() {
//   console.log("Merhaba");
// }
// merhaba();

// function user(name, age) {
//   console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user("Varol Maksutoğlu", 36);
// user("Mertcan Moran", 20);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user("Varol");

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

// Loops - Döngüler

// while Döngüsü

// let i = 0;
// while (i < 10) {
//   console.log(`Deneme ${i}`);
//   i++; // i=i+1;
// }

// let i = 0;
// while (i < 10) {
//   if (i == 3 || i == 5) {
//     i++;
//     continue;
//   }
//   console.log(`Deneme ${i}`);
//   i++; // i=i+1;
// }

// do while döngüsü

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

// Array map()
// langs.map(function (lang) {
//   console.log(lang);
// });

// let sayi = prompt("Bir sayı girin");
// let sonuc = 1;
// for (let i = 2; i <= sayi; i++) {
//   sonuc = sonuc * i;
// }
// console.log(sonuc);   

// let sayi = prompt("Faktöriyeli alınacak sayıyı giriniz:")

// var carp=1;
// for(var i=1; i<=sayi; i++)
// {
// carp=carp*i;
// }
// document.write("Sayının Faktoriyeli:",carp);


// var i;
// var sayi;
// var toplam=0;
// let sayi = prompt("Bir sayıyı giriniz:")
// for(i=1; i<sayi; i++)
//  {
//       if (sayi%i==0)
//       {
//             toplam=toplam+i;      
//       }
//  }
//  if (sayi==toplam)
//  {
//       document.write(sayi + " Sayısı Mükemmel Sayıdır");       
//  }
//  else
//  {
//       document.write(sayi + " Sayısı Mükemmel Sayı Değildir");       
//  }