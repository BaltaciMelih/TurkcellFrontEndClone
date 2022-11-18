//Map içindeki (clear,delete,entries,has,keys,set,size,values) fonksiyonları nedir ve nasıl kullanılır?
//new Map() --> creastes a new map object
//set() --> sets the value for a key in a map 
//get() --> gets the value for a key in a map
//clear() --> removes all the elemnts from the map
//delete() --> deletes a map element specified by a key
//has() --> returns true if the key exists in the map
//forEach() --> returns for each element
//entries() --> Returns an iterator object with the [key, value] pairs in a Map
//keys() --> returns an iterator object with the keys in a Map
//values() --> returns an iterator object with the values in a Map
//.size --> returns the number of map elements

const fruits = new Map([
    ["apples", 300],
    ["bananas", 400],
    ["oranges", 300]
])

fruits.set("pineapples", 150);
console.log(fruits)

console.log(fruits.get("pineapples")); //gets the "150" that pineapples value

console.log(fruits.size); //gets the size of the map (4)

fruits.delete("apples"); //the element deleted that has the key of "apples" 
console.log(fruits);

fruits.clear(); //removes all element in the map
console.log(fruits);

fruits.set("pineapples", 150);
fruits.set("apples", 150);
fruits.set("grapes", 150);
console.log(fruits);

console.log(fruits.has("pineapples")); //returns true

console.log(typeof fruits); //returns object

let text = "";
fruits.forEach( (value,key)=>{
    text += key + ' = ' + value;
})
console.log(text);

console.log(fruits.keys());
console.log(fruits.values());


const apple = {name: 'apples'};
const banana = {name: 'bananas'};
const grape = {name: 'grapes'};

const fruit = new Map();

fruit.set(apple, 300);
fruit.set(banana, 500);
fruit.set(grape, 200);
console.log(fruit);

//mapler iterable olma konusunda işimizi kolaylaştırır.

//objelerde key değeri olarak sadece string verilebiliyor. 
//obje elemanlarını gezmek için for in yöntemini kullanabiliyoruz.
//obje elemanlarına sıra ile erişilmesi zordur. 
//obje elemanlarının sayısını bulmak için fonksiyon yazılması gerekiyor.









//Set içindeki (clear,delete,entries,has,keys,set,size,values) fonksiyonları nedir ve nasıl kullanılır?
//Map ve setin objelerden farkı nedir?


