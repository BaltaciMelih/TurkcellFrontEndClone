function Edit() {}

Edit.prototype.updateMovie = function (movie) {
  const movies = Storage.getMoviesFromStorage();

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
  UI.loadAllMoviesToUI();
};

Edit.prototype.updateMovieInfo = function (e) {
  const movieId = e.currentTarget.dataset["id"];
  const movie = edit.getMovieById(movieId);
  edit.editForm(movie);

  UI.showAlert("success", "Updating movie...");
};

Edit.prototype.editForm = function (movie) {
  movieNameInput.value = movie.title;
  directorNameInput.value = movie.director;
  movieImageInput.value = movie.poster;
  releaseDateInput.value = movie.releaseDate;

  movieIdInput.value = movie.id;
  document.getElementById("submitButton").innerText = "Update Movie";
};

Edit.prototype.getMovieById = function (id) {
  const movies = Storage.getMoviesFromStorage();
  const movie = movies.find((movie) => movie.id == id);
  return movie;
};
