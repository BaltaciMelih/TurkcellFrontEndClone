let filmList = document.getElementById("filmler");
let filmName = document.getElementById("filmName");
let filmDirector = document.getElementById("filmDirector");
let filmDate = document.getElementById("filmDate");
let filmUrl = document.getElementById("filmBanner");
let addFilm = document.getElementById("film-add");
let clearAll = document.getElementById("delete-all");
let filter = document.getElementById("filter");
let films = [];

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", defaultFilms);
  addFilm.addEventListener("click", addMovie);
  clearAll.addEventListener("click", UI.clearFilms);
  filmList.addEventListener("click", deleteFilm);
  filter.addEventListener("keyup", filterFilms);
}

function defaultFilms() {
  films = Storage.defaultMovie();
  if (films.length < 1) {
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
  }
  UI.addTodoToUI(films);

}

function addMovie() {
  let name = filmName.value;
  let director = filmDirector.value;
  let date = filmDate.value;
  let url = filmUrl.value;
  let newFilm = [];
  if (name === "" || director === "" || date == "" || url === "") {
    UI.displayMessage("Tüm alanları doldurunuz", "danger");
  } else {
  newFilm.push(new Film(name, director, date,url));
  films.push(newFilm[0]);
  UI.addTodoToUI(newFilm);
  filmName.value = "";
  filmDirector.value = "";
  filmDate.value = "";
  filmUrl.value = "";
  localStorage.setItem("films", JSON.stringify(films));
  UI.displayMessage("Film Başarıyla Yüklendi","success");
};
};

 function deleteFilm(e) {
  if(e.target.id === "deleteFilm"){
     UI.deleteMovie(e.target);
     Storage.deleteMovie(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
      UI.displayMessage("Silme işlemi gerçekleşti", "success");
   };}
  
    function filterFilms(e){   
    let filterValue = e.target.value.toLowerCase();
    let listedFilms = document.querySelectorAll(".name");
    listedFilms.forEach(function (film) {
    const text = film.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      film.parentElement.setAttribute("style", "display:none !important");
    } else {
      film.parentElement.setAttribute("style", "display:table-row");
    }
  });
    }