function Store() {}

Store.prototype.getMovies = function () {
  let movies;
  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }
  return movies;
};

Store.prototype.displayMovies = function () {
  const store = new Store();
  const movies = store.getMovies();

  movies.forEach(function (movie) {
    const ui = new UI();
    ui.addMovieToList(movie);
  });
};

Store.prototype.addMovie = function (movie) {
  const store = new Store();
  const movies = store.getMovies();

  movies.push(movie);

  localStorage.setItem("movies", JSON.stringify(movies));
};

Store.prototype.removeMovie = function (name) {
  const store = new Store();
  const movies = store.getMovies();

  movies.forEach(function (movie, index) {
    if (movie.name === name) {
      movies.splice(index, 1);
    }
  });

  localStorage.setItem("movies", JSON.stringify(movies));
};
