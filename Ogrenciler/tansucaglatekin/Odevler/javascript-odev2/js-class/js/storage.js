class Storage {
    static addMovieStorage (newMovie) {
        let movies = Storage.getMoviesFromStorage();
        movies.push(newMovie);
        localStorage.setItem("movies", JSON.stringify(movies));
    };
    
    static getMoviesFromStorage () {
        let movies;
        if(localStorage.getItem("movies") == null) {
            movies = [];
        } else {
            movies = JSON.parse(localStorage.getItem("movies"));
        }
        return movies;
    };
    
    static deleteMovieLS (text) {
        let movies = Storage.getMoviesFromStorage();
        movies.forEach(function(newMovie, index) {
            if(newMovie.URL === text) {
                movies.splice(index, 1);
            }
        });
        localStorage.setItem("movies", JSON.stringify(movies));
    };    
}