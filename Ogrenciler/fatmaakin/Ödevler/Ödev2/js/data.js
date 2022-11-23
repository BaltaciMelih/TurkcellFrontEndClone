UI.prototype.addstorage = function(newmovie) {
    let movies = ui.getstorage();
    movies.push(newmovie);
    localStorage.setItem("movies", JSON.stringify(movies));
};

UI.prototype.getstorage = function() {
    let movies;
    if(localStorage.getItem("movies") == null) {
        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
};

UI.prototype.deletemovi = function(text) {
    let movies = ui.getstorage();
    movies.forEach(function(newmovie, index) {
        if(newmovie.URL === text) {
            movies.splice(index, 1);
        }
    });
    localStorage.setItem("movies", JSON.stringify(movies));
};

