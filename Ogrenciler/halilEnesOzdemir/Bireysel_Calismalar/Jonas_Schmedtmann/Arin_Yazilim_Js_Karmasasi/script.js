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

/* const person = {
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
 */
// ---------------- OBJECT PART 3 ---------------

//1 -> Shorthand Properties

// let name = 'arin',
//   age = 5;

// ESKİ USÜL
/* const myObj = {
  name: name,
  age: age,
}; */

// YENİ USÜL -> Key ve value ikilisi aynıysa tekini ver yeter paşam :)

// const myObj = {
//   name,
//   age,
// };

// console.log(myObj);

//2 -> Computed Property Names

// ESKİ USÜL

/* let prop1 = 'name';

let myObj = {};

myObj[prop1] = 'arin';
console.log(myObj); */

// YENİ USÜL

// let prop1 = 'name';

// BOŞ NESNE OLUŞTURMAYA GEREK KALMADI..., kütüphanelerde bu özellik çok sık kullanılır.

// let myObj = {
//   [prop1]: 'arin',
// };

// console.log(myObj);

//3 -> Short Method Syntax
/* 
const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName: function () {
    return this.name + ' ' + this.surname;
  },
}; */

// const person = {
//   name: 'John',
//   surname: 'Doe',
//   age: 40,
//   fullName() {
//     return this.name + ' ' + this.surname;
//   },
// };

//  İki nokta ve Function ifadesinden kurtulup biraz daha  kısa yazabiliyoruz.

//4 ---------------------- OBJECT DESTRUCTURING ------------------

/* const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName() {
    return this.name + ' ' + this.surname;
  },
}; */

/* let myVar1 = person.name;
console.log(myVar1);

let myVar2 = person.age;
console.log(myVar2); */

// let { name: myVar1, age: myVar2 } = person;
// console.log(myVar1, myVar2);

// let { name: name, age: age } = person;
// console.log(name, age);

// let { name, age } = person;
// console.log(name, age);

/* const books = [
  {
    title: 'Kırmızı Pazartesi',
    author: 'Haruki Murakami',
    pageNum: 296,
    imageURL: 'https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg',
    topic:
      '1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.',
  },
  {
    title: 'Şeker Portakalı',
    author: 'Jose Muro de Vasconselos',
    pageNum: 200,
    imageURL: 'https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg',
    topic:
      'İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.',
  },
  {
    title: 'En Uzun Yüzyıl',
    author: 'İlber Ortaylı',
    pageNum: 296,
    imageURL: 'https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg',
    topic:
      '1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.',
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    pageNum: 200,
    imageURL: 'https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg',
    topic:
      'İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.',
  },
  {
    title: 'Karamazov Kardeşler',
    author: 'Fyodor Mihayloviç Dostoyevski',
    pageNum: 200,
    imageURL: 'https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg',
    topic:
      'İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.',
  },
  {
    title: 'Sultanın Korsanları',
    author: 'Emrah Safa Gürcan',
    pageNum: 296,
    imageURL: 'https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg',
    topic:
      '1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.',
  },
]; */

// for (const { title, author, pageNum } of books) {
//   console.log(title + ': ' + author + ' ' + pageNum);
// }

//  ------------------- SPREAD OPERATOR (Object Literals) -------------

/* const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName() {
    return this.name + ' ' + this.surname;
  },
};

let person2 = { ...person };
console.log(person2); */

/* myObj1 = {
  name: 'Arin',
  age: 6,
};

myObj2 = {
  job: 'Student',
  gender: 'female',
};

const arin = { ...myObj1, ...myObj2, school: 'Zehra Baysal' };
console.log(arin); */

//  ------------------- REST OPERATOR (Object Literals) -------------

/* const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName() {
    return this.name + ' ' + this.surname;
  },
};

const { name, surname, ...rest } = person;
console.log(rest); */

//  ------------------- OBJECT VALUES-OBJECT ENTRIES -------------

/* const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName() {
    return this.name + ' ' + this.surname;
  },
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person)); */
