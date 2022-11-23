
function Movie(title, writers, url, date, movieType) {
    this.id = new Date().getTime();
    this.title = title;
    this.writers = writers;
    this.url = url;
    this.date = date;
    this.movieType = movieType;


  }

  Movie.prototype.constantMovies = function () {
    const film1 = new Movie(
      "Captain America The First Avenger",
      "Christopher Markus",
      "https://kbimages1-a.akamaihd.net/85e1e08d-e8bf-4613-99d2-dc616456638a/1200/1200/False/captain-america-the-first-avenger-junior-novel.jpg",
      "2011",
      "Sci-Fi"
    );
    const film2 = new Movie(
      "The Shawshank Redemption",
      "Stephen King",
      "https://upload.wikimedia.org/wikipedia/tr/e/e6/Esaretin-bedeli.jpg",
      "1994",
      "Drama"
    );
  
    return [film1, film2];
  };