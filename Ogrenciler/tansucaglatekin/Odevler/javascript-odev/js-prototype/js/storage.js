function Storage() {}
const storage = new Storage();

Storage.prototype.getMoviesFromStorage = function() {
    let movies;
    if(localStorage.getItem("movies") == null) {
        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
};

Storage.prototype.addMovieStorage = function(newMovie) {
    let movies = storage.getMoviesFromStorage();
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
};

Storage.prototype.deleteMovieLS = function(text) {
    let movies = storage.getMoviesFromStorage();
    movies.forEach(function(newMovie, index) {
        if(newMovie.URL === text) {
            movies.splice(index, 1);
        }
    });
    localStorage.setItem("movies", JSON.stringify(movies));
};

