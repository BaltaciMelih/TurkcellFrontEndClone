class Storage {
  static getMoviesFromStorage() {
    let movies;
    if (localStorage.getItem("movies") === null) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
  }

  // Local Storage'a veri gönderme - Önce storage'daki verileri alıp sonra üzerine ekleme yapıp tekrar gönderdik.
  static addMovieToStorage(movie) {
    let movies = Storage.getMoviesFromStorage();

    movies.push(movie);

    localStorage.setItem("movies", JSON.stringify(movies));
  }

  // Tek tek silme tarafı ödev
  static deleteItemFromLS(movieId) {
    const movies = Storage.getMoviesFromStorage();
    movies.forEach(function (movie, index) {
      console.log(movieId);
      console.log("movie");
      // console.log(movie);
      if (movie.id == movieId) {
        movies.splice(index, 1);
      }
    });
    localStorage.setItem("movies", JSON.stringify(movies));
  }
}
