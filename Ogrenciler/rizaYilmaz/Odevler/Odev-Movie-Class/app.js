const movieFormInput = document.querySelector("#movie-form");
const movieNameInput = document.querySelector("#movieNameInput");
const directorInput = document.querySelector("#directorInput");
const moviePosterUrlInput = document.querySelector("#moviePosterUrlInput");
const releaseDateInput = document.querySelector("#releaseDateInput");
const genreSelectInput = document.querySelector("#genreSelectInput");
const unorderList = document.querySelector("#unorder-list");

movieFormInput.addEventListener("submit", submitForm);

function submitForm(e) {
  const newMovie = new Data(
    movieNameInput.value.trim(),
    directorInput.value.trim(),
    moviePosterUrlInput.value.trim(),
    releaseDateInput.value.trim(),
    genreSelectInput.value.trim()
  );

  addMovieToUI(
    newMovie.name,
    newMovie.director,
    newMovie.url,
    newMovie.date,
    newMovie.genre
  );
  addMovieToStorage(newMovie);
  console.log(newMovie);
  dataArray.push(newMovie);
  movieNameInput.value = "";
  directorInput.value = "";
  moviePosterUrlInput.value = "";
  releaseDateInput.value = "";
  genreSelectInput.value = "";
  e.preventDefault();
}

let staticMovie = new Data(
  "The Lord of the Rings: The Two Towers",
  "Peter Jackson",
  "https://pic-bstarstatic.akamaized.net/ugc/14fbdb83fcacf53581121419ce024b90fdbd2df6.png@720w_405h_1e_1c_1f.webp",
  2002,
  "Adventure"
);
let staticMovie1 = new Data(
  "The Hobbit: An Unexpected Journey",
  "Peter Jackson",
  "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/the-hobbit-an-unexpected-journey.jpg",
  2012,
  "Adventure"
);

function addMovieToUI(name, director, url, date, genre) {
  const newElement = document.createElement("li");
  newElement.classList.add("list-item");
  newElement.innerHTML = `<div class="card mb-3 " style="max-width: 1000px;">
      <div class="row g-1">
        <div class="col-md-4">
          <img src="${url}" class="img-fluid rounded" alt="">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h6 class="card-title fw-bold">Movie Name:  <span class="fw-normal">${name}</span></h6>
            <h6 class="card-title fw-bold">Director:  <span class="fw-normal">${director}</span></h6>
            <h6 class="card-title fw-bold">Release Date:  <span class="fw-normal">${date}</span></h6>
            <h6 class="card-title fw-bold">Genre:  <span class="fw-normal">${genre}</span></h6>
          </div>
        </div>
        <div class="col-md-2 btn-group-vertical">
          <button class="btn btn-primary edit">Edit</button>
          <button class="btn btn-danger remove">Delete</button>
        </div>
      </div>
    </div>`;
  unorderList.appendChild(newElement);
  Filter.filterMovie();
  DeleteItem.deleteItem();
}
const clearButton = document.getElementById("clearAllButton");
clearButton.addEventListener("click", clearAllMovie);
function clearAllMovie() {
  while (unorderList.firstChild != null) {
    unorderList.removeChild(unorderList.firstChild);
  }
  localStorage.removeItem("movies");
}
document.addEventListener("DOMContentLoaded", loadAllMoviesToUI);
function getMoviesFromStorage() {
  let movies;
  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }
  return movies;
}
function addMovieToStorage(newMovie) {
  let movies = getMoviesFromStorage();
  movies.push(newMovie);
  localStorage.setItem("movies", JSON.stringify(movies));
}
function loadAllMoviesToUI() {
  let movies = getMoviesFromStorage();
  movies.forEach(function (movie) {
    console.log(movie);
    console.log(typeof movie);
    addMovieToUI(
      movie.name,
      movie.director,
      movie.url,
      movie.date,
      movie.genre
    );
  });
}
function deleteMovieToStorage(movieNameHtml) {
  movies = getMoviesFromStorage();
  movies.forEach(function (item, index) {
    if (item.name === movieNameHtml) {
      movies.splice(index, 1);
    }
  });
  localStorage.setItem("movies", JSON.stringify(movies));
}
