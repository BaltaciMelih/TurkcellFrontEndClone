let films = [];
let tableBodyEl = document.getElementById("tableBody");
let filmNameEl = document.getElementById("filmName");
let filmDirectorEl = document.getElementById("filmDirector");
let filmYearEl = document.getElementById("filmYear");
let filmBannerEl = document.getElementById("filmBanner");
let saveEl = document.getElementById("saveEl");
let clearEl = document.getElementById("clear");

saveEl.addEventListener("click", UI.addNewFilm);
clearEl.addEventListener("click", UI.clearFilms);

function setFilms() {
  films = localStorage.getItem("films")
    ? JSON.parse(localStorage.getItem("films"))
    : [];
  if (films.length < 1) {
    const initialFilms = [
      new Movie(
        "Prestige",
        "2006-10-02",
        "Christopher Nolan",
        "https://tr.web.img3.acsta.net/pictures/bzp/01/108998.jpg"
      ),
      new Movie(
        "Pan's Labyrınth",
        "2006-07-04",
        "Guillermo del Toro",
        "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"
      ),
    ];
    films = initialFilms;
    localStorage.setItem("films", JSON.stringify(initialFilms));
  }
  UI.showFilms(films);
}

function deletMovie(index) {
  films = JSON.parse(localStorage.getItem("films"));
  films.map((el, i) => {
    if (i == index) {
      films.splice(index, 1);
    }
  });
  localStorage.setItem("films", JSON.stringify(films));
  document.getElementById(index).remove();
  UI.displayMessage("Film Silindi", "primary");
}

function editMovie(index) {
  films = JSON.parse(localStorage.getItem("films"));
  films.map((el, i) => {
    if (i == index) {
      filmNameEl.value = films[index].name;
      filmDirectorEl.value = films[index].director;
      console.log(films[index].year);
      filmYearEl.value = films[index].year;
      filmBannerEl.value = films[index].bannerUrl;
      films.splice(index, 1);
    }
  });
  document.getElementById(index).remove();
  localStorage.setItem("films", JSON.stringify(films));
}
