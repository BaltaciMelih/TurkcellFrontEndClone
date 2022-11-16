// mapler - key(anahtar) - value(değer) 'den oluşur.


let denemeMap = new Map(); // oluşturma

console.log(typeof denemeMap);

const key1 = "varol";
const key2 = {a: 10, b:20};
const key3 = () => 5;

denemeMap.set(key1, "ilk değer");
denemeMap.set(key2, "2. değer");
denemeMap.set(key3, "3. değer");

console.log(denemeMap);

//get değer okuma
console.log(denemeMap.get(key1));
