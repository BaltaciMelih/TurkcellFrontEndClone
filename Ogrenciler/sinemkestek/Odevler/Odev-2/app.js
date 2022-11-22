let films = [];
let tableBodyEl = document.getElementById("tableBody");
let filmNameEl = document.getElementById("filmName");
let filmDirectorEl = document.getElementById("filmDirector");
let filmYearEl = document.getElementById("filmYear");
let filmBannerEl = document.getElementById("filmBanner");
let saveEl = document.getElementById("saveEl");
let clearEl = document.getElementById("clear");
// Movie constructor//
var Film = function (name, year, director, bannerUrl) {
  this.name = name;
  this.year = year;
  this.director = director;
  this.bannerUrl = bannerUrl;
};
const ui = new UI();
//Localden 2 film gelecek
function setFilms() {
  films = localStorage.getItem("films")
    ? JSON.parse(localStorage.getItem("films"))
    : [];
  if (films.length < 1) {
    const initialFilms = [
      new Film(
        "Prestige",
        "2006",
        "Christopher Nolan",
        "https://tr.web.img3.acsta.net/pictures/bzp/01/108998.jpg"
      ),
      new Film(
        "Pan's Labyrınth",
        "2006",
        "Guillermo del Toro",
        "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"
      ),
    ];
    films = initialFilms;
    localStorage.setItem("films", JSON.stringify(initialFilms));
    // ui.displayMessage("Eklendi", "success");
  }
  ui.showFilms(films);
}

//add movie

// saveEl.addEventListener("click", ui.addMovie);
saveEl.addEventListener("click", () => {
  let name = filmNameEl.value;
  let director = filmDirectorEl.value;
  let year = filmYearEl.value;
  let bannerUrl = filmBannerEl.value;
  let newFilm = [];
  newFilm.push(new Film(name, year, director, bannerUrl));
  films.push(newFilm[0]);
  localStorage.setItem("films", JSON.stringify(films));
});

//tümünü sil
clearEl.addEventListener("click", ui.clearFilms);
