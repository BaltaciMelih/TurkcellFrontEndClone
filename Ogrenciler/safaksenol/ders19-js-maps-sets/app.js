//Mapler-KEY(anahtar)-Value(Değer)

//Map oluştruma
let denemeMap = new Map();

//farklı türde değerler atanabilir!
const key1 = "Şafak";
const key2 = { a: 6, b: 0 };
const key3 = () => 5;

//set-değer ekleme işlemleri

denemeMap.set(key1, "ilk değer");
denemeMap.set(key2, "ikinci değer");
denemeMap.set(key3, "üçüncü değer");

// console.log(denemeMap);
// console.log(typeof denemeMap);

//get-değer okuma işlemi

// console.log(denemeMap.get("Şafak")); //key yazmadanda değeri okuuyabiliyoruz!
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key3));

const students = new Map();
students.set("Enes", 24);
students.set("Erdem", 26);
students.set("Şafak", 28);

//Maple For Each fonksiyonu kullanımı
// students.forEach(function (value, key) {
//     console.log(key, value);
// });// bana konsolda yukarıdaki sırayla değerler geldi.

//Maple For Of kullanımı
// for (const [key, value] of students) {
//     //burada destructing yapıyoruz parçalayarak alabiliyoruz değerleri
//     console.log(key, value);
// }//for eachteki çıktıyı yine konsolda aldım

//SET -kümeler
//set oluşturma işlemi
// const mySet = new Set();

//sete değer ekleme
// mySet.add(50);
// mySet.add(2.14);
// mySet.add("Deneme");
// mySet.add(false);
// mySet.add([1, 2, 3]);
// mySet.add({ a: 1, b: 2 });

const arr = [1, 2, 7, 4, 3, 2, 1];

const mySet = new Set(arr);
// console.log(mySet);//konsol çıktısında {1,2,7,4,3} çıktısını alırız sebebi set tekrar eden elemanları getirmez!
// console.log(typeof mySet);// tür olarak object çıktısını alırız!
// console.log(mySet.has(5));//false ifadesini görürüz sebeb çünkü dizi içinde tekrar eden eleman vardır ve set bunu görmediği için bize false ifadesini çevirir! 4 yada daha altı bir değer verseydik true ifadesini alırdık!

//SET -for of fonksiyonu kullanımı
// for (const val of mySet) {
//     console.log(val);
// }// konsolda alt alta olucak şekilde 1 2 7 4 3 çıktısını aldık!

// SET -for each kullanımı
// mySet.forEach(function (val) {
//     console.log(val);
// }); // konsolda for oftaki çıktının aynısını aldık!


//ÖDEV KISMI

//1-Map içindeki (clear,delete,entries,has,keys,set,size,values) fonksiyonları nedir ve nasıl kullanılır?

// new Map() mapi oluşturur!
// map.set(key, value); değeri keyle saklar!
// map.get(key); key değeri mapte yoksa undefined döndürür!
// map.has(key);key varsa true yoksa false döndürür!
// map.delete(key);key ve değerini silme işlemi yapar!
//map.clear();mapteki herşeyi kaldırır!
//map.size();geçerli olan element sayısını döndürür!

//map döngü işlemleri
// map.keys();key için yinelenebilir bir değer döndürme işlemi yapar!

// map.values();değerler için yinelenebilir bir değer döndürme işlemi yapar!

// map.entries();entry için yinelenebilir bir değer döndürür varsayılan olarak for of çalıştırır!

//örnek uygulama
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable);
// }
// for (let amount of recipeMap.values()) {
//     console.log(amount);
// }
// for (let entry of recipeMap.entries()) {
//     console.log(entry);
// }

// recipeMap.forEach( (value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 45]
]);

// console.log(prices.orange); // orange değeri olan 2 çıktısını alırız.


let map = new Map();

map.set('name', 'safak');

let keys = [...map.keys()];
keys.push('more');

console.log(keys);//bu şekilde bir ekleme yöntemide kullanabiliriz.

//2-Set içindeki (clear,delete,entries,has,keys,set,size,values) fonksiyonları nedir ve nasıl kullanılır?

// new Set([iterable]);//seti oluşturur ve bir itelable nesne sağlanmışsa(genellikle bir dizidir),ondan değerleri sete kopyalar!

// set.add(value);//bir değer ekler ve kümenin kendisini döndürür!

// set.delete(value);//değeri kaldırır true varsa döndürür aksi halde false döndürür!

//set.has(value);//kümede değer varsa true yoksa false döndürür!

//set.clear();//kümedeki herşeyi kaldırır!

//set.size();element sayısını verir

//örnek uygulama

let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) console.log(value);

//aynısını foreach ile yapalım

// set.forEach((value, valueAgain, set) => {
//   console.log(value);
// });//for of ile aynı çıktıyı alırız!

//sette döngü yapısı

// set.keys();//değerler için yinelebilir bir nesne döndürür!

// set.values(); //set.keys() ile aynı işlemi yapar!

//set.entries();girişler için yinelenebilir bir nesne döndürür!

//3-Map ve setin objelerden farkı nedir?

// tıpkı bir obje gibidir ancak map herhangi bir türden keye izin verir.

// Herhangi bir key, nesne key olabilir.
// Element sayısını veren size özelliği vardır.

//her zaman ekleme sırasına göre sıralanır, bu nedenle bu koleksiyonların sırasız olduğunu söyleyemeyiz, ancak öğeleri yeniden sıralayamayız veya bir öğeyi numarasına göre doğrudan alamayız.






