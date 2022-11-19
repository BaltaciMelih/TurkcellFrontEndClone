//Object Literal
const person1 = {
  name: "Sinem",
  age: "26",
  showInfo: function () {
    console.log("Bilgiler gösteriliyor...");
  },
};
const person2 = {
  name: "Sezer",
  age: "29",
  showInfo: function () {
    console.log("Bilgiler gösteriliyor...");
  },
};

// const date=new Date();

//Constructor
function employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  //   this.showInfo = function () {
  //     console.log("bilgiler gösteriliyor");
  //   };--employee prototype ına  gönderdik.
  //Tek bir yapıcı fonksiyon üzerinden farklı objeler üretmemizi sağlar.
  //Ram üzerinde tutulan maaliyeti azaltır
  // fonksiyon adı büyük harf kullanabilirsin.

  //   this.toString = function () {
  //     console.log(
  //       ` isim:${this.name}
  //         yas:${this.age}
  //         maas:${this.salary}`
  //     );
  //   };
}

employee.prototype.showInfo = function () {
  console.log("bilgiler gösteriliyor");
}; //employee prototype'ına eklenmiş oldu.

const person4 = new employee("Sinem", 26, 5000); //prototype object constructor:employee
const person5 = new Person();
console.log(person4);
person4.showInfo();
console.log();

function Person() {
  this.salary = 5000;
}
Person.prototype = Object.create(employee.prototype);
