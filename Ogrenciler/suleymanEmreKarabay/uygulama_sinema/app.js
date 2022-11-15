const koltukNumaralari = document.querySelectorAll(".koltuk");
const satinAlButton = document.querySelector("#satinAl");
const REZERV_KOLTUKLAR_KEY = "rezerveKoltuklar";
const SATIN_ALINAN_KOLTUKLAR_KEY = "satinAlinanKoltuklar";

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

function satinAl() {
  let rezerveEdilenKoltuklar = getRezerveKoltuklarFromStorage();
  let satinAlinanKoltuklar = getSatinAlinanKoltuklarFromStorage();

  rezerveEdilenKoltuklar.forEach((element) => {
    satinAlinanKoltuklar.push(element);
  });
  setSatınAlınanKoltuklar(satinAlinanKoltuklar);
  rezerveEdilenKoltuklar = [];
  setRezervKoltuklar(rezerveEdilenKoltuklar);
  satinAlinanKoltuklar();
}

function rezerveEt(e) {
  let rezerveEdilenKoltuklar = getRezerveKoltuklarFromStorage();
  if (!rezerveEdilenKoltuklar.includes(e.target.value)) {
    e.target.className += " bg-danger";
    rezerveEdilenKoltuklar.push(e.target.value);
    setRezervKoltuklar(rezerveEdilenKoltuklar);
  } else {
    e.target.classList.remove("bg-danger");
    const index = rezerveEdilenKoltuklar.indexOf(e.target.value);
    if (index > -1) {
      rezerveEdilenKoltuklar.splice(index, 1);
    }
    setRezervKoltuklar(rezerveEdilenKoltuklar);
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
  console.log("çalıştı");
  const satinAlinanKoltuklar = getSatinAlinanKoltuklarFromStorage();
  setSatınAlınanKoltuklar(satinAlinanKoltuklar);
  koltukNumaralari.forEach((element) => {
    satinAlinanKoltuklar.forEach((element2) => {
      if (element.value === element2) {
        element.className += "bg-info border-0 disabled";
      }
    });
  });
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
