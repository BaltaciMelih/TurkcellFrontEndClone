// Mapler - Key(Anahtar) - Value(Değer)
let denemeMap = new Map(); // Oluşturma

const key1 = "Varol";
const key2 = { a: 10, b: 20 };
const key3 = () => 5;

//set - //değer ekleme
denemeMap.set(key1, "ilk değer");
denemeMap.set(key2, "ikinci değer");
denemeMap.set(key3, "üçüncü değer");

console.log(denemeMap);
console.log(typeof denemeMap);

// get değer okuma
// console.log(denemeMap.get("Varol"));
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key3));

// const students = new Map();
// students.set("Okan", 44);
// students.set("Tansu", 33);
// students.set("Halil", 24);

// For each
// students.forEach(function (value, key) {
//   console.log(key, value);
// });

// For of
// for (const [key, value] of students) {
//   // Destructing
//   console.log(key, value);
// }

// Set - Kümeler
// const mySet = new Set();
// mySet.add(50);
// mySet.add(2.23);
// mySet.add("Deneme");
// mySet.add(false);
// mySet.add([1, 2, 3]);
// mySet.add({ a: 1, b: 2 });

// const arr = [1, 2, 7, 4, 3, 2, 1];

// const mySet = new Set(arr);

// console.log(mySet);
// console.log(typeof mySet);
// console.log(mySet.has(5));

// for of
// for (const val of mySet) {
//   console.log(val);
// }

// for each
// mySet.forEach(function (val) {
//   console.log(val);
// });
