const storagePt = new STORAGE();

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

document.addEventListener("DOMContentLoaded", loadDefaultFilmsToUI);

function loadDefaultFilmsToUI() {
  const initialized = localStorage.getItem("initialized");
  if (!initialized) {
    const movies = [
      new Movie(
        1,
        "Wakanda Forever",
        "Ryan Coogler",
        "https://images.thedirect.com/media/photos/FeJx739VsAIHff6.jpg",
        "November 11, 2022"
      ),
      new Movie(
        2,
        "Titanic",
        "James Cameron",
        "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/145202/titanic-3dposteri.jpg",
        "December 19, 1997"
      ),
    ];
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("initialized", true);
  }
}

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addMovie);
  clearButton.addEventListener("click", clearAllMovies);
  filter.addEventListener("keyup", filterMovies);
  document.addEventListener("DOMContentLoaded", loadAllMoviesToUI);
}

function addMovie(e) {
  e.preventDefault();
  const id = movieIdInput.value;
  const title = movieNameInput.value.trim();
  const director = directorNameInput.value.trim();
  const poster = movieImageInput.value.trim();
  const releaseDate = releaseDateInput.value.trim();

  if ((title, director, poster, releaseDate === "")) {
    showAlert("danger", "Please fill all the inputs.");
  } else {
    const movie = new Movie(id, title, director, poster, releaseDate);
    if (id !== "") {
      updateMovie(movie);
      document.getElementById("submitButton").innerText = "Add Movie";
    } else {
      movie.id = new Date().getTime();
      createMovie(movie);
    }
  }
}

// Add Movie
function createMovie(movie) {
  addMovieToUI(movie);
  storagePt.addMovieToStorage(movie);
  showAlert("success", "Movie successfully added.");
}

function addMovieToUI(movie) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  const editButton = document.createElement("a");
  const moviediv = document.createElement("div");
  moviediv.className = "card movie-card my-5 overflow-hidden";

  link.href = "#";
  link.dataset["id"] = movie.id;
  link.className = "delete-item my-auto";
  link.innerHTML = "<i class='fa fa-remove fa-2x text-danger'></i>";

  editButton.href = "#";
  editButton.dataset["id"] = movie.id;
  editButton.className = "edit my-auto mx-lg-5 mx-2";
  editButton.innerHTML = "<i class='fa fa-edit fa-2x'></i>";

  editButton.addEventListener("click", updateMovieInfo);

  link.addEventListener("click", deleteMovie);
  moviediv.innerHTML = `  <img style = "width: 300px; height: 350px" src="${movie.poster}" class="card-img-top img-fluid alt="...">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.director}</a>
    <p class="card-text">${movie.releaseDate}</a>
  </div>`;
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(moviediv);
  listItem.appendChild(link);
  listItem.appendChild(editButton);
  movieList.appendChild(listItem);
  movieNameInput.value = "";
  directorNameInput.value = "";
  movieImageInput.value = "";
  releaseDateInput.value = "";
}

// Alert Method
function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
}

// Delete
function deleteMovie(e) {
  const movieId = e.currentTarget.dataset["id"];
  e.currentTarget.parentElement.remove();
  storagePt.deleteItemFromLS(movieId);
}

// Delete All Movies
function clearAllMovies() {
  while (movieList.firstChild != null) {
    movieList.removeChild(movieList.firstChild); // Daha hızlı çalışacak
  }
  localStorage.removeItem("movies");
}

// Load All Movies
function loadAllMoviesToUI() {
  movieList.innerHTML = "";
  let movies = storagePt.getMoviesFromStorage();
  movies.forEach(function (movie) {
    addMovieToUI(movie);
  });
}

// Filtering Movies
function filterMovies(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    // console.log(text.indexOf(filterValue));
    if (text.indexOf(filterValue) === -1) {
      const alert = document.querySelector(".alert");
      if (!alert) {
        showAlert("warning", "Could not find what you are looking for :(");
      }
      listItem.setAttribute("style", "display:none !important");
    } else {
      listItem.setAttribute("style", "display:block");
    }
  });
}

function updateMovie(movie) {
  const movies = storagePt.getMoviesFromStorage();

  movies.forEach((element) => {
    if (element.id == movie.id) {
      element.title = movie.title;
      element.director = movie.director;
      element.poster = movie.poster;
      element.releaseDate = movie.releaseDate;
    }
    localStorage.setItem("movies", JSON.stringify(movies));
  });
  movieIdInput.value = "";
  loadAllMoviesToUI();
}

function updateMovieInfo(e) {
  const movieId = e.currentTarget.dataset["id"];
  const movie = getMovieById(movieId);
  editForm(movie);

  showAlert("success", "Updating movie...");
}

function editForm(movie) {
  movieNameInput.value = movie.title;
  directorNameInput.value = movie.director;
  movieImageInput.value = movie.poster;
  releaseDateInput.value = movie.releaseDate;

  movieIdInput.value = movie.id;
  document.getElementById("submitButton").innerText = "Update Movie";
}

function getMovieById(id) {
  const movies = storagePt.getMoviesFromStorage();
  const movie = movies.find((movie) => movie.id == id);
  return movie;
}
