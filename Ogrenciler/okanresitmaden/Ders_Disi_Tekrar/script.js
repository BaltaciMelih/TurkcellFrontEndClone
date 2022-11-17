// VARIABLES

// 4 adet değişken tanımlama yöntemi var.
// var,let,const ve direkt tanımlama.
// değişkenler, veri tutarlar.

// LET: let ile tanımlanma yapıldıktan sonra tekrar tanımlama işlemi yapılamaz(1). Ancak var ile yapılabilir(2).
// let block scope'dur.
// let x = "John Doe" (1)
// let x =0;  

// Const'da let ile benzer yapıdadır.
// ancak const ile bir tanımlama işlemi yapıldığında değer atanmak zorundadır

// const pi = 3.14; // doğru kullanım.  

// const j; // yanlış kullanım. 
// j = -1; //

// Block Scope : değişkene blok dışından erişim sağlanamaz.
// Global Scope : değişkene blok dışından erişim sağlanabilir.

// {
//     let(1) var(2) x =2;
// }
// (1) x'e buradan ulaşılamaz. (2) x'e buradan ulaşılabilir.



// var x ="John Doe"; (2)
// var x =0;

// var x = 16;
// var y = 18;
// var z = x + y;
// console.log(z);

// eğer eski bir browser kullanılıyorsa "var" ile tanımlama yapılmalıdır. < 2015

// const price1 = 13;
// const price2 = 77;
// let total = price1 + price2;
// console.log(total);

// const değerler değiştirilemezler. let ile tanımlanan değer ise değiştirilebilir.

// javascript case-sensitive'dir.

// equal(=) operatörü matematikteki gibi çalışmaz. örneğin; x = x + 8 matematikte mantıksızken javascripte mantıklı bir işlemdir.
// x + 5'in değerini x'e atar.

// matematikteki equal(=) operatörü javascript'te "==" ile gösterilir.

// DATA TYPES

// const pi = 3.14; //number
// let person = "Okan Maden"; //string
// let answer = "Yes I am"; // string

// console.log(typeof pi, typeof person, typeof answer);

// Örnek
// let resit = "maden";
// document.getElementById("okan").innerHTML=resit;


// var ile değişken tekrar tanımlanabilir ve değerini kaybetmez ancak bu işlem let ya da const ile yapılamaz

// var carName = "Volvo";
// var carName; // it works

// let carName = "Volvo";
// let carName; // it does not works

// let x = "5" + 2 + 3;
// console.log(x); // string ve numberları yan yana topladı
// console.log(typeof x); //type'ı string oldu


// carName = "Volvo";
// var carName;
// carName = "Volvo";
// let carName;
// console.log(carName);

// ARRAY

// const bjk = ["1903","kartal","seba"];
// const besiktas = [];

// besiktas[0] = "seba";
// besiktas[1] = "bjk";
// besiktas[2] = "kartal";

// console.log(bjk,besiktas);

// const country = ["Türkiye", "Fransa", "Çekya"];
// document.getElementById("okan").innerText = country;

// Arraylerin type'ı object'tir. Ancak diziler en iyi şekilde dizi olarak betimlenilebilir.

//ARRAY METODLARI VE ÖZELLİKLERİ

// const country = ["Türkiye", "Fransa", "Çekya"];


// console.log(country.length); // array uzunluğunu verir.
// console.log(country.sort);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = "<ul>"
// for (let i = 0; i < fruits.length; i++ ){
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("okan").innerHTML = text;

// function myFruits(value){
//     text += "<li>" + value + "</li>";
// }

// const fruits = ["Banana", "Orange","Apple","Mango"];

// let text = "<ul>";       
// fruits.forEach(myFruits);
// text +="</ul>";

// document.getElementById("okan").innerHTML = text;

// arraye eleman ekleme

// const years = ["2003","2009","2016","2017","2021"];
// years.push("2023"); // push metodu ile ekleme
// years[years.length] = "2024"; //length ile ekleme
// console.log(years);

// arrayler numbered index, objeler named index .
// arrayler numaralandırılmış indexlerden oluşan özel bir obje türüdür.

// array ve objeler hangi durumlarda kullanılmalı

// javascript associative arrayleri desteklemez.
// elementlerin isimlerinin string olması istendiğinde objeler, number olması istendiğinde arrayler kullanılmalıdır.

// const points = new Array();
// const points = []; aynı şey demek ancak new array kullanmak biraz sıkıntılı.

// typeof yaptığımızda array bize object değerini döndüreceğinden bir arrayin array type'ına sahip olduğunu öğrenmek için 2 yol var.

