class Lclstorage {
  static addMovieToStorage(name, poster, director, visiondate) {
    let movies = Lclstorage._getMovieFromStorage();

    let movie = {
      name: name,
      poster: poster,
      director: director,
      visiondate: visiondate,
    };

    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  static deleteMovInStorage(name) {
    let movies = Lclstorage._getMovieFromStorage();

    movies.forEach(function (mov, index) {
      if (mov.name == name) {
        console.log(mov.name + " " + index);
        movies.splice(index, 1);
      }
    });

    localStorage.setItem("movies", JSON.stringify(movies));
  }

  static allMovieLoad() {
    let movies = Lclstorage._getMovieFromStorage();

    movies.forEach((mov) => {
      const name = mov.name;
      const poster = mov.poster;
      const director = mov.director;
      const visiondate = mov.visiondate;

      Ui.addMovieToUI(name, poster, director, visiondate);
    });
  }

  static _getMovieFromStorage() {
    let movies;

    if (localStorage.getItem("movies") === null) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("movies"));
    }

    return movies;
  }
}
