// SET
// Set is a collection of elements. Set can only contains 'Unique' elements.
// Let us see how to create a set in the section below..

// const names = new Set(['halil', 'ercan', 'şafak', 'melih']);
// console.log(names);

// Set is an iterable object and we can iterate through each element.

// for (let name of names) {
//   console.log('Ad :', name);
// }

// names.forEach((name) => {
//    console.log('Ad :', name);
//   console.log(`Ad : ${name}`);
// });

// [...names].map((name) => console.log(name));

// Adding an element to a set

/* console.log(names.size); // Size:3

names.add('Hacı Hüsnü');
console.log(names); */

// We can also use loop to add element to set...
/* const names = ['Halil', 'Şafak', 'Enes', 'Melih', 'Ercan'];
const setOfNames = new Set();

for (let name of names) {
  setOfNames.add(name);
}

console.log(setOfNames);
[...setOfNames].map((name) => console.log(name));

setOfNames.delete('Halil');
console.log(setOfNames.size); // size ✅ length ❌

setOfNames.clear(); // clear all set elements..
console.log(setOfNames);
 */

// Some transaction works...

/* const companies = [
  'Turkcell',
  'Vodafone',
  'Google',
  'Amazon',
  'Titra',
  'Huawei',
  'Titra',
  'Turkcell',
  'turkcell',
  'Google',
  'Turk Telekom',
  'Google',
];
console.log(companies);
console.log(new Set(companies));
console.log(new Set(companies).size);

console.log([...new Set(companies)]);

// */

// Reinforce 'JSINFO'

/* let set = new Set();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(john);
set.add(john);

console.log(set.size);

for (let user of set) {
  console.log(user.name);
}
 */

// let set = new Set(['oranges', 'apples', 'bananas']);
// for (let value of set) console.log(value);

// set.forEach((val) => console.log(val));
/* console.log(set.keys());
console.log(set.values());
console.log(set.entries());

console.log(set.has('peach'));

 */

// MAPS

/* let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');
console.log(map);

console.log(map.get(1));
console.log(map.size); */

/* 
new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization. ✅
map.set(key, value) – stores the value by the key, returns the map itself.✅
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.✅
map.has(key) – returns true if the key exists, false otherwise.✅
map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.✅
map.clear() – removes everything from the map.✅
map.size – returns the current element count.✅
The differences from a regular Object:

Any keys, objects can be keys.✅
Additional convenient methods, the size property.✅

*/

/* 
Set – is a collection of unique values.

Methods and properties:

new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.✅
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.✅
set.has(value) – returns true if the value exists in the set, otherwise false.✅
set.clear() – removes everything from the set.✅
set.size – is the elements count.✅ (not length...)
*/
