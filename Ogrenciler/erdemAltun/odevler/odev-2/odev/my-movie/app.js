const form = document.getElementById("movie-form");
const movieName = document.querySelector("#name");
const moviePoster = document.querySelector("#pic");
const movieDirector = document.querySelector("#director");
const movieDate = document.querySelector("#visiondate");
const movielist = document.querySelector(".movie-list");
const moviefilter = document.querySelector("#filter");
const movieClear = document.querySelector("#clear-movies");
const firstCardbody = document.querySelectorAll(".card-body")[0];
const secondCardbody = document.querySelectorAll(".card-body")[1];

function Movie(poster, name, director, visiondate) {
  this.poster = poster;
  this.name = name;
  this.director = director;
  this.visiondate = visiondate;
}

document.addEventListener("DOMContentLoaded", loadDefaultFilmsToUI);

function loadDefaultFilmsToUI() {
  const initialized = localStorage.getItem("initialized");
  if (!initialized) {
    const movies = [
      new Movie(
        "https://cdn1.ntv.com.tr/gorsel/xTHnkzlzxk6gqOx0Uc3mcg.jpg?width=1000&mode=both&scale=both&v=1655042592950",
        "Avengers Age Of Ultron",
        "Joss Whedon",
        "1 Mayıs 2015"
      ),
      new Movie(
        "https://tr.web.img2.acsta.net/pictures/18/03/16/15/01/4344531.jpg",
        "Avengers Infinity War",
        "Anthony Russo, Joe Russo",
        "27 Nisan 2018"
      ),
    ];
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("initialized", true);
  }
}

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addMovie);
  document.addEventListener("DOMContentLoaded", allMovieLoad);
  moviefilter.addEventListener("keyup", movFilter);
  secondCardbody.addEventListener("click", deletemovie);
  movieClear.addEventListener("click", clearAllMovies);
}

function deletemovie(e) {
  const elm = e.target;
  if (elm.className === "fa fa-remove") {
    elm.parentElement.parentElement.parentElement.remove();
    deleteMovInStorage(
      elm.parentElement.parentElement.parentElement.childNodes[1].textContent
    );
    ui.showAlert("success", "Film Başarıyla Silindi...");
  }
}

function clearAllMovies() {
  while (movielist.firstChild != null) {
    movielist.removeChild(movielist.firstChild);
  }
  localStorage.removeItem("movies");
}

function deleteMovInStorage(name) {
  let movies = _getMovieFromStorage();

  movies.forEach(function (mov, index) {
    if (mov.name == name) {
      console.log(mov.name + " " + index);
      movies.splice(index, 1);
    }
  });

  localStorage.setItem("movies", JSON.stringify(movies));
}

function addMovie(e) {
  e.preventDefault();

  const newName = movieName.value.trim();
  const newPic = moviePoster.value.trim();
  const newType = movieDirector.value.trim();
  const newDate = movieDate.value.trim();

  if (newName == "" || newPic == "" || newType == "" || newDate == "") {
    ui.showAlert("danger", "Lütfen tüm alanları doldurunuz!!!");
  } else {
    addMovieToUI(newName, newPic, newType, newDate);
    storage.addMovieToStorage(newName, newPic, newType, newDate);
    clearInputs();
    ui.showAlert("success", "Favori filminiz başarıyla eklenmiştir");
  }

  return false;
}

function addMovieToUI(name, pic, type, visiondate) {
  const listItem = document.createElement("tr");
  const movPoster = document.createElement("td");
  const movName = document.createElement("td");
  const movType = document.createElement("td");
  const movVisionDate = document.createElement("td");
  const linkTd = document.createElement("td");
  const link = document.createElement("a");

  movPoster.innerHTML = `<img src="${pic}" width="100">`;
  movName.textContent = name;
  movType.textContent = type;
  movVisionDate.textContent = visiondate;
  movName.classList = "name";
  movType.classList = "type";
  movVisionDate.classList = "visiondate";

  movPoster.setAttribute("scope", "row");

  link.href = "#";
  link.classList = "delete-item";
  link.innerHTML = '<i class = "fa fa-remove"></i>';

  linkTd.appendChild(link);
  listItem.appendChild(movPoster);
  listItem.appendChild(movName);
  listItem.appendChild(movType);
  listItem.appendChild(movVisionDate);
  listItem.appendChild(linkTd);
  movielist.appendChild(listItem);
}

function allMovieLoad() {
  let movies = _getMovieFromStorage();

  movies.forEach((mov) => {
    const name = mov.name;
    const poster = mov.poster;
    const director = mov.director;
    const visiondate = mov.visiondate;

    addMovieToUI(name, poster, director, visiondate);
  });
}

function _getMovieFromStorage() {
  let movies;

  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }

  return movies;
}

const storage = new Lclstorage();

function movFilter(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".name");
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      const alert = document.querySelector(".alert");
      if (!alert) {
        ui.showAlert("warning", "Aradığınız Film Bulunamadı!");
      }
      listItem.parentElement.setAttribute("style", "display:none !important");
    } else {
      listItem.parentElement.setAttribute("style", "display:table-row");
    }
  });
}

const ui = new newUi();

function clearInputs() {
  movieName.value = "";
  moviePoster.value = "";
  movieDirector.value = "";
  movieDate.value = "";
}
