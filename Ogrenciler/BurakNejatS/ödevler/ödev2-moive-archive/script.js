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
  filmArsivListele();
  //}
}

function filmArsivListele() {
  let allItems = JSON.parse(localStorage.getItem("listFilm"));
  console.log("allItems:", allItems);
  console.log("filmList:", filmList);
  //filmListesi.innerHTML = '';
  for (let i = 0; i < allItems?.length; i++) {
    const items = document.createElement("div");
    items.className = "d-flex cardContainer align-items-center";

    const divAdi = document.createElement("div");
    divAdi.innerHTML = allItems[i]?.filmAdi;
    divAdi.className = "col-md-3";

    const divYonetmen = document.createElement("div");
    divYonetmen.innerHTML = allItems[i]?.filmYonetmeni;
    divYonetmen.className = "col-md-3";

    const divTarih = document.createElement("div");
    divTarih.innerHTML = allItems[i]?.izlenilenTarih;
    divTarih.className = "col-md-3";

    const img = document.createElement("img");
    img.src = allItems[i]?.filmAfisi;
    img.className = "col-md-3";

    items.appendChild(img);
    items.appendChild(divAdi);
    items.appendChild(divYonetmen);
    items.appendChild(divTarih);
    filmListesi.appendChild(items);
    console.log("filmListesi:", filmListesi);
  }
}

filmArsivListele();

function filmleriSil() {
  filmList = [];
  filmListesi.innerHTML = "";
  deleteItem(sessionKey.Key1);
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

