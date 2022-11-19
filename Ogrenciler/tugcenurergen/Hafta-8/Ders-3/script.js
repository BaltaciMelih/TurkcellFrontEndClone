//ödev2 2 fazdan oluşacak 1. aşama bugünkü dersteki prototiplerin kulanımından
//2. fazı da pzt class haliyle yapılacak.
//Local veya session storage Kullanılacak
//Film koleksiyoneri olduğumuzu düşün. 4 input olacak filmin adı filmin yönetmeni, tarihi ve afişi.
//ekranda bunlar listelenecek. 
/**film adı yönetmen adı tarihi ve resim url i input olarak alınacak. 
 * ekle butonuna basıldığında listeye bir item ekleyecek. film afişi adı ve yönetmeni yazacak.
 * listelenen itemların düzenle ve sil butonu olacak ve hepsini sil butonu bulunacak.
 * film.js film constructou olup film objesi üretilebilir. 
 * storage.js diye ayrı bir dosya olup orada yönetebiliriz.
 * ui js diye ayrı bir dosya olabilir. 
 * dosya dosya oop mantığıyla çalışılmalı.
 */



//object literal
// const person1 = {
//   name: "varol",
//   age: 36,
//   showInfo: function () {
//     console.log("bilgiler gösteriliyor...");
//   },
// };

// const person2 = {
//   name: "okan",
//   age: 20,
//   showInfo: function () {
//     console.log("bilgiler gösteriliyor...");
//   },
// };

// const date = new Date(); //**buradaki date bir yapıcı fonksiyon içerisindeki constructor sayesinde date diye bir obje tanımlanmş olur;

//YAPICI FONKSİYON - CONSTRUCTOR ---
function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  //**burada oluşturulan showInfo fonksiyonu objenin prototoipinde değil basitçe belleğinde tutulur
  //**yani her obje için gereksizce oluşturulur.
  //**direkt prototipe verilirse daha verimli olur çünkü her obje için miras alınabilir. tekrar tekrar oluşturulmasına gerek yok
  //   this.showInfo = function () {
  //     console.log("bilgiler gösteriliyor...");
  //   };
  //   this.toString = function () { //kalıtım olarak alınan toString override edilebilir
  //     console.log(`
  //     isim: ${this.name}
  //     yaş: ${this.age}
  //     maaş: ${this.salary}`);
  //   }
  //
}
//**tek bir yerde oluşturup prototip olarak kullanılabişlir

//**oluşturduğumuz employee objesinin prototipine göndermiş olduk
//**employeeden oluşturulan objelerde kullanılabilir oldu
//**bu şekilde prototipte oluşturulduğunda objenin içerisinde fonksiyon oluşmaz, prototipten miras alınarak kullanılır.
//**objenin prototipi değil employeenin prototipidir.
//**genel objenin prototipine de fonksiyon yollayabiliyoruz. */
Employee.prototype.showInfos = function () {
  console.log("bilgiler gösteriliyor...");
};

Object.prototype.showInfos = function () {
  console.log(`
isim: ${this.name}
yaş: ${this.age}
maaş: ${this.salary}`);
};

//**employeeden bağımsız olan objede de showinfosu kullanabildik çünkü objenin prototipine verdik.
const person4 = {
  name: "varol",
  age: 36,
  //**buraya showInfo methodu yeniden yazılırsa prototipten miras alınan showInfos ezilmiş olur
};

const person1 = new Employee("varol", 36, 25000);
const person2 = new Employee("tuğçe", 22, 15000);
const person3 = new Employee("Bilgehan", 20, 15000);

person4.showInfos(); //employeeden bağımsız oluşturulan person4 objesi
person1.showInfos();

//yapıcı fonksiyon constructorlar Pascalcase yazılır
function Person(){
    this.salary = 5000;
}

// Person.prototype = Object.create(Employee.prototype); //burada employeeden miras al dedik ama aşağıdakinde oradan oraya kopyalama yapmış olduk
Person.prototype = Employee.prototype; //**aynı işlemi yapar ama farklı yollarla */
//bir prototip miras alındığında eskisi siliniyor mu?


const person5 = new Person();
person5.toString();
console.log(person5);
