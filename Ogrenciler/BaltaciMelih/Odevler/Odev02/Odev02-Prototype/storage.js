function Storage() {}

Storage.prototype.addItemToStorage = function (newMovie) {
  let movies = storage.getItemFromStorage();
  movies.push(newMovie);

  localStorage.setItem("archive", JSON.stringify(movies));
};

Storage.prototype.getItemFromStorage = function () {
  let movies;
  if (localStorage.getItem("archive") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("archive"));
  }
  return movies;
};

Storage.prototype.deleteItemFromStorage = function (movieName) {
  let movies = storage.getItemFromStorage();
  movies.forEach(function (movie, index) {
    if (movie.name === movieName) {
      movies.splice(index, 1);
    }
  });
  localStorage.setItem("archive", JSON.stringify(movies));
};

Storage.prototype.clearAllItemsFromStorage = function () {
  localStorage.setItem("archive", JSON.stringify([]));
};
