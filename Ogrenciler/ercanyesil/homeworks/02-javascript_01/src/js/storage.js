// getStorage
// addStorage
// loadStorage

import {UI} from "./ui";
const ui = UI();

export function Storage() {}

Storage.prototype.getStorage = function (){
    let movies;
    if (localStorage.getItem("movies") === null) {
        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
}

Storage.prototype.addStorage = function (newMovieList){
    const getMoviesFromStorage = localStorage.getItem("movies")
    let movies = JSON.parse(getMoviesFromStorage) || [];
    movies.push(newMovieList);
    localStorage.setItem("movies", JSON.stringify(movies));
}

// Storage.prototype.loadStorage = function (){
//     let movies = JSON.parse(getMoviesFromStorage) || [];
//     movies.forEach(function (movie) {
//         ui.addMovieToUI(movie);
//   });
// }

Storage.prototype.deleteStorage = function (){
    localStorage.removeItem("movies");
}
