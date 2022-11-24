const form = document.querySelector("#movie-form");
const submitbutton = document.getElementById("submit");
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

document.addEventListener("DOMContentLoaded", UI.loadDefaultFilmsToUI);

eventListeners();
function eventListeners() {
  form.addEventListener("submit", Add.addMovie);
  moviePic.addEventListener("change", UI.preview);
  document.addEventListener("DOMContentLoaded", Add.allMovieLoad);
  moviefilter.addEventListener("keyup", UI.movFilter);
  secondCardbody.addEventListener("click", Delcel.deletemovie);
  secondCardbody.addEventListener("click", Add.editMovie);
  movieClear.addEventListener("click", Delcel.clearAllTodos);
};
