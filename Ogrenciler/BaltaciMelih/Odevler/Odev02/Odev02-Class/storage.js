function Storage() {}

Storage.prototype.addItemToStorage = function (newMovie) {
  let movies = this.getItemFromStorage();
  movies.push(newMovie);

  localStorage.setItem("movies", JSON.stringify(movies));
};

Storage.prototype.getItemFromStorage = function () {
  let movies;
  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }
  return movies;
};

Storage.prototype.deleteItemFromStorage = function (movieName) {
  let movies = this.getItemFromStorage();
  movies.forEach(function (movie, index) {
    if (movie.name === movieName) {
      movies.splice(index, 1);
    }
  });
  localStorage.setItem("movies", JSON.stringify(movies));
};

Storage.prototype.clearAllItemsFromStorage = function () {
  localStorage.setItem("movies", JSON.stringify([]));
};
