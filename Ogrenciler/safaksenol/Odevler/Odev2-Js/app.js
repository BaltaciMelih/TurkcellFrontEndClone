const form = document.querySelector("#movie-form");
const movieName = document.querySelector("#name");
const moviePic = document.querySelector("#pic");
const movieType = document.querySelector("#type");
const movieVisionDate = document.querySelector("#visiondate");
const movielist = document.querySelector(".movie-list");
const moviefilter = document.querySelector("#filter");
const movieClear = document.querySelector("#clear-movies");
const previewPoster = document.querySelector("#previewPoster");
const firstCardbody = document.querySelectorAll(".card-body")[0];
const secondCardbody = document.querySelectorAll(".card-body")[1];

function Movie(poster, name, type, visiondate) { 
  this.poster = poster;
  this.name = name;
  this.type = type;
  this.visiondate = visiondate;
}
  document.addEventListener("DOMContentLoaded", loadDefaultFilmsToUI);

  function loadDefaultFilmsToUI() {
  const initialized = localStorage.getItem("initialized");
  if (!initialized) {
   const movies = [
    new Movie(
        "https://tr.web.img4.acsta.net/pictures/16/08/16/10/53/130303.jpg",
       "Sully",
       "Clint Eastwood",
     "9 Eylül 2016"
     ),
       new Movie(
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
       "Matrix",
        "Lana Wachowski",
        "3 Eylül 1999"
     ),
   ];
   localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("initialized", true);
 }
}

const ui = new UI();
const storage = new Storage();

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addMovie);
  moviePic.addEventListener("change", preview);
  document.addEventListener("DOMContentLoaded", allMovieLoad);
  moviefilter.addEventListener("keyup", movFilter);
  secondCardbody.addEventListener("click", deletemovie);
  secondCardbody.addEventListener("click", editMovie);
  movieClear.addEventListener("click", clearAllTodos);
}
function deletemovie(e) {
  const elm = e.target;
  if (elm.className === "fa fa-remove") {
    elm.parentElement.parentElement.parentElement.remove();
    storage.deleteMovInStorage(
      elm.parentElement.parentElement.parentElement.childNodes[1].textContent
    );
    ui.showAlert("warning", "Film Başarıyla Silindi...");
  }
}

function editMovie(e) {
  const elm = e.target;
  if (elm.className === "fa fa-edit") {
    elm.parentElement.parentElement.parentElement.remove();
    let movies = storage._getMovieFromStorage();
    movies.forEach(function (movie) {
      if (movie.name === elm.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling) {
        movieName.value = movie.name;
        moviePic.value = movie.poster;
        movieType.value = movie.type;
        movieVisionDate.value = movie.visiondate;
        console.log(elm.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling);
      }
      })
    // storage.deleteMovInStorage(
    //   elm.parentElement.parentElement.parentElement.childNodes[1].textContent
    // );

    ui.showAlert("dark", "Film düzenleme modu aktif!");
  }
}

function clearAllTodos() {
  while (movielist.firstChild != null) {
    movielist.removeChild(movielist.firstChild);
  }
  localStorage.removeItem("movies");
}

function addMovie(e) {
  const newName = movieName.value.trim();
  const newPic = moviePic.value.trim();
  const newType = movieType.value.trim();
  const newDate = movieVisionDate.value.trim();

  if (newName == "" || newPic == "" || newType == "" || newDate == "") {
    ui.showAlert("danger", "Lütfen tüm alanları doldurunuz!!!");
  } else {
    ui.addMovieToUI(newName, newPic, newType, newDate);
    storage.addMovieToStorage(newName, newPic, newType, newDate);
    clearInputs();
    ui.showAlert("success", "Favori filminiz başarıyla eklenmiştir");
  }

  e.preventDefault();
}

function allMovieLoad() {
  let movies = storage._getMovieFromStorage();
  movies.forEach((mov) => {
    const name = mov.name;
    const poster = mov.poster;
    const type = mov.type;
    const visiondate = mov.visiondate;
    ui.addMovieToUI(name, poster, type, visiondate);
  });
}

function movFilter(e) {
  const text = e.target.value.toLowerCase();
  const cols = document.querySelectorAll(".name");
  cols.forEach(function (keys) {
    if (keys.textContent.indexOf(text) === -1) {
      keys.parentElement.setAttribute("style", "display:none !important");
    } else {
      keys.parentElement.setAttribute("style", "display:table-row");
    }
  });
}

function clearInputs() {
  movieName.value = "";
  moviePic.value = "";
  movieType.value = "";
  movieVisionDate.value = "";
  previewPoster.setAttribute(
    "src",
    "https://semantic-ui.com/images/wireframe/square-image.png"
  );
}

function preview() {
  const poster = moviePic.value;
  previewPoster.setAttribute("src", poster);
}
