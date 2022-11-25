const ui = new UI();
const storage = new Storage();
const movie = new Movie();

//Elements
const movieForm = document.getElementById("movieForm");
const movieNameInput=document.getElementById("movieName");
const movieDirectorInput=document.getElementById("movieDirector");
const movieBannerInput=document.getElementById("movieBanner");
const movieDateInput=document.getElementById("movieDate");
const movieList = document.querySelector(".list-group");
const clearMovies = document.getElementById("clearMovies");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filterMovies = document.getElementById("filter");

//Events
eventListeners();
function eventListeners() {
    movieForm.addEventListener("submit",movie.addMovie);
    clearMovies.addEventListener("click",movie.clearAllMovies);
    secondCardBody.addEventListener("click",movie.deleteMovies);
    secondCardBody.addEventListener("click",movie.changedMovies);
    document.addEventListener("DOMContentLoaded",storage.LoadAllMoviesToUI);
    filterMovies.addEventListener("keyup", movie.filterItems);
}

//Film Ekleme Başlangıçta
LoadMovieAdd();
function LoadMovieAdd(){     
      if (localStorage.getItem("started")===null) {
        storage.addMovieToStorage(new Movies(
            "A Quiet Place II",
            "John Krasinski",
            "https://upload.wikimedia.org/wikipedia/tr/6/6e/A_Quiet_Place_Part_II_film_posteri.jpg",
            "2021-07-16"
            ));
        storage.addMovieToStorage(new Movies(
            "Labirent Son İsyan",
            "Wes Ball",
            "https://tr.web.img2.acsta.net/r_1280_720/pictures/17/12/13/11/55/4740944.jpg",
            "2018-01-26"
            ));  
     } 
     localStorage.setItem("started", "started");
}