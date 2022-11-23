//  JS CLASS COMPLEXITY

//  Constructor Function

/* function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

Person.prototype.fullName = function () {
  return this.name + ' ' + this.surname;
};

Person.prototype.friends = ['Ela', 'Rüzgar'];

const arin = new Person('Arin', 'Cekic', 5);
const elis = new Person('Elis', 'Cekic', 3);

console.log(arin);
console.log(elis);
console.log(arin.fullName());
console.log(elis.fullName());

console.log(arin.friends);
console.log(elis.friends);

arin.friends.push('Çınar');
console.log(arin.friends);

console.log(elis.friends); // BİZ BUNU İSTEMİYORUZ... ['Ela', 'Rüzgar', 'Çınar']
 */
// ÖZELLİKLER ARTMAYA BAŞLADI...
// İŞLER KARMAŞIKLAŞMAYA MI BAŞLADI SANKİ 😀😀😀😀

//  HEHEHEEHHEEHEHHE CLASSLAR LAZIM OLDU, SELAMUN ALEYKÜM....

/* function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = fullName;
} */

// Nesneleri CLASSLAR İLE OLUŞTURMA ZAMANI...
// Görünüm klasik ve daha kolay bir hale geliyor...

// CLASS DECLARATION
/* class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = ['Ela', 'Rüzgar'];
  }

  fullName() {
    return this.name + ' ' + this.surname;
  }
} */

// CLASS EXPRESSION
// const Person = class {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.friends = ['Ela', 'Rüzgar'];
//   }

//   fullName() {
//     return this.name + ' ' + this.surname;
//   }
// };

/* const arin = new Person('Arin', 'Cekic', 5);
const elis = new Person('Elis', 'Cekic', 3);

console.log(arin);
console.log(elis);
console.log(arin.fullName());
console.log(elis.fullName());

console.log(arin.friends);
console.log(elis.friends);
arin.friends.push('Çınar');
// HER BİR INSTANCE ICIN FARKLI OZELLİKLER GELDİ..
console.log(arin.friends);
console.log(elis.friends);

console.log(typeof Person); // JS CLASSLARI ÖZEL BİR JAVASCRİPT FONKSİYONLARIDIR... */

// -----------------------CLASS PART II -----------------------

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = ['Ela', 'Rüzgar'];
  }

  fullName() {
    return this.name + ' ' + this.surname;
  }
}

console.log(typeof Person);

const arin = new Person('Arin', 'Cekic', 5);
console.log(arin);
