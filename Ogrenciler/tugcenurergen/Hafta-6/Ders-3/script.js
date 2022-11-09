// karşılaştırma operatörleri
// a = 10;
// b = 20;
// console.log(a==b);

// hem türü hem değeri eşittir
// console.log(a===b);

// console.log(a!=b)

// console.log(a!==b);

// koşullar

// a = 20;
// b = 20;

// if (a === b) {
//   console.log("çalıştı");
// } else {
//   console.log("çalışmadı");
// }

// let sayi = prompt("sayı giriniz");
// if(sayi % 2 == 0){
//     console.log("sayı çift");
// }else if(sayi % 2 == 1){
//     console.log("sayı tek");
// }else{
//     console.log("geçersiz");
// }

//fonksiyonlar

// function merhaba(){
//     console.log("merhaba");
// }
// merhaba();
// merhaba();

// user = (name, age) =>{
//     console.log(`isim: ${name} \n Yaş: ${age}`);
// }

// user("tuğçe", 22);

// function square(x){
//     return x*x;
// }

// let a = square(2) + 1 ;
// console.log(a);

// const database = {
//     host: "localhost",
//     add: function(){
//         console.log("eklendi");
//     },

//     get: function(){
//         console.log("alındı");
//     },

//     update: function(){
//         console.log("güncellendi");
//     },

//     delete: function(){
//         console.log("silindi")
//     },
// };
// console.log(database.host);
// database.add();

// const kare = function(x){
//     return x*x;
// }

//while döngüsü
// let i = 0
// while(i<20){   //20 kere deneme yazar
//     console.log("deneme")
//     i++;  // i = i + 1;
// }

// let j = 0
// while(j<10){

//     if(j == 3 || j == 5){
//         j++;
//         continue;  //aşağıdan devam etme döngüye dön
//     }
//     console.log(j);
//     j++;
// }
// 3 ve 5'i yazdırmadan 0 1 2 4 6 7 8 9 yazdırır.

// do while şart sağlanmasa da en az bir kere çalışması isteniyorsa
// let i = 0
// do{
//     console.log(i);
//     i++;
// }while(i<10)

//for döngüsü

// const langs = ["javascript", "python", "C++", "C#"];
// for (let i = 0; i < langs.length; i++) {
//     console.log(langs[i]);
// }

// //map'in performansı for'a göre daha iyidir

// langs.map(function(lang){
//     console.log(lang);
// });

// let sayi = prompt("sayı giriniz");
// let result = 1;
// for (let i = 1; i <= sayi; i++) {
//   result = result * i;
// }
// console.log(result);


