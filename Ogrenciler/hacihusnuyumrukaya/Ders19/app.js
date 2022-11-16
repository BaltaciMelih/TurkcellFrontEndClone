// Mapler-Key(Anahtar)-Value(Değer)
let denemeMap=new Map(); //Oluşturma

const key1="Hacı";
const key2={a:10, b:20};
const key3= () => 5;

//set değer ekleme
denemeMap.set(key1,"İlk değer");
denemeMap.set(key2,"İkinci değer");
denemeMap.set(key3,"Üçüncü değer");

// console.log(denemeMap);
// console.log(typeof denemeMap);

//get- değer okuma
// console.log(denemeMap.get("Hacı"));
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key3));

const students=new Map();
students.set("Okan",44);
students.set("Sinem",33);
students.set("Halil",24);

//For-Each
// students.forEach(function(value,key){
//     console.log(key,value);
// });

//For of
// for(const [key,value] of students)
// {//Destructing
//     console.log(key,value);
// }

//Set-Kümeler
// const mySet=new Set();
// mySet.add(50);
// mySet.add(2.23);
// mySet.add("Deneme");
// mySet.add(false);
// mySet.add([1,2,3]);
// mySet.add({a:1,b:2});

const arr=[1,2,7,4,3,2,1];
const mySet=new Set(arr);

console.log(mySet);
console.log(typeof mySet);

console.log(mySet.has(4));  //değerin olup olmadığı kontrolü

// for(const val of mySet){
//     console.log(val);
// }

mySet.forEach(function(value){
    console.log(value);
})