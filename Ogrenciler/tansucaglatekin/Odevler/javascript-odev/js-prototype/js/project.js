const form = document.getElementById("movie-form");
const movieNameInput = document.getElementById("movie-name");
const directorNameInput = document.getElementById("director-name");
const movieDateInput = document.getElementById("movie-date");
const movieURLInput = document.getElementById("movie-URL");
const movieList = document.getElementById("movie-list");
const clearButton = document.getElementById("clear-movies");
const cardBody = document.getElementById("card-2");
const filter = document.getElementById("filter");

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addMovie);
    clearButton.addEventListener("click", clearAllMovies);
    cardBody.addEventListener("click", deleteMovie);
    cardBody.addEventListener("click", editMovie);
    document.addEventListener("DOMContentLoaded", loadAllMovies);
    filter.addEventListener("keyup", filterMovies);
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
        storage.addMovieStorage(newMovie);
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
    if(e.target.className === "del btn btn-primary w-100 p-3 mb-3") {
        e.target.parentElement.parentElement.remove();
        storage.deleteMovieLS(e.target.parentElement.parentElement.children[0].src);
        ui.showAlert("Film silindi", "success");
    }
}

function editMovie(e) {
    if(e.target.className === "btn btn-secondary mb-4 w-100 p-3 mt-3") {
        e.target.parentElement.parentElement.remove();

        let movies = storage.getMoviesFromStorage();
        movies.forEach (function (movie) {
            if (movie.URL == e.target.parentElement.parentElement.children[0].src) {
                movieNameInput.value = movie.name;
                directorNameInput.value = movie.director;
                movieDateInput.value = movie.date;
                movieURLInput.value = movie.URL;
            }
            ui.editButton();
        });
        storage.deleteMovieLS(e.target.parentElement.parentElement.children[0].src);
    };
}

function loadAllMovies() {
    let movies = storage.getMoviesFromStorage();
    movies.forEach(function (movies) {
        ui.addMovieUI(movies);
    })
}

function filterMovies(e) {
    const filterValue = e.target.value.toUpperCase();
    const listItems = document.querySelectorAll("li");
    listItems.forEach(function(listItems) {
        const text = listItems.textContent.toUpperCase();
        if (text.indexOf(filterValue) === -1) {
            listItems.setAttribute("style", "display: none");
        } else {
            listItems.setAttribute("style", "display: flex");
        }
    })
}