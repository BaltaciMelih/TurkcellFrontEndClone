// Karşılaştırma Operatörleri

// == Eşittir ===> a=10,b=20 ==> a == b ==> false
// === Hem türü hemde değeri eşittir.
// != Eşit değildir.
// !== Hem türü hemde değeri eşit değildir.

// let sayi = prompt("Bir sayi giriniz.")

// if(sayi % 2 == 0){
//     console.log("Çift sayı")
// }
// else{
//     console.log("tek sayı")
// }

// // Fonksiyonlar

// function merhaba(){
//     console.log("Merhaba");
// }
// merhaba();
// merhaba();
// merhaba();

// function merhaba(){
//     console.log();
// }

// let i = 0;

// do{
//     console.log(`Deneme ${i}`);
//     i++;
// }
// while (i < 10);   

// let sayi = prompt("Faktöriyeli alınacak sayıyı giriniz:")

// var carp=1;
// for(var i=1; i<=sayi; i++)
// {
// carp=carp*i;
// }
// document.write("Sayının Faktoriyeli:",carp);


var i;
var sayi;
var toplam=0;
let sayi = prompt("Bir sayıyı giriniz:")
for(i=1; i<sayi; i++)
 {
      if (sayi%i==0)
      {
            toplam=toplam+i;      
      }
 }
 if (sayi==toplam)
 {
      document.write(sayi + " Sayısı Mükemmel Sayıdır");       
 }
 else
 {
      document.write(sayi + " Sayısı Mükemmel Sayı Değildir");       
 }