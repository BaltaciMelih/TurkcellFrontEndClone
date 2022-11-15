// let number1, number2;
// let arr = [100,200,300,400];


// [number1,number2] = arr;
// console.log(number1,number2);

// const numbers={
//     a:10, 
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const { a: n1, c: n2, e: n3 } = numbers;

// console.log(n1,n2,n3);

// const person ={
//     name: "Batuhan SEVİNÇ",
//     year: 1999,
//     salary: 10000,
//     showInfos: () => console.log("Bilgiler Gösteriliyor..")
// }

// const {name: isim, year: yil, salary: maas, showInfos: bilgilerGoster} = person;

// console.log(isim,yil,maas);
// bilgilerGoster()

// const langs = ["Python", "C++" , "Go", "Ruby", "Javascript"];

// // for in

// for ( let prop in langs ){
//     console.log(prop, langs[prop]);
// }

// for (let i in langs){
//     console.log(langs[i]);
// }
// // for of 
// for(let value of langs){
//     console.log(value);
// }
// for (let value of langs){
//     console.log(value);
// }

// let langs = ["Python", "C++" , "Go", "Ruby", "Javascript"];

// console.log(langs);

let langs = ["Python", "C++" , "Go", "Ruby", "Javascript"];
const numbers = [1,4,9,10];

const map1 = numbers.map(x=> x*2);

console.log(...map1);