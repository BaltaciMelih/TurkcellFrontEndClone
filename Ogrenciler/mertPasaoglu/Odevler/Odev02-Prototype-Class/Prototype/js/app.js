import { UI } from "./ui.js";
import { storage } from "./storage.js";
import { Movie } from "./constructor.js";

const ui = new UI();
const form = document.querySelector('#form');
const movieTitleElement = document.querySelector('#movieName');
const movieDirectorElement = document.querySelector('#directorName');
const posterUrlElement = document.querySelector('#posterUrl');
const premiereElement = document.querySelector("#premiere");
const movieCards = document.querySelector('.movie-cards');
const clearAllButton = document.querySelector('.btn-delete-all');

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addMovie);
    document.addEventListener('DOMContentLoaded', () => {
        let movies = storage.getMoviesFromStorage();
        ui.loadAllMoviesToUi(movies);
    });
    movieCards.addEventListener('click', deleteAll);
    clearAllButton.addEventListener('click', clearAllMovies);
}

function addMovie(e) {
    e.preventDefault();   
    const movieName = movieTitleElement.value;
    const movieDirector = movieDirectorElement.value;
    const posterUrl = posterUrlElement.value;
    const premiereDate = premiereElement.value;
    if (movieName === "" || movieDirector === "" || posterUrl === "" || premiereDate === "") {
        ui.displayMessage('Please fill in all the fields!', 'fail');
    } else {
        const newMovie = new Movie(movieName, movieDirector, posterUrl, premiereDate);
        ui.addMovieToUi(newMovie);
        storage.addMovieToStorage(newMovie);
        ui.clearInputs(movieTitleElement, movieDirectorElement, posterUrlElement, premiereElement);
        ui.displayMessage('Movie Added Successfuly', 'success');
    }
}

function deleteAll(e) {
    if (e.target.classList.contains('btn-delete')) {
        ui.deleteMovieFromUi(e.target);
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.children[0].textContent);
        ui.displayMessage('Movie Deleted Successfuly', 'success');
    }
}

function clearAllMovies(e) {
    if (confirm('Are you sure?')) {
        ui.clearAllMoviesFromUi();
        storage.clearAllMoviesFromStorage();
    }
}
