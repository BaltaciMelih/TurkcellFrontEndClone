function Lclstorage() {}

Lclstorage.prototype.addMovieToStorage = function (
  name,
  poster,
  director,
  visiondate
) {
  let movies = _getMovieFromStorage();

  let movie = {
    name: name,
    poster: poster,
    director: director,
    visiondate: visiondate,
  };

  movies.push(movie);
  localStorage.setItem("movies", JSON.stringify(movies));
};
