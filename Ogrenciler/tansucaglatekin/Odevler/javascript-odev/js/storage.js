UI.prototype.addMovieStorage = function(newMovie) {
    let movies = ui.getMoviesFromStorage();
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
};

UI.prototype.getMoviesFromStorage = function() {
    let movies;
    if(localStorage.getItem("movies") == null) {
        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
};

UI.prototype.deleteMovieLS = function(text) {
    let movies = ui.getMoviesFromStorage();
    movies.forEach(function(newMovie, index) {
        if(newMovie.URL === text) {
            movies.splice(index, 1);
        }
    });
    localStorage.setItem("movies", JSON.stringify(movies));
};

