
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
    movieForm.addEventListener("submit",Movies.addMovie);
    clearMovies.addEventListener("click",Movies.clearAllMovies);
    secondCardBody.addEventListener("click",Movies.deleteMovies);
    secondCardBody.addEventListener("click",Movies.changedMovies);
    document.addEventListener("DOMContentLoaded",Storage.LoadAllMoviesToUI);
    filterMovies.addEventListener("keyup", Movies.filterItems);
}

//Film Ekleme Başlangıçta
LoadMovieAdd();
function LoadMovieAdd(){     
      if (localStorage.getItem("started")===null) {
        Storage.addMovieToStorage(new Movies(
            "A Quiet Place II",
            "John Krasinski",
            "https://upload.wikimedia.org/wikipedia/tr/6/6e/A_Quiet_Place_Part_II_film_posteri.jpg",
            "2021-07-16"
            ));
        Storage.addMovieToStorage(new Movies(
            "Labirent Son İsyan",
            "Wes Ball",
            "https://tr.web.img2.acsta.net/r_1280_720/pictures/17/12/13/11/55/4740944.jpg",
            "2018-01-26"
            ));  
     } 
     localStorage.setItem("started", "started");
}