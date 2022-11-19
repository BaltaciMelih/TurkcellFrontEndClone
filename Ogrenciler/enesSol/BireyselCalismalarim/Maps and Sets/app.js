// *** SETS ***

const arr = [1, 2, 2, 5, 3, 4, 5];
// const arr = [1, 2, 3, 4, 5];
const mySet = new Set(arr);

console.log(arr);
console.log(mySet);

// JS sets are used to remove duplicates from an array.

// We can use sets to remove duplicates and create an array based on our sets. Which, in return, will give us an array with unique items.

// const uniqueArray = [...mySet];

// console.log(uniqueArray);

// Set Methods

// Add
// mySet.add(6);
// mySet.add("enes");
// mySet.add({ jobTitle: "Assistant Specialist" });
// mySet.add([34, 167, 391]);

// Delete
// mySet.delete(3);
// mySet.delete("another value"); Does not return an error

// mySet.clear(); clear everything in that set

// Has
// console.log(mySet.has(5)); returns true
// console.log(mySet.has(9)); returns false

// Size
// console.log(mySet.size);
// console.log(mySet);

// DIFFERENCES BETWEEN ARRAYS & SETS

// Elements are ordered in Arrays which means we can access some specific data by typing an index number.
// However, sets are not ordered properly, therefore we can not access specific elements inside sets using index numbers.

// console.log(arr[2]); returns 3
// console.log(mySet[2]); returns undefined

// The biggest advantage of using sets is that we can store distinct elements in sets and then create arrays based on those sets.

// *** MAPS ***
// Maps store Key & Value pairs.

// const myMap = new Map([
//   ["name", "Enes"],
//   ["surname", "Sol"],
// ]);

// console.log(myMap);

// Javascript objects only store 1 key object. If we add another key, they remember the last ones. This is why we use Maps!
// const myObject = {};

// const a = {};
// const b = {};

// myObject[a] = "a";
// myObject[b] = "b";

// console.log(myObject);

// const myMap = new Map([
//   [a, "a"],
//   [b, "b"],
// ]);
// console.log(myMap);

// Advantages of using Map
// const myMap = new Map([
//   [{}, "a"],
//   [{}, "b"],
// ]);

// Set

// myMap.set("{}", "c");

// console.log(myMap);

// Delete
// const myMap = new Map([[1, 1]]);
// myMap.delete(1);

// Clear
// const myMap = new Map([
//   [1, "one"],
//   [2, "two"],
// ]);
// myMap.clear();

// Has
// const myMap = new Map([
//   [1, "one"],
//   [2, "two"],
// ]);

// console.log(myMap.has(1)); returns true
// console.log(myMap.has(3)); returns false
// console.log(myMap.has("one")); returns false because it looks for keys
// console.log(myMap.has("1")); returns false

// Size
// console.log(myMap.size);
