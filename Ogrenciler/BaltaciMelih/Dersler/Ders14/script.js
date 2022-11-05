// Karşılaştırma Operatörleri

// == Eşittir --->
// (a = 10), (b = 20);
// console.log(a == b);

// === Hem türü hem de değeri eşittir.
// (a = "20"), (b = 20);
// console.log(a === b);

// != Eşit değildir.
// (a = 10), (b = 20);
// console.log(a != b);

// !== Hem türü hem değeri eşit değildir.
// (a = 10), (b = 20);
// console.log(a !== b);

// < Küçüktür
// > Büyüktür
// <= Küçük Eşit
// >= Büyük Eşit

// And Operatörü &&
// console.log((2 == 2) && ("Melih" == "Css"));

// Or Operatörü ||
// console.log((2 == 2) || ("Melih" == "Css"));

// Koşulllar
// a = 20;
// b = 30;
// if (a == b) {
//     console.log("if çalıştı.")
// }
// else {
//     console.log("if çalışmadı")
// }

// let a = 30;
// let b = 20;
// if (a < b) {
//     console.log("a b den küçük")
// }
// else if(a == b) {
//     console.log("a b ye eşit")
// }
// else {
//     console.log("a b den büyük")
// }

// Switch Case

// const process = 3;

// switch (process) {
//     case 1:
//         console.log("seçim 1");
//         break;
//     case 2:
//         console.log("seçim 2");
//         break;
//     case 3:
//         console.log("seçim 3");
//         break;
//     case 4:
//         console.log("seçim 4");
//         break;
//     default:
//         console.log("Geçersiz İşlem");
// }


// let sayi = prompt("bir sayı giriniz.");

// if (sayi % 2 == 0) {
//     console.log("çift");
// }
// else {
//     console.log("tek");
// }


// Fonksiyonlar

// function merhaba() {
//     console.log("merhaba");
// }
// merhaba();

// function user(name, age) {
//     console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user("Melih", 100);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//     console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user("Melih");

// function square(x) {
//     return x * x;
// }

// let b = square(3) + 1;
// console.log(b);

// const database = {
//     host: "localhost",
//     add: function () {
//         console.log("Eklendi");
//     },
//     get: function () {
//         console.log("Veri Alındı");
//     },
//     update: function () {
//         console.log("Veri Güncellendi");
//     },
//     delete: function () {
//         console.log("Veri Silindi");
//     }
// }

// console.log(database.host);
// database.add();
// database.delete();


// const kare = function (x) {
//     return x * x;
// };
// console.log(kare(3));


// Arrow Function
// const kare = (x) => x * x;
// console.log(kare(3));


// Loops - Döngüler

// while döngüsü

// let i = 0;
// while (i < 10) {
//     console.log(`Deneme ${i}`);
//     i++ // i=i+1
// }

// let i = 0;
// while (i < 10) {

//     if (i == 3 || i == 5) {
//         i++;
//         continue;
//     }
//     console.log(`Deneme ${i}`);
//     i++
// }


// do while döngüsü

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 1);

// for döngüsü

// const langs=["Python", "C#", "Javascript", "Java"]

// for (let i = 0; i < langs.length; i++){
//     console.log(langs[i]);
// }

// Array map()

// const langs=["Python", "C#", "Javascript", "Java"]

// langs.map(function (lang) {
//     console.log(lang);
// });


// Faktöriyel
//  let sayi = prompt("Lütfen bir sayı giriniz.");
    
//  let sonuc = sayi;
//     for(let i = sayi-1; i >= 1; i--){
//         sonuc= sonuc * i;
//     }
//     console.log(sonuc);


// Mükemmel Sayi

let sayi = prompt("Sayi Giriniz");
let toplam = 0;
for (let i = 1; i < sayi; i++){
    if (sayi % i == 0)
        toplam = toplam + i;
}
if (toplam == sayi)
    console.log(sayi + " mükemmel sayidir");
else
    console.log(sayi + " mükemmel sayi değildir");


    