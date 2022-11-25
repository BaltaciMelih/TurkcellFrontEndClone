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

firstRun();
function firstRun() {
  if (localStorage.getItem("movies") === null) {
    storage.addMovieToStorage(
      new Movie(
        "Spider-man",
        "Marc Webb",
        "https://cdn.dsmcdn.com/ty9/product/media/images/20200821/14/8543119/82278596/1/1_org_zoom.jpg",
        "2012-07-03",
        
      )
    );
    storage.addMovieToStorage(
      new Movie(
        "Avatar",
        "James Cameron",
        "https://m.media-amazon.com/images/I/81V6WsLjwbL.jpg",
        "2022-12-16",    
      )
    );
  }
}

function eventListeners() {
    form.addEventListener('submit', addMovie);
    document.addEventListener('DOMContentLoaded', () => {
        let movies = storage.getMoviesFromStorage();
        ui.loadAllMoviesToUi(movies);
    });
    movieCards.addEventListener('click', deleteAll);
    movieCards.addEventListener("click", editMovie);
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

function editMovie(e) {
    if(e.target.classList.contains("btn-edit")) {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();

        let movies = storage.getMoviesFromStorage();
        movies.forEach (function (movie) {
        if (movie.url == e.target.parentElement.parentElement.previousElementSibling.children[0].src) {
            movieTitleElement.value = movie.name;
            movieDirectorElement.value = movie.director;
            premiereElement.value = movie.premiere;
            posterUrlElement.value = movie.url;
        }
        ui.editButton();
        });
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.children[0].textContent);
    }; 
}

function clearAllMovies(e) {
    if (confirm('Are you sure?')) {
        ui.clearAllMoviesFromUi();
        storage.clearAllMoviesFromStorage();
    }
}
