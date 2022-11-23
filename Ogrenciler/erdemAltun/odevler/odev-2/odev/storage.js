function Lclstorage() {}

Lclstorage.prototype.addMovieToStorage = function (
  name,
  poster,
  type,
  visiondate
) {
  let movies = _getMovieFromStorage();

  let movie = {
    name: name,
    poster: poster,
    type: type,
    visiondate: visiondate,
  };

  movies.push(movie);
  localStorage.setItem("movies", JSON.stringify(movies));
};
