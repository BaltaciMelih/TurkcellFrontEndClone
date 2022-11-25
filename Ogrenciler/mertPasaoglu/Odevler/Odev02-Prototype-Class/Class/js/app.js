import { UI } from "../js/ui.js";
import { Storage } from "../js/storage.js";
import { Movie } from "../js/constructor.js";

const form = document.querySelector("#form");
const movieTitleElement = document.querySelector("#movieName");
const movieDirectorElement = document.querySelector("#directorName");
const posterUrlElement = document.querySelector("#posterUrl");
const premiereElement = document.querySelector("#premiere");
const movieCards = document.querySelector(".movie-cards");
const clearAllButton = document.querySelector(".btn-delete-all");

firstRun();
function firstRun() {
  if (localStorage.getItem("movies") === null) {
    Storage.addMovieToStorage(
      new Movie(
        "Spider-man",
        "Marc Webb",
        "https://cdn.dsmcdn.com/ty9/product/media/images/20200821/14/8543119/82278596/1/1_org_zoom.jpg",
        "2012-07-03",
        
      )
    );
    Storage.addMovieToStorage(
      new Movie(
        "Avatar",
        "James Cameron",
        "https://m.media-amazon.com/images/I/81V6WsLjwbL.jpg",
        "2022-12-16",    
      )
    );
  }
}

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addMovie);
  document.addEventListener("DOMContentLoaded", () => {
    let movies = Storage.getMoviesFromStorage();
    UI.loadAllMoviesToUi(movies);
  });
  movieCards.addEventListener("click", deleteAll);
  movieCards.addEventListener("click", editMovie);
  clearAllButton.addEventListener("click", clearAllMovies);
}

function addMovie(e) {
  e.preventDefault();
  const movieName = movieTitleElement.value;
  const movieDirector = movieDirectorElement.value;
  const posterUrl = posterUrlElement.value;
  const premiereDate = premiereElement.value;
  if (
    movieName === "" ||
    movieDirector === "" ||
    posterUrl === "" ||
    premiereDate === ""
  ) {
    UI.displayMessage("Please fill in all the fields!", "fail");
  } else {
    const newMovie = new Movie(
      movieName,
      movieDirector,
      posterUrl,
      premiereDate
    );
    UI.addMovieToUi(newMovie);
    Storage.addMovieToStorage(newMovie);
    UI.clearInputs(
      movieTitleElement,
      movieDirectorElement,
      posterUrlElement,
      premiereElement
    );
    UI.displayMessage("Movie Added Successfuly", "success");
  }
}

function deleteAll(e) {
  if (e.target.classList.contains("btn-delete")) {
    UI.deleteMovieFromUi(e.target);
    Storage.deleteMovieFromStorage(
      e.target.parentElement.previousElementSibling.children[0].textContent
    );
    UI.displayMessage("Movie Deleted Successfuly", "success");
  }
}

function editMovie(e) {
  if(e.target.classList.contains("btn-edit")) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();

      let movies = Storage.getMoviesFromStorage();
      movies.forEach (function (movie) {
      if (movie.url == e.target.parentElement.parentElement.previousElementSibling.children[0].src) {
          movieTitleElement.value = movie.name;
          movieDirectorElement.value = movie.director;
          premiereElement.value = movie.premiere;
          posterUrlElement.value = movie.url;
      }
      UI.editButton();
      });
      Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.children[0].textContent);
  }; 
}

function clearAllMovies(e) {
  if (confirm("Are you sure?")) {
    UI.clearAllMoviesFromUi();
    Storage.clearAllMoviesFromStorage();
  }
}
