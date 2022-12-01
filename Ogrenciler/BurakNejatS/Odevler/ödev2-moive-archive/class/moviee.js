let films = [];
let filmAdi = document.getElementById("filmAdi");
let YönetmenAdi = document.getElementById("filmYonetmeni");
let izlenilenTarih = document.getElementById("izlenilenTarih");
let filmAfisi = document.getElementById("afis");
let filmKaydet = document.getElementById("filmiEkle");
let clearFilm = document.getElementById("clear-movies");
let filmBody = document.getElementById("tableBody");


var sessionKey = {
  Key1: "filmArsiv",
};

var filmList = [];
var singleFilm;
const filmListesi = document.getElementById("filmListesi");
const childFilm = document.getElementById("childFilm");
function filmEkle() {
  var film = {
    filmAfisi: document.getElementById("filmAfis").value,
    filmAdi: document.getElementById("filmAdi").value,
    filmYonetmeni: document.getElementById("filmYonetmeni").value,
    izlenilenTarih: document.getElementById("izlenilenTarih").value,
  };
  console.log("filmList:", filmList);

  filmList = [film];
  localStorage.setItem("listFilm", JSON.stringify(filmList));
  //addItem(sessionKey.Key1,JSON.stringify(filmList));
  Storage.filmArsivListele();
  //}
}

// function filmArsivListele(){

//   let allItems = JSON.parse(localStorage.getItem("listFilm"));
//   console.log("allItems:", allItems);
//   console.log("filmList:", filmList);
//   //filmListesi.innerHTML = '';
//   for (let i = 0; i < allItems?.length; i++) {
//     const items = document.createElement("div");
//     items.className = "col-md-12 d-flex cardContainer align-items-center";

//     const divAdi = document.createElement("div");
//     divAdi.innerHTML = allItems[i]?.filmAdi;
//     divAdi.className = " col-md-3";

//     const divYonetmen = document.createElement("div");
//     divYonetmen.innerHTML = allItems[i]?.filmYonetmeni;
//     divYonetmen.className = "container-fluid col-md-3";

//     const divTarih = document.createElement("div");
//     divTarih.innerHTML = allItems[i]?.izlenilenTarih;
//     divTarih.className = "container-fluid col-md-3";

//     const img = document.createElement("img");
//     img.src = allItems[i]?.filmAfisi;
//     img.className = "container-fluid col-md-3 ";

//     items.appendChild(img);
//     items.appendChild(divAdi);
//     items.appendChild(divYonetmen);
//     items.appendChild(divTarih);
//     filmListesi.appendChild(items);
//     console.log("filmListesi:", filmListesi);
//   }
// }


Storage.filmArsivListele();

function filmleriSil() {
  filmList = [];
  filmListesi.innerHTML = "";
  deleteItem(sessionKey.Key1);
  clearItems();
}

function getItem(key) {
  return localStorage.getItem(key);
}
function addItem(key, value) {
  localStorage.setItem(key, value);
}

function deleteItem(key) {
  localStorage.removeItem(key);
}

function clearItems() {
  localStorage.clear();
}


// function UI() {}

// UI.prototype.deleteFilmList = function () {
//   const ulDiv = document.querySelector("#tableBody");
//   ulDiv.innerHTML = "";
// };

// UI.prototype.deleteFilmItem = function (e) {
//   e.target.parentElement.parentElement.parentElement.remove();
// };

// function Storage() {}

// Storage.prototype.getFilmsFromStorage = function (KEY_NAME) {
//   if (localStorage.getItem(KEY_NAME) === null) {
//     KEY_NAME = [];
//   } else {
//     KEY_NAME = JSON.parse(localStorage.getItem(KEY_NAME));
//   }
//   return KEY_NAME;
// };

// Storage.prototype.deleteItemFromStorage = function (e) {
//   const silinecekID = e.target.parentElement.id;
//   let films = JSON.parse(localStorage.getItem(KEY_NAME));
//   films.forEach((element) => {
//     if (element.id == silinecekID) {
//       const index = films.indexOf(element);

//       if (index > -1) {
//         // only splice array when item is found
//         films.splice(index, 1); // 2nd parameter means remove one item only
//       }
//     }
//   });
//   localStorage.setItem(KEY_NAME, JSON.stringify(films));
// };

// Storage.prototype.updateFilmFromStorage = function () {
//   let films = JSON.parse(localStorage.getItem(KEY_NAME));
//   films.forEach((element) => {
//     if (element.id == id.value) {
//       element.adi = filmAdi.value;
//       element.yonetmen = YönetmenAdi.value;
//       element.afis = filmAfisi.value;
//       element.tarih = izlenilenTarih.value;
//     }
//     localStorage.setItem(KEY_NAME, JSON.stringify(films));
//   });
// };

// var sessionKey={
//   Key1:"filmArsiv"
// };

// var filmList=[];
// const filmListesi=document.getElementById("filmListesi");

// function filmEkleSession(adi,yonetmen,tarih,afis){

//   var film={

//     filmAdi:adi,
//     filmYonetmeni:yonetmen,
//     izlenilenTarih:tarih,
//     filmAfisi:afis
//   };
//   filmList.push(film);
//   addItem(sessionKey.Key1.JSON.stringify(filmList));
// }

// function filmEkle(){

//     console.log("deneme:",document.getElementById("filmAdi").value)
// var film = {
//   filmAdi: document.getElementById("filmAdi").value,
//   filmYonetmeni: document.getElementById("filmYonetmeni").value,
//   izlenilenTarih:document.getElementById("izlenilenTarih").value,
//   filmAfisi: document.getElementById("filmAfis").value
//   }
//   console.log("filmList:",filmList)
//   filmList.push(film);
//   addItem(sessionKey.Key1,JSON.stringify(filmList));
//   filmArsivListele();
//   }
// }

//   function filmArsivListele(){
//     console.log("filmList:",filmList)
//     filmListesi.innerHTML = '';
//     for (let i = 0; i < filmList?.length; i++) {
//     const listItem = document.createElement("div");

//     const divAdi = document.createElement("div");
//     divAdi.innerHTML = filmList[i]?.filmAdi;
//     divAdi.className = "col-md-3";

//     const divYonetmen = document.createElement("div");
//     divYonetmen.innerHTML = filmList[i]?.filmYonetmeni;
//     divYonetmen.className = "col-md-3";

//     const divTarih = document.createElement("div");
//     divTarih.innerHTML = filmList[i]?.izlenilenTarih;
//     divTarih.className = "col-md-3";

//     const img = document.createElement("img");
//     img.src = filmList[i].filmAfisi;
//     img.className = "col-md-3";

//     filmListesi.className = "list-group-item d-flex justify-content-between cardContainer";

//     filmListesi.appendChild(divAdi);
//     filmListesi.appendChild(divYonetmen);
//     filmListesi.appendChild(divTarih);
//     listItem.appendChild(img);
//     console.log("filmListesi:",filmListesi)

//     }
//     }

//     function filmleriSil(){
//     filmList = [];
//     filmListesi.innerHTML = '';
//     deleteItem(sessionKey.Key1);
//     }

//     function getItem(key) {
//     return localStorage.getItem(key);
//     }
//     function addItem(key,value) {
//     localStorage.setItem(key,value);
//     }

//     function deleteItem(key) {
//     localStorage.removeItem(key);
//     }

//     function clearItems() {
//     localStorage.clear();
//     }
