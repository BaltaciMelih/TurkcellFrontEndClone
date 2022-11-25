import { UI } from "./ui";

export class Storage{

static getStorage(){
    let movies;
    if (localStorage.getItem("movies") === null) {
        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
}

static addStorage(newMovieList){
    const getMoviesFromStorage = localStorage.getItem("movies")
    let movies = JSON.parse(getMoviesFromStorage) || [];
    movies.push(newMovieList);
    localStorage.setItem("movies", JSON.stringify(movies));
}

static loadStorage(){
    let movie = Storage.getStorage();
    movie.forEach(function (movies) {
        UI.addMovieToUI(movies);
  });
}

static deleteAllStorage(){
    localStorage.removeItem("movies");
}

}