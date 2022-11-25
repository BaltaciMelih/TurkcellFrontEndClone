const  filmArsivKey = "filmArsiv";//localStorage kullanılacak key tanımlandı.Bu keye gore ekleme -silme ve verileri getirme de kullanılacak 
const  firstItemKey = "firstItem";//localStorage kullanılacak key tanımlandı.Bu keye gore ekleme -silme ve verileri getirme de kullanılacak 
const  IndexKey = "indexValue";//localStorage kullanılacak key tanımlandı.Bu keye gore ekleme -silme ve verileri getirme de kullanılacak 
var tempId=0;

var filmList= [];///localStorage içerisinde bulunan filmlerin listesini tutmak için bir array tanımlandı.
const todoList = document.getElementById("todoList");/// todoList id ul objesi global bir değişkene atandı.Bu sayede ul içerisine film detayları img ve span olarak daha sonra javascript metod da eklencek
 

class Storage{
	getItem(key) {///localStorage key karşılık verileri getirir
		return localStorage.getItem(key);
	}
	addItem(key,value) {///localStorage key karşılık veri set eder
		localStorage.setItem(key,value);
	}

	deleteItem(key) {//////localStorage key karşılık veriyi siler
		localStorage.removeItem(key);   
	}

	clearItems() {///localStorage tüm  verileri siler
		localStorage.clear(); 
	}
 }
class Film  { ///class eklendi
	constructor(adi, yonetmen,tarih,afis) { ///Yapıcı metod parametreleri alır 
		const storage = new Storage();

	    index = parseInt(index) + 1; 
		storage.addItem(IndexKey,parseInt(index))
		this.id = index;
		this.adi = adi;///parametreler atandı.Property lere
		this.yonetmen = yonetmen;
		this.tarih = tarih;
		this.afis = afis;
	}
	filmKaydet() { ///array ekleme ve localStorage kaydetme metodu
      filmList.push(this);
      storage.addItem(filmArsivKey,JSON.stringify(filmList));
	}
	filmleriSil() {/// Tüm filmleri silme metodu array temizler  ve localStorage tamamen temizler
		 filmList = [];
		 todoList.innerHTML = '';
		 storage.deleteItem(filmArsivKey);
	}
	filmSil(id) {/// Tek film silme metodu 
		filmList = filmList.filter(function(el) { return el.id != id; }) ///array içinde elemanı bulur onun haricinde olanları tekrar liste atar ; 
		storage.addItem(filmArsivKey,JSON.stringify(filmList));//localStorage set eder
		film.filmListele();
	};
	filmDuzenle(id) {/// Tüm filmleri silme metodu array temizler  ve localStorage tamamen temizler
		const filmDetay = filmList.filter(function(el) { return el.id == id; })///array içinde elemanı bulur; 
		document.getElementById("filmAdi").value = filmDetay[0].adi;///array içinde bulunan elamanları html input set eder
		document.getElementById("filmYonetmeni").value = filmDetay[0].yonetmen;///array içinde bulunan elamanları html input set eder
		document.getElementById("filmCekildigiTarih").value = filmDetay[0].tarih;///array içinde bulunan elamanları html input set eder
		document.getElementById("filmAfis").value = filmDetay[0].afis;///array içinde bulunan elamanları html input set eder
		tempId = id; ///duzenleme için tempId içerisinde id saklanır ekle butonuna basarsa ilgili kayıt listeden silinir düzenleme yapılan kayıt yeni kayıt olarak eklenir
		 
		 
	}
	filmListele() {///Filmleri filmList array içerisinde bulunanları todoList içerine ekler
     todoList.innerHTML = '';
	 console.log(filmList)
		for (let i = 0; i < filmList.length; i++) {
			const listItem = document.createElement("li");///ul eklencek olan li create edildi
			
			const img = document.createElement("img");///img html element create edildi
			img.src = filmList[i].afis; /// resim path atandı
			img.className = "col-md-3";/// class özeliğine bootsrap 3 hücreleme mantığı için col-md-3 eklendi

			const spanAdi = document.createElement("span");
			spanAdi.innerHTML = filmList[i].adi;
			spanAdi.className = "col-md-2";

			const spanYonetmen = document.createElement("span");
			spanYonetmen.innerHTML = filmList[i].yonetmen;
			spanYonetmen.className = "col-md-2";

			const spanTarih = document.createElement("span");
			spanTarih.innerHTML = filmList[i].tarih;
			spanTarih.className = "col-md-1";

			const aSil = document.createElement("a");
			aSil.innerHTML = "Sil";
			aSil.className = "col-md-1";
			aSil.onclick = function() {film.filmSil(filmList[i].id)};
			
			const aDuzenle = document.createElement("a");
			aDuzenle.innerHTML = "Düzenle";
			aDuzenle.className = "col-md-2";
			aDuzenle.onclick = function() {film.filmDuzenle(filmList[i].id)};
			
			listItem.className = "list-group-item d-flex justify-content-between";


			listItem.appendChild(img);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(spanAdi);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(spanYonetmen);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(spanTarih);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(aSil);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(aDuzenle);///create edilen html'ler tek tek li ekleniyor.

			todoList.appendChild(listItem);//////create li  todoList ekleniyor.
		  
		}
		
	}
}

var film = new Film();
var storage = new Storage();

filmList =  JSON.parse(storage.getItem(filmArsivKey)); ///filmList array içerisine localStorage veriler atandı.

