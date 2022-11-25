// VAR - LET - CONST

// let age = 40;
// console.log(age);

// age = 42;
// console.log(age);

// const name = 'Arin';
// console.log(name);

// BAŞLANGIÇ DEĞERİ OLMADAN CONST TANIMLAYAMAYIZ...

/* name = 'Elis'; // UNCAUGHT TYPEERROR: Assignment to constant variable; */

/* let name = 'Arin';
console.log(name);

name = 'Elis';
console.log(name); */

// Özellikle const -> kütüphaneler ve çatılarda let ve var'ın toplamından daha fazla kullanılır
// KAZAYLA DEĞİŞEBİLECEK LET DEĞİL DE DEĞİŞMEYEN CONST KAVRAMI ÇOK DAHA MÜHİM.
/* 
let str = '';

for (let i = 0; i < 10; i++) {
  str = str.concat(i);
  console.log(str);
}
 */

/* const myArr = [1, 2, 3];
console.log(myArr);
myArr.pop();
console.log(myArr);

const student = {
  name: 'Arin',
  age: 5,
};

console.log(student);
student.name = 'Elis'; // Aynı student nesnesi üzerinde işlem yapıyorum...
console.log(student); */

// EEE HANİ DEĞİŞMİYORDU...

//  Array ve Object'in değerini değil referansını ifade ediyoruz.
// Student veyahut myArr tutucularımın yeri sabit, içindekiler değişebilir...

/* student = {
  name: 'Elis',
  age: 5,
}; */ // ERROR-> Student zaten memory'de tutuluyor, dikkat et canım :)

// YA BEN NESNEMİN DEĞİŞMESİNİ İSTEMİYORSAM, İÇERİĞİ DE DAHİL...

/* const student = {
  name: 'Arin',
  age: 5,
};

console.log(student);

Object.freeze(student);

student.name = 'Elis';
console.log(student); // Herhangi bir değişiklik yok. Freezeledik çünkü. */

// VAR'DAN BAHSEDELİM BİRAZ...

// var age = 40;
// console.log(age);

// age = 42;
// console.log(age);

// VAR ----> GLOBAL SCOPE + FUNCTIONAL SCOPE

/* var x = 1;
console.log(x);

if (x === 1) {
  var x = 10;
  console.log(x);
}

console.log(x); */

// LET ---> BLOCK SCOPE

/* let x = 1;
console.log(x);

if (x === 1) {
  let x = 10;
  console.log(x);
}

console.log(x); */
/* 
var x = 10;
console.log(window.x); */

// HOISTING

// var x;

console.log(x);

var x = 10;

console.log(x);

// LET ile deneyelim

// let y; -> Böyle bişi yoooh :)
let y;
console.log(y);
