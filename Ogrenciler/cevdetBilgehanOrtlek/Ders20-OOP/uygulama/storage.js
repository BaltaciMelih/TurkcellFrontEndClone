function Storage() {}

Storage.prototype.getFilmsFromStorage = function (KEY) {
  if (localStorage.getItem(KEY) === null) {
    KEY = [];
  } else {
    KEY = JSON.parse(localStorage.getItem(KEY));
  }
  return KEY;
};

Storage.prototype.deleteStorage = function (e) {
    let allMovies = this.getFilmsFromStorage(KEY);
    allMovies.forEach(function (anyMovie, i) {
      if (anyMovie.id == e.target.parentElement.id) {
        allMovies.splice(i, 1);
      }
    });
    localStorage.setItem(KEY, JSON.stringify(allMovies));
  }