var index = storage.getItem(IndexKey);
if(index == null || index == NaN || index == "NaN"){
	index = 1;
	storage.addItem(IndexKey,1)
}
if(filmList == null){
	 filmList =[];///array temizlendi
}
console.log(storage.getItem(IndexKey))
if((filmList == null || filmList.length == 0)&& storage.getItem(firstItemKey) == null){ ///filmList eğer boş ise Default 2 film olması için kontrol eklendi.
    filmList =[];///array temizlendi
    film = new Film("La Casa De Papel", "Álex Pina","2017","https://i.pinimg.com/originals/8a/84/98/8a84988450be803533089edcd2c028e0.jpg");///film nesnesi içerisine parametreler gonderıldı.
    film.filmKaydet();///film kaydet metodu çağrıldı.
	film = new Film("SUITS", "Aaron Korsh", "2011","https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg");
	film.filmKaydet();	
	film.filmListele();///film listeleme metodu çağrıldı.
	storage.addItem(firstItemKey,1)
}
else{	
	film.filmListele();///filmList array içerisi dolu ise direk listeleme metodu çağrılır. 
}
function filmEkle(){/// film eklenmesş için html de çağrılan metod
    if(document.getElementById("filmAdi").value == 0){///filmAdi içerisinde yazılan karakter sayısı 0 dan büyük değilse alert vermesi sağlandı
        alert("Lütfen Film Adı Girin");
		return false;
    }
    if(document.getElementById("filmYonetmeni").value == 0){
        alert("Lütfen Film Yönetmeni Girin");
		return false;
    }
    if(document.getElementById("filmCekildigiTarih").value == 0){
        alert("Lütfen Film Tarihini Girin");
		return false;
    }
    if(document.getElementById("filmAfis").value == 0){
        alert("Lütfen Film Afiş Url Girin");
		return false;
    }
    else{
		
		if(tempId >0){
			film.filmSil(tempId);
			tempId = 0;
		}
	   film = new Film(document.getElementById("filmAdi").value,document.getElementById("filmYonetmeni").value,
	   document.getElementById("filmCekildigiTarih").value,document.getElementById("filmAfis").value);///film nesnesi içerisine parametreler gonderıldı.
	   film.filmKaydet(); ///film kaydet metodu çağrıldı.         
	   film.filmListele();///film listeleme metodu çağrıldı.
    }       
}
function filmleriSil(){/// tüm filmleri silmesi için hmtl tarafından çağrılan metod
	film.filmleriSil();
}

 
// Object Literal
// const person1 = {
//   name: "Varol",
//   age: 36,
//   showInfo: function () {
//     console.log("Bilgi gösteriliyor...");
//   },
// };
// const person2 = {
//   name: "Okan",
//   age: 20,
//   showInfo: function () {
//     console.log("Bilgi gösteriliyor...");
//   },
// };

// const date = new Date()

// Yapıcı Foknsiyon - Constructor

// function Employee(name, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
//   this.showInfo = function () {
//     console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age}
//     Maaş: ${this.salary}
//     `);
//   };
//   this.toString = function () {
//     console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age}
//     Maaş: ${this.salary}
//     `);
//   };
// }

// // Employee.prototype.showInfo = function () {
// //   console.log(`
// //     İsim: ${this.name}
// //     Yaş: ${this.age}
// //     Maaş: ${this.salary}
// //     `);
// // };

// Employee.prototype.toString = function () {
//   console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age}
//     Maaş: ${this.salary}
//     `);
// };

// function Person() {
//   this.salary = 5000;
// }

// // Object.prototype.showInfo = function () {
// //   console.log(`
// //     İsim: ${this.name}
// //     Yaş: ${this.age}
// //     Maaş: ${this.salary}
// //     `);
// // };

// Person.prototype = Object.create(Employee.prototype);

// // Person.prototype = Employee.prototype;

// const person3 = {
//   name: "Yaren",
//   age: 20,
//   salary: 4000,
//   showInfo: function () {
//     console.log("Bilgi gösteriliyor...");
//   },
// };

// const person4 = new Person();
// const person1 = new Employee("Varol", 36, 5000);
// // const person2 = new Employee("Bilgehan", 20, 10000);

// console.log(person1);
// // console.log(person2);
// // console.log(person3);
// // console.log(person4);

// person4.toString();

// // person1.toString();
// // person1.showInfo();
// // person2.showInfo();
// // person3.showInfo();
// // person1.toString();

// Class
// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   showInfo() {
//     console.log(`
//       İsim: ${this.name}
//       Yaş: ${this.age}
//       Maaş: ${this.salary}
//     `);
//   }
// }

// const Emp1 = new Employee("Varol", "37", 5000);

// Emp1.showInfo();
// console.log(Emp1);

// Static Functions
// class Mat {
//   static cube(x) {
//     console.log(x * x * x);
//   }
// }

// // const mat = new Mat();

// Mat.cube(3);

// Extend

// SuperClass, BaseClass
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;

//   }
//   showInfo() {
//     console.log(`
//       İsim: ${this.name}
//       Yaş: ${this.age}
//     `);
//   }

// }

// // Subclass, ChildClass
// class Employee extends Person {
//   constructor(name, age, salary) {
//     // this.name = name;
//     // this.age = age;
//     super(name, age);
//     this.salary = salary;
//   }
//   // Override
//   showInfo() {
//     console.log(`
//       İsim: ${this.name}
//       Yaş: ${this.age}
//       Maaş: ${this.salary}
//     `);
//   }
// }

// const emp = new Employee("Varol", 37, 5000);
// console.log(emp);
// emp.showInfo();