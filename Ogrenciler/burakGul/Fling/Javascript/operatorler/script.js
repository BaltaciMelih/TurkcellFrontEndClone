// 1- Matematiksel Operatörler

var x = 10;
var y = 20;
var z = 10;

console.log(x+y);
console.log(x-y);
console.log(y/x);
console.log(x*y);
console.log(x*y+z);
console.log(x*(y+z));

x++;
x=x+1;

x--;
x=x-1;

// 2- Karşılaştırma Operatörleri

var sonuc = x>y;
console.log(sonuc);
console.log(x<y);
console.log(x>=z);
console.log(x==z);
console.log(x==="10");
console.log(x!=z);

// 3- Mantıksal Operatörler
// && (And) Operatörü
console.log(20>10) && (30<=20);
// || (Or) Operatörü
console.log(20>10) || (30<=20);
// ! (Not) Operatörü
console.log(!(x>z));

var a = prompt("sayı giriniz :");
var b = prompt("sayı giriniz :");
var c = prompt("sayı giriniz :");

console.log("a sayısı en büyük mü ? :",(a>b) && (a>c));
console.log("b sayısı en büyük mü ? :",(b>a) && (b>c));
console.log("c sayısı en büyük mü ? :",(c>a) && (c>a));



