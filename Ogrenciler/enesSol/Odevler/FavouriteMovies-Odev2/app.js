const storagePt = new Storage();
const ui = new UI();
const actions = new Actions();
const edit = new Edit();

const form = document.getElementById("movie-details");
const movieIdInput = document.getElementById("movieId");
const directorNameInput = document.getElementById("director");
const movieNameInput = document.getElementById("movie-name");
const movieImageInput = document.getElementById("movie-image");
const releaseDateInput = document.getElementById("releaseDateInput");
const movieList = document.querySelector(".list-group");
const clearButton = document.getElementById("clear-movies");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded", ui.loadDefaultFilmsToUI);

eventListeners();
function eventListeners() {
  form.addEventListener("submit", actions.addMovie);
  clearButton.addEventListener("click", actions.clearAllMovies);
  filter.addEventListener("keyup", actions.filterMovies);
  document.addEventListener("DOMContentLoaded", ui.loadAllMoviesToUI);
}
