function STORAGE() {}

STORAGE.prototype.getMoviesFromStorage = function () {
  let movies;
  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }
  return movies;
};

// Local Storage'a veri gönderme - Önce storage'daki verileri alıp sonra üzerine ekleme yapıp tekrar gönderdik.
STORAGE.prototype.addMovieToStorage = function (movie) {
  let movies = storagePt.getMoviesFromStorage();

  movies.push(movie);

  localStorage.setItem("movies", JSON.stringify(movies));
};

// Tek tek silme tarafı ödev
STORAGE.prototype.deleteItemFromLS = function (movieId) {
  const movies = storagePt.getMoviesFromStorage();
  movies.forEach(function (movie, index) {
    console.log(movieId);
    console.log("movie");
    // console.log(movie);
    if (movie.id == movieId) {
      movies.splice(index, 1);
    }
  });
  localStorage.setItem("movies", JSON.stringify(movies));
};
