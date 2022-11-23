const ui = new UI();
const storage = new Storage();
let filmList = document.getElementById("filmler");
let filmName = document.getElementById("filmName");
let filmDirector = document.getElementById("filmDirector");
let filmDate = document.getElementById("filmDate");
let filmUrl = document.getElementById("filmBanner");
let addFilm = document.getElementById("film-add");
let clearAll = document.getElementById("delete-all");
let films = [];

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", defaultFilms);
  addFilm.addEventListener("click", addMovie);
  clearAll.addEventListener("click", ui.clearFilms);
  filmList.addEventListener('click', deleteFilm);
}

function defaultFilms() {
  films = storage.defaultMovie();
    const dFilms = [
      new Film(
        "Avengers 1",
        "Joss Whedon",
        "04/05/2012",
        "https://tr.web.img3.acsta.net/medias/nmedia/18/85/49/05/20085945.jpg"
      ),
      new Film(
        "Avengers 2",
        "Joss Whedon",
        "01/05/2015",
        "https://tr.web.img4.acsta.net/pictures/15/08/06/07/51/269807.jpg"
      ),
    ];
    films = dFilms;
    localStorage.setItem("films", JSON.stringify(dFilms));
  
  ui.addTodoToUI(films);

}

function addMovie() {
  let name = filmName.value;
  let director = filmDirector.value;
  let date = filmDate.value;
  let url = filmUrl.value;
  let newFilm = [];
  if (name === "" || director === "" || date == "" || url === "") {
    ui.displayMessage("Tüm alanları doldurunuz", "danger");
  } else {
  newFilm.push(new Film(name, director, date,url));
  films.push(newFilm[0]);
  ui.addTodoToUI(newFilm);
  filmName.value = "";
  filmDirector.value = "";
  filmDate.value = "";
  filmUrl.value = "";
  localStorage.setItem("films", JSON.stringify(films));
  ui.displayMessage("Film Başarıyla Yüklendi","success");
};
};

function deleteFilm(e) {
    ui.deleteMovie(e.target);
    storage.deleteMovie(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
     ui.displayMessage("Silme işlemi gerçekleşti", "success");
  };