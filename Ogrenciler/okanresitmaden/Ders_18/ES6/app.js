// arrow function

// const selam = deger => console.log("selam dünyalı " + deger);
// selam("okan");

// const cube = function(x){
//     return x*x*x;
// }
// console.log(cube(5));

// const cube = x => x*x*x;
// console.log(cube(3));

// Destructing

// let number1, number2;
// let arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

// [number1, number2] = arr;
// [number1, number2, ...kalanlar] = arr;
// console.log(number1,number2);

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// };

// const {a:n1, c:n2, e:n3} = numbers;
// console.log(n1, n2, n3);

// const person = {
//     name: "Okan Reşit Maden",
//     university: "Gebze Teknik Üniversitesi",
//     year: 1999,
//     salary: 0,
//     showInfos: () => console.log("Bilgiler Gösteriliyor..."),
// };

// const {name: isim, year: yil, salary: maas, university:universite, showInfos: bilgileriGoster,} = person;

// console.log(isim, yil, maas, universite);

// ForInForOf
// ForIn

// const person = {
//     name: "Okan Reşit Maden",
//     university: "Gebze Teknik Üniversitesi",
//     year: 1999,
//     salary: 0,
// };

// const langs = ["Python", "Go", "C", "C++", "MATLAB"];

// for(let prop in person) {
//     console.log(prop, person[prop]);
// }

// for (let i in langs){
//     console.log(langs[i]);
// };


// ForOf

// for (let value of person){ // objeler için for of kullanamayız.
//     console.log(value);
// }

// for (let value of langs){
//     console.log(value);
// }


// SpreadOperator

// let langs  = ["Python", "Go", "C", "C++", "MATLAB"];
// let langs2 = ["Perl", "Rust"];
// let langs3 = ["Bash", "PHP"];


// console.log(langs[0], langs[1], langs[2], langs[3], langs[4]);

// console.log(...langs);

// langs = ["Java", ...langs , "C#"];

// console.log(langs);

// const allLangs = [...langs, ...langs2, ...langs3];
// console.log(...allLangs);


// array methods

//map function

// const numbers = [1,4,9,16];

// const map1 = numbers.map(function(e){
//     return e*2;
// });

// const map1 = numbers.map((x,i) => x*2);

// console.log(map1);

// Filter Function 

// let langs  = ["Python", "Go", "C", "C++", "MATLAB"];

// const result = langs.filter(lang => lang.length > 4);
// console.log(result);

// ForEach

// langs.forEach(e=> console.log(e));

// array içerisinde her bir elemanı tek tek alıp işlem yapmak istiyorsanız bunu yapabilirsiniz
// maple de yapılabilir.














