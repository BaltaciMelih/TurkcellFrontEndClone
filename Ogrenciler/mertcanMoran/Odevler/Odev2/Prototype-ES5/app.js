function Movie(name, director, year, url) {
  this.name = name;
  this.director = director;
  this.year = year;
  this.url = url;
}

const name = document.getElementById("name");
const director = document.getElementById("director");
const year = document.getElementById("year");
const url = document.getElementById("url");

document.addEventListener("DOMContentLoaded", function () {
  const store = new Store();
  store.displayMovies();
});

document.querySelector("#movie-form").addEventListener("submit", function (e) {
  const name = document.querySelector("#name").value;
  const director = document.querySelector("#director").value;
  const year = document.querySelector("#year").value;
  const url = document.querySelector("#url").value;

  const movie = new Movie(name, director, year, url);

  const ui = new UI();

  const store = new Store();

  if (name === "" || director === "" || year === "" || url === "") {
    ui.showAlert("Please fill all empty fields", "danger");
  } else {
    ui.addMovieToList(movie);
    store.addMovie(movie);
    ui.showAlert("Movie Added", "success");
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById("movie-list").addEventListener("click", function (e) {
  const ui = new UI();
  const store = new Store();
  if (e.target.id === "edit") {
    e.target.parentElement.parentElement.parentElement.remove();
    ui.showAlert("Movie list can be edited now", "primary");
    let movies = store.getMovies();
    movies.forEach(function (movie) {
      if (
        movie.name ===
        e.target.parentElement.parentElement.parentElement.firstElementChild
          .textContent
      ) {
        document.querySelector("#name").value = movie.name;
        document.querySelector("#director").value = movie.director;
        document.querySelector("#year").value = movie.year;
        document.querySelector("#url").value = movie.url;
      }
    });
    store.removeMovie(
      e.target.parentElement.parentElement.parentElement.firstElementChild
        .textContent
    );
  }
  e.preventDefault();
});

document.querySelector("#movie-list").addEventListener("click", function (e) {
  const ui = new UI();
  const store = new Store();

  ui.deleteMovie(e.target);
  store.removeMovie(
    e.target.parentElement.parentElement.previousElementSibling
      .previousElementSibling.previousElementSibling.previousElementSibling
      .textContent
  );
  ui.showAlert("Movie Removed", "success");
  e.preventDefault();
});

document.querySelector("#clear-movies").addEventListener("click", function () {
  const ui = new UI();
  const movieList = document.getElementById("movie-list");
  while (movieList.firstChild != null) {
    movieList.removeChild(movieList.firstChild);
  }
  localStorage.removeItem("movies");
  ui.showAlert("All Movies Removed", "success");
});
