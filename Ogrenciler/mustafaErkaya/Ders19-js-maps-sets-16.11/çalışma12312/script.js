const map1 = new Map();

// !! map lerin içerisinde keyler olmaz biz ekleriz ama objelerin içerisinde keyler mevcuttur bizim eklediklerimizle çakışma ihtimali vardır.
// mapleri keyleri herhangi bişey olabilir ama object keyleri dize veya sembol olmalıdır.
//maplerde ögeler size ile alınabilir. // nesnelerde manuel olarak belirlernir
//mapler key value ekleme cıkarmalarda daha performanslıdır.
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
console.log(map1);
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2


// --- yanlış kullanım
const wrongMap = new Map();
wrongMap['js'] = 'jss';
wrongMap['js2'] = 'jss2';

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

wrongMap.set('js', 'jss');
wrongMap.set('js2', 'jss2');

console.log(wrongMap);

// --- doğru kullanım 
const contacts = new Map()
contacts.set('captain Price', {phone: "213-555-1234", address: "123 N 1st Ave"})
console.log(contacts.get("captain Price")); // 
console.log(contacts.has('captain Price')); // true
contacts.get('Hilary') // undefined
console.log(contacts.get('Hilary'));
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})

console.log(contacts.size) // 2
contacts.delete('Raymond') // false
contacts.delete('captain Price') // true
console.log(contacts.size) // 1
console.log(contacts.clear());

// Map clear method
const mapA = new Map();

mapA.set('Thresh', 'DerisiniYüz');
mapA.set(1, 'foo');

console.log(mapA);
console.log(`size: ${mapA.size}`);
// output: 2

mapA.clear();

console.log(`size: ${mapA.size}`);
// output: 0
console.log(mapA.has("Thresh"));

// map entries  -- ekleme sırasına göre  --keys methoduda aynı şekil sadece keyleri alır- valuede ise sadece valuelerı
const mapB = new Map();

mapB.set('B', 'html');
mapB.set(1903, 'BJK');

const dante = mapB.entries();

console.log(dante.next().value);


console.log(dante.next().value);
// expected output: [1, "bar"]



// ders
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