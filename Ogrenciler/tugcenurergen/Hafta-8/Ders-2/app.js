//maps  >>> key - value

// let denemeMap = new Map(); //map oluşturma
// console.log(denemeMap);

// const key1 = "tugce";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 5;

// denemeMap.set(key1, "ilk değer");
// denemeMap.set(key2, "ikinci değer");
// denemeMap.set(key3, "üçüncü değer");
// console.log(denemeMap);

// //get

// console.log(denemeMap.get(key1));
// console.log(denemeMap.get("tugce"));
// console.log(denemeMap.get(key2));

const students = new Map();
students.set("okan", 44);
students.set("tansu", 32);
students.set("halil", 21);

//foreach
// students.forEach(function(value, key){
//     console.log(key, value);
// })

//for off
for(const [key, value] of students){ //destructing
    console.log(key, value);
}

//SET
// const mySet = new Set();
// mySet.add(54);
// mySet.add(2.12);
// mySet.add("deneme");
// mySet.add(false);
// mySet.add(1,2,3);
// mySet.add({a:1,b:"hello"});

const arr = [1,2,7,4,3,2,1]; //aynı olanları eklemezz
const mySet = new Set(arr);



console.log(mySet);
console.log(typeof mySet);
console.log(mySet.has(4)) //4 içeriyor mu? ttrue false

// //for off
// for(const val of mySet){
//     console.log(val);
// }

//for each
mySet.forEach(function(val){
    console.log(val);
})
