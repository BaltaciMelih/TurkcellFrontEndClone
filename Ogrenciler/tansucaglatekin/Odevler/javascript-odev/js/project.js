const form = document.getElementById("movie-form");
const movieNameInput = document.getElementById("movie-name");
const directorNameInput = document.getElementById("director-name");
const movieDateInput = document.getElementById("movie-date");
const movieURLInput = document.getElementById("movie-URL");
const movieList = document.getElementById("movie-list");
const clearButton = document.getElementById("clear-movies");
const cardBody = document.getElementById("card-2");

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addMovie);
    clearButton.addEventListener("click", clearAllMovies);
    cardBody.addEventListener("click", deleteMovie);
    cardBody.addEventListener("click", editMovie);
    document.addEventListener("DOMContentLoaded", loadAllMoviesUI);
}

let Movie = function (name, director, date, URL) {
    this.name = name;
    this.director = director;
    this.date = date;
    this.URL = URL;
}

function addMovie(e) {
    if ((movieDateInput.value === "") || (directorNameInput.value === "") || (movieDateInput.value === "") || (movieURLInput.value === "")) {
        ui.showAlert("Eksik bilgi girdiniz!!", "danger");
    } else {
        const newMovie = new Movie(movieNameInput.value, directorNameInput.value, movieDateInput.value, movieURLInput.value);
        ui.addMovieUI(newMovie);
        ui.addMovieStorage(newMovie);
        ui.showAlert("Eklendi.", "success")
    }
    e.preventDefault();
}

function clearAllMovies() {
    while(movieList.firstChild != null) {
        movieList.removeChild(movieList.firstChild);
        localStorage.removeItem("movies");
    }
    ui.showAlert("Koleksiyon temizlendi.", "success");
}

function deleteMovie(e) {
    if(e.target.className === "del btn btn-primary w-100 p-3") {
        e.target.parentElement.parentElement.remove();
        ui.deleteMovieLS(e.target.parentElement.parentElement.children[0].src);
        ui.showAlert("Film silindi", "success");
    }
}

function editMovie(e) {
    if(e.target.className === "btn btn-secondary mb-4 w-100 p-3") {
        ui.editMovieUI(e);
        ui.showAlert("Düzenleme başarılı", "success");
    }
}

function loadAllMoviesUI() {
    let movies = ui.getMoviesFromStorage();
    movies.forEach(function (movies) {
        ui.addMovieUI(movies);
    })
}

