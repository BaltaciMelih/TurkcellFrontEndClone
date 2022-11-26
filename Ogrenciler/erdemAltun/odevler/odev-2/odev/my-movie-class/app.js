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



document.addEventListener("DOMContentLoaded", Ui.loadDefaultFilmsToUI);

eventListeners();
function eventListeners() {
  form.addEventListener("submit", move.addMovie);
  document.addEventListener("DOMContentLoaded", Lclstorage.allMovieLoad);
  moviefilter.addEventListener("keyup", move.movFilter);
  secondCardbody.addEventListener("click", move.deletemovie);
  secondCardbody.addEventListener("click", edit.editMovie);
  movieClear.addEventListener("click", move.clearAllMovies);
}


