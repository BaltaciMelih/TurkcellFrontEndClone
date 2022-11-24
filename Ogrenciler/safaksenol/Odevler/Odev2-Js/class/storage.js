class Storage { 

static addMovieToStorage(name, poster, type, visiondate) {
    let movies = this._getMovieFromStorage();

    let movie = {
        name: name,
        poster: poster,
        type: type,
        visiondate: visiondate,
    };

    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
};

static _getMovieFromStorage() {
    let movies;
    if (localStorage.getItem("movies") === null) {
        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
};

static deleteMovInStorage(name) {
    let movies =this._getMovieFromStorage();

    movies.forEach(function (mov, index) {
        if (mov.name == name) {
            console.log(mov.name + " " + index);
            movies.splice(index, 1);
        }
    });

    localStorage.setItem("movies", JSON.stringify(movies));
    }
};
