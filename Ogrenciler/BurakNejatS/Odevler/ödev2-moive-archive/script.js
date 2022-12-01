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
  storage.filmArsivListele();
  //}
}


const storage= new Storage();
storage.filmArsivListele();

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