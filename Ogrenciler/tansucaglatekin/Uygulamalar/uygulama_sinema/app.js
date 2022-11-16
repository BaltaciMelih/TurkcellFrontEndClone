const koltukNumaralari = document.querySelectorAll(".koltuk");
const satinAlButton = document.querySelector("#satinAl");
const REZERV_KOLTUKLAR_KEY = "rezerveKoltuklar";
const SATIN_ALINAN_KOLTUKLAR_KEY = "satinAlinanKoltuklar";
let bilgiDiv = document.querySelector(".bilgi");
let ucretDiv = document.querySelector(".toplamUcret");

const BILET_UCRETI = 25;

eventListeners();
function eventListeners() {
  koltukNumaralari.forEach((element) => {
    element.addEventListener("click", rezerveEt);
  });
  satinAlButton.addEventListener("click", satinAl);

  document.addEventListener(
    "DOMContentLoaded",
    getSatinAlinanKoltuklarFromStorage
  );
  document.addEventListener("DOMContentLoaded", satinAlinanKoltuklar);
  document.addEventListener("DOMContentLoaded", rezerveEdilenKoltuklar);
}

function bilgiYazdirma() {
  let rezerveEdilenKoltuklar = getRezerveKoltuklarFromStorage();
  bilgiDiv.innerText = "Rezerve:";
  bilgiDiv.innerText += rezerveEdilenKoltuklar.toString();
  ucretDiv.innerText = "Toplam:";
  ucretDiv.innerText += rezerveEdilenKoltuklar.length * BILET_UCRETI;
  ucretDiv.innerText += " TL";
}

function bilgiSildirme() {
  let rezerveEdilenKoltuklar = getRezerveKoltuklarFromStorage();
  if (rezerveEdilenKoltuklar.length > 0) {
    bilgiYazdirma();
  } else {
    bilgiDiv.innerText = "";
    ucretDiv.innerText = "";
  }
}

function satinAl() {
  let rezerveEdilenKoltuklar = getRezerveKoltuklarFromStorage();
  let satinAlinanKoltuklarDizisi = getSatinAlinanKoltuklarFromStorage();

  rezerveEdilenKoltuklar.forEach((element) => {
    satinAlinanKoltuklarDizisi.push(element);
  });
  rezervRenkSil();
  setSatınAlınanKoltuklar(satinAlinanKoltuklarDizisi);
  rezerveEdilenKoltuklar = [];
  setRezervKoltuklar(rezerveEdilenKoltuklar);
  satinAlinanKoltuklar();
  bilgiSildirme();
}

function rezervRenkSil() {
  let rezerveEdilenKoltuklar = getRezerveKoltuklarFromStorage();

  koltukNumaralari.forEach((element) => {
    rezerveEdilenKoltuklar.forEach((element2) => {
      if (element.value === element2) {
        element.classList.remove("bg-danger");
      }
    });
  });
}

function rezerveEt(e) {
  let rezerveEdilenKoltuklar = getRezerveKoltuklarFromStorage();
  if (!rezerveEdilenKoltuklar.includes(e.target.value)) {
    e.target.className += " bg-danger";
    rezerveEdilenKoltuklar.push(e.target.value);
    setRezervKoltuklar(rezerveEdilenKoltuklar);
    bilgiYazdirma();
  } else {
    e.target.classList.remove("bg-danger");
    const index = rezerveEdilenKoltuklar.indexOf(e.target.value);
    if (index > -1) {
      rezerveEdilenKoltuklar.splice(index, 1);
    }
    setRezervKoltuklar(rezerveEdilenKoltuklar);
    bilgiSildirme();
  }
}

function setRezervKoltuklar(rezervKoltuklar) {
  localStorage.setItem(REZERV_KOLTUKLAR_KEY, JSON.stringify(rezervKoltuklar));
}

function setSatınAlınanKoltuklar(satınAlınanKoltuklar) {
  localStorage.setItem(
    SATIN_ALINAN_KOLTUKLAR_KEY,
    JSON.stringify(satınAlınanKoltuklar)
  );
}

function satinAlinanKoltuklar() {
  const satinAlinanKoltuklar = getSatinAlinanKoltuklarFromStorage();
  setSatınAlınanKoltuklar(satinAlinanKoltuklar);
  koltukNumaralari.forEach((element) => {
    satinAlinanKoltuklar.forEach((element2) => {
      if (element.value === element2) {
        element.className += " bg-info border-0 disabled";
      }
    });
  });
  bilgiYazdirma();
  bilgiSildirme();
}

function getSatinAlinanKoltuklarFromStorage() {
  let satinAlinanKoltuklar;
  if (localStorage.getItem("satinAlinanKoltuklar") === null) {
    satinAlinanKoltuklar = [];
  } else {
    satinAlinanKoltuklar = JSON.parse(
      localStorage.getItem("satinAlinanKoltuklar")
    );
  }
  return satinAlinanKoltuklar;
}

function rezerveEdilenKoltuklar() {
  const rezerveEdilenKoltuklar = getRezerveKoltuklarFromStorage();
  koltukNumaralari.forEach((element) => {
    rezerveEdilenKoltuklar.forEach((element2) => {
      if (element.value == element2) {
        element.className += "bg-danger border-0";
      }
    });
  });
}
function getRezerveKoltuklarFromStorage() {
  let rezerveKoltuklar;
  if (localStorage.getItem(REZERV_KOLTUKLAR_KEY) === null) {
    rezerveKoltuklar = [];
  } else {
    rezerveKoltuklar = JSON.parse(localStorage.getItem(REZERV_KOLTUKLAR_KEY));
  }
  return rezerveKoltuklar;
}
