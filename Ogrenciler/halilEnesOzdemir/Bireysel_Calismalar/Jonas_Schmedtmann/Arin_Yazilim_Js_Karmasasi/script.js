// OBJECTS
// İsim ve değer çiftlerinden oluşurlar.

// property -- method (Bir nesneyle ilişkili fonksiyon.)

/* const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  languages: ['Turkish', 'English', 'Spanish'],
  fullName: function () {
    return this.name + ' ' + this.surname;
  },
  address: {
    city: 'Balıkesir',
    district: 'Akçay',
  },
}; */

// Biz neden Javascript'te nesneye ihtiyaç duyarız?
// Biz programlama dillerinde birbirleriyle ilişkili verilerin bir arada bulunmasını isteriz. Bundan dolayı verileri obje içinde oluştururuz.
// Bir form doldurduğunu düşün -> Formun verilerini birbirleriyle ilişkili olarak tutmak mı yoksa tek tek tutmak mı mantıklıdır?

// --------------- OBJECT LITERAL --------------------

// Literal nedir ?

// const person = {
//   name: 'John',
//   surname: 'Doe',
//   age: 40,
//   fullName: function () {
//     return this.name + ' ' + this.surname;
//   },
// };

/* console.log(person);

// Dot notation

console.log(person.name);
console.log(person.age);
console.log(person.fullName());

person.job = 'Student';
console.log(person.job);

//Bracket notation

console.log(person['name']);
console.log(person['age']);
console.log(person['fullName']());
console.log(person['na' + 'me']); // 'na' + 'me' ---> 'name' */

/* const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName: function () {
    return this.name + ' ' + this.surname;
  },
};

person.address = {};
console.log(person);

person.address.city = 'Balıkesir';
console.log(person); */

// CONSTRUCTOR ---> Yapıcı
// BUNU DUYDUGUMUZDA KAÇMIYORUZ ARTIK :)

/* function Person(name, surname, age) {
  const obj = {};
  obj.name = name;
  obj.surname = surname;
  obj.age = age;
  obj.fullName = function () {
    return obj.name + ' ' + obj.surname;
  };
  return obj;
  
} 

const person2 = new Person('Ricardo', 'Quaresma', 38);
console.log(person1);
console.log(person2);

*/

/* function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function () {
    return this.name + ' ' + this.surname;
  };
} */

/* const person1 = new Person('John', 'Doe', 40);
const person2 = new Person('Ricardo', 'Quaresma', 38); */

/* const person1 = new Person('John', 'Doe', 40);
console.log(person1);
console.log(person1.fullName());

const person2 = new Person('Ricardo', 'Quaresma', 38);
console.log(person2);
console.log(person2.fullName()); */

//new ---> Yeni boş bir nesne oluşturur

// -------------OBJECT CONSTRUCTOR --------------

/* const person1 = new Object();
person1.name = 'John';
person1.surname = 'Doe';
person1.age = 40;
person1.fullName = function () {
  console.log(this);
  return this.name + ' ' + this.surname;
};

console.log(person1);
console.log(person1.age);
console.log(person1.fullName());
 */

// ------------- Object.create() ile nesne oluşturmak -----------------

/* const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName: function () {
    return this.name + ' ' + this.surname;
  },
};
 */
// console.log(person);
/* 
const arin = Object.create(person);
arin.name = 'Teacher';
arin.surname = 'Software';
arin.age = 5;
console.log(arin);
console.log(arin.fullName()); */

// OBJECTS PART II

/* const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  // job: 'Teacher',
  fullName: function () {
    return this.name + ' ' + this.surname;
  },
};

console.log(person);
console.log(person.name);
console.log(person.fullName());
// console.log(person.fullName2());
// console.log(person.job);
console.log(person.hasOwnProperty('name')); // Böyle bir metod yazmadık, bu nereden gelmekte? */

// OBJECT + name, surname, age , fullName() ----> person

/* const myObj = {};
console.log(myObj);
console.log(myObj.toString()); */

// OBJECT ----> myObj (TÜM NESNELERİN EN BASİTİNDE BULUNAN TEMEL NESNE)

/* function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function () {
    return this.name + ' ' + this.surname;
  };
}

const arin = new Person('Arin', 'Çekiç', 6);
console.log(arin); */

// OBJECT +  name, surname, age , fullName() ----> Person -----> arin
// Arin'in prototype'ı Person, Person'un prototype'i OBJECT temel nesnesi(PROTOTYPE...)

/* console.log(arin.toString());
console.log(arin.hasOwnProperty('age'));
console.log(arin.__proto__); */

/* const elis = new Person('Elis', 'Çekiç', 4);
console.log(elis);
elis.job = 'Child';
console.log(elis);
console.log(elis.toString()); */

// OBJECT +  name, surname, age , fullName() ----> Person + job  -----> elis

// ------Prototype var olan bir metodun üzerine yazmak--------------

/* elis.toString = function () {
  return 'Elisssss';
};
console.log(elis.toString()); */

/* function Person(name, surname, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.fullName = function () {
  return this.name + ' ' + this.surname;
};

Person.prototype.surname = 'Çekiç';

const elis = new Person('Elis', 'Çekiç', 4);

const arin = new Person('Arin', 'Çekiç', 6);

console.log(elis.fullName()); */

// Prototypal Inheritance

const person = {
  name: 'xxxxxx',
  surname: 'yyyyyyy',
  age: 0,
  fullName: function () {
    return this.name + ' ' + this.surname;
  },
};

const arin = Object.create(person);
console.log(arin);
console.log(arin.name);

arin.name = 'Arin';
console.log(arin);
console.log(arin.age);
arin.age = 6;
console.log(arin.age);
console.log(arin);

console.log(arin.hasOwnProperty('age'));
console.log(arin.hasOwnProperty('surname')); // false --->Protoype'ında

console.log('surname' in arin); // Prototype'da olsun olmasın true döner...