//1
// const years = ["2003","2009","2016","2017","2021"];
// console.log(Array.isArray(years));
//2
// console.log(years instanceof Array);

// ARRAY METHODS

// toString() ile arrayi bir string haline getirebiliriz.

// const colors = ["orange", "red", "blue", "white", "black"];
// let str = colors.toString();

// console.log(typeof colors, typeof str);

// document.getElementById("okan").innerHTML = str;

// join() metodu

// toString() ile aynı şekilde çalışır. Ancak ek olarak separator belirtilebilir.

// document.getElementById("okan").innerHTML = colors.join(" "); 

// pop() metodu arrayden son elemanı siler.

// colors.pop();
// console.log(colors);
// colors.pop();
// console.log(colors);

// push() metodu arraye yeni bir eleman eklenmesini sağlar.

// colors.push("gray");
// console.log(colors);


//shift() metodu pop() ile ters çalışır. son eleman değil ilk eleman silinir.

// colors.shift();
// console.log(colors);

// unshift arrayin başına yeni bir eleman ekler.

// colors.unshift("yellow");
// console.log(colors);

// concat() metodu arrayleri birleştirmeye yarar. var olan arrayi değiştirmez yeni bir array döndürür. ve birden fazla argüman alabilir.

// const names = ["Okan","Kaan","Reşit","Sefer"];
// const year  = ["1999","1992","23","30"];
// const hair  = ["wavy","blonde","straight","red"];

// const info = names.concat(year);
// const info2 = names.concat(year,hair);
// console.log(info);
// console.log(info2);

// splice() metodu

// const names = ["Okan","Kaan","Reşit","Sefer"];
// document.getElementById("okan").innerHTML = names;
// let removed = names.splice(2, 2, "Nurşen", "İbrahim"); // 2: ekleneceği pozisyon 0: ekleneceği pozisyondan sonra kaç eleman kaldırılacak demek
// document.getElementById("okan2").innerHTML = names;
// document.getElementById("okan3").innerHTML = removed;

// names.splice(1,1); splice ile eleman silme
// console.log(names);

// slice metodu ile varolan arrayden yeni bir array kesiti oluşturabiliriz. var olan arraye müdahale etmez.

// const piece = names.slice(1);
// console.log(piece);


// MAPS

// herhangi bir veri türündeki bütün anahtar değer ikilelerini tutabilir.
// MAP METODLARI
// new Map() yeni bir map oluşturur.
// set() Map'e key değerlerini atar.
// get() key değerlerini mapten alır.
// delete() anahtar tarafından belirtilen bir map'i siler.
// has() eğer map'de key değeri mevcut ise true döndürür.
// forEach() 
//entries() Map içerisindeki anahtar değer ikililerinin iterasyonunu sağlar.

//Property
// size : mapin eleman sayısını döndürür.

// map oluşturma

// const colors = new Map([
//     ["black",1],
//     ["white",2],
//     ["orange",3]
// ]);

// document.getElementById("okan").innerHTML = colors.get("black");

// map'e eleman ekleme

// const color = new Map();

// color.set("yellow",1);
// color.set("red",2);
// color.set("blue",3);
// color.set("blue",5);
// document.getElementById("okan").innerHTML = color.get("blue");

// map'ten eleman çekme

// color.get("yellow");

// size property

// console.log(colors.size);

// delete() metodu

// colors.delete("white");
// console.log(colors);

// has() metodu eğer anahtar mevcutsa true değerini döndürür.

// console.log(colors.has("black"));
// console.log(colors.has("gray"));


// OBJE VE MAP FARKLARI

// OBJE
// Not directly iterable
// size property yok.
// Key type'ı string ya da sembol olmalıdır.
// Keyler düzenli bir şekilde sıralı değildir.
// varsayılan keye sahiptir.

// MAP
// directly iterable
// size property var.
// Keyler herhangi bir type'a sahip olabilir
// Anahtarlar eklenişe göre sıralanır
// varsayılan key yoktur.

// forEach metodu

// const colors = new Map([
//     ["black",1],
//     ["white",2],
//     ["orange",3]
// ]);

// let text = "";
// colors.forEach(function(value, key){
//     text += key + "=" + value + "<br>";
// });

// document.getElementById("okan").innerHTML = text;

//entries() metodu

// let text = "";
// for (const x of colors.entries()){
//     text += x + "<br>";
// }

// document.getElementById("okan").innerHTML = text;

// SET 

// set oluşturma

// const numbers = new Set(["a", "b", "c"]);

//set'e eleman ekleme
// const numbers = new Set();
// numbers.add("a");
// numbers.add("b");
// numbers.add("c");

// console.log(numbers);

// document.getElementById("okan").innerHTML = numbers.values();