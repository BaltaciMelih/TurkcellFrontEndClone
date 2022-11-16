// //Secimler
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

// //Fonksiyonlar
// function addItem() {
//     sessionStorage.setItem(addkey.value, addvalue.value);
// }
// function deleteItem() {
//     sessionStorage.removeItem(deletekey.value);
// }
// function clearItems() {
//     sessionStorage.clear();
// }


// // Arrow Function 

// const cube = x => x*x*x;
// console.log(cube(3));

// const selam = name => console.log("Selam" + name);

//Destructing

// const person = {
//     name: "Tansu Çağla Tekin",
//     year: 1997,
//     salary: 0,
//     showInfos: () => console.log("Bilgiler Güncelleniyor..."),
// }

// const {
//     name: isim,
//     year: yil,
//     salary: maas,
//     showInfos: bilgileriGöster,
// } = person;

// console.log(isim, yil, maas);
// bilgileriGöster();

//For In For Off

// //for in
// // for (let prop in person) {
// //     console.log(prop, person[prop]);
// // }

// const langs = ["Python", "C++"];

// for (let i in langs) {
//     console.log(langs[i]);
// }

// //for off
// // for (let value of person) { //objelerde kullanamayız.
// //     console.log(value);
// // }

// for (let value of langs) {
//     console.log(value);
// }

//Spread Operator

// let langs = ["Ptyhon", "C++", "Go"];
// let langs2 = ["Perl", "Rust"];
// let langs3 = ["Java", "Go"];

// // console.log(langs[0], langs[1], langs[2]);

// langs = ["C#", ...langs];
// // console.log(...langs);

// const allLangs = [...langs, ...langs2, ...langs3];

// console.log(...allLangs);

//Array Methods - Map

// const numbers = [1, 4, 9, 16];

// const map2 = numbers.map(function(e) {
//     return e*2;
// });

// // const map1 = numbers.map (x => x*2);
// console.log(...map1);

//Array Methods - Filter() fonksiyonu

