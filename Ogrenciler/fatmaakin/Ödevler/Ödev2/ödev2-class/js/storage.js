// STORE Class: HANDLES STORAGE
class Store {
    static getMovies() {
        let movies;
        if (localStorage.getItem('movies') === null) {
            movies = [];
        } else {
            movies = JSON.parse(localStorage.getItem('movies'));
        }

        return movies;

    }
    static addMovie(movie) {
        const movies = Store.getMovies();
        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));

    }
    static removeMovie(name) {

        const movies = Store.getMovies();

        movies.forEach((movie, index) => {
            if (movie.name === name) {
                movies.splice(index, 1);
            }
        });

        localStorage.setItem('movies', JSON.stringify(movies));
    }
}