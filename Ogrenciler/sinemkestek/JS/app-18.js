//session storage
//
// const add = document.getElementById("add");
// const del = document.getElementById("delete");
// const clear = document.getElementById("clear");
// const addkey = document.getElementById("addkey");
// const addvalue = document.getElementById("addvalue");
// const deletekey = document.getElementById("deletekey");

// //Eventler
// add.addEventListener("click", addItem);
// del.addEventListener("click", deleteItem);
// clear.addEventListener("click", clearItems);

// function addItem(e) {
//   sessionStorage.setItem(addkey.value, addvalue.value);
// }
// function deleteItem() {
//   sessionStorage.removeItem(deletekey.value);
// }
// function clearItems() {
//   sessionStorage.clear();
// }

//**ARROW FUNCTİON**

const selam = (name) => {
  console.log("selam" + name);
};
//const selam=name=>console.log("selam");
//tek satırlık bi işlemse parantezler olmadanda yazabilirsin.
//tek satırda return yazmayabilirsin.Kendisi otomatik returnler.
// const cube = (x) => Math.pow(x, 3);
// console.log(cube(3));

// //***Destructing***
// let number1, number2;
// let arr = [100, 200, 300, 400];

// [number1, number2] = arr;
// console.log(arr);
// [number1, number2, ...kalanlar] = arr;
// console.log(number1, number2, kalanlar);

// const person = {
//   name: "Sinem",
//   year: 1996,
//   salary: 2000,
//   showInfos: () => console.log("bilgiler gösteriliyor.."),
// };
// const {
//   name: isim,
//   year: yil,
//   salary: maas,
//   showInfos: bilgileriGoster,
// } = person;
// console.log(isim, yil, maas);
// bilgileriGoster();
//for(let prop in person){
//console.log(prop,person[prop]);
//}
//  const langs=[ "pyhton","c++","Go","ruby","javascript"];
//  for(let i in langs){
//     console.log(langs[i]);
//  }
//  for (let value of person){
//     console.log(value);objeler için kullanamayız.
//  }
//***Spread Operators***
// const langs = ["pyhton", "c++", "Go", "ruby", "javascript"];
// console.log(...langs); // tüm elemanları yazdırır.
// langs = [...langs, "java"];
// console.log(...langs);

// const langs = ["pyhton", "c++", "Go", "ruby", "javascript"];
// const numbers = [1, 4, 9, 16];
// const map1 = numbers.map(function (e) {
//   return e * 2;
// });
// const map2 = numbers.map((x) => x * 2);
// //Filter**
// const result = langs.filter((lang) => lang.lenght >= 4);
// console.log(result);

// //ForEach**
// langs.forEach((e) => console.log(e));
