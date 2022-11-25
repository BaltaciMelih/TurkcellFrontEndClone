class Storage {
  static addItemToStorage(newMovie) {
    let movies = Storage.getItemFromStorage();
    movies.push(newMovie);

    localStorage.setItem("archive", JSON.stringify(movies));
  }

  static getItemFromStorage() {
    let movies;
    if (localStorage.getItem("archive") === null) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("archive"));
    }
    return movies;
  }

  static deleteItemFromStorage(movieName) {
    let movies = Storage.getItemFromStorage();
    movies.forEach(function (movie, index) {
      if (movie.name === movieName) {
        movies.splice(index, 1);
      }
    });
    localStorage.setItem("archive", JSON.stringify(movies));
  }

  static clearAllItemsFromStorage() {
    localStorage.setItem("archive", JSON.stringify([]));
  }
}
