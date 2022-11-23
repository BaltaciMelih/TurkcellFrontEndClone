class Movie {
  constructor(name, director, year, url) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.url = url;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  Store.displayMovies();
});

document.querySelector("#movie-form").addEventListener("submit", function (e) {
  const name = document.querySelector("#name").value;
  const director = document.querySelector("#director").value;
  const year = document.querySelector("#year").value;
  const url = document.querySelector("#url").value;

  const movie = new Movie(name, director, year, url);

  if (name === "" || director === "" || year === "" || url === "") {
    UI.showAlert("Please fill all empty fields", "danger");
  } else {
    UI.addMovieToList(movie);
    Store.addMovie(movie);
    UI.showAlert("Movie Added", "success");
    UI.clearFields();
  }

  e.preventDefault();
});

document.querySelector("#movie-list").addEventListener("click", function (e) {
  UI.deleteMovie(e.target);
  Store.removeMovie(
    e.target.parentElement.parentElement.previousElementSibling
      .previousElementSibling.textContent
  );

  UI.showAlert("Movie Removed", "success");
  e.preventDefault();
});

document.querySelector("#clear-movies").addEventListener("click", function () {
  const movieList = document.getElementById("movie-list");
  while (movieList.firstChild != null) {
    movieList.removeChild(movieList.firstChild);
  }
  localStorage.removeItem("movies");
});
