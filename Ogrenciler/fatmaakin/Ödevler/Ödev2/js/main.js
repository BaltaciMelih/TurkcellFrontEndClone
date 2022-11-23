const form = document.getElementById("formmovie");
const nameinput = document.getElementById("namemovie");
const direcinput = document.getElementById("director");
const dateinput = document.getElementById("datemovie");
const urlinput = document.getElementById("urlmovie");
const pagelistinput = document.getElementById("pagelist");
const deleteAllButon = document.getElementById("deleteAll");
const cardBody = document.getElementById("movieid");

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addMovie);
    deleteAllButon.addEventListener("click", deleteAllMovie);
    cardBody.addEventListener("click", deleteMovie);
    cardBody.addEventListener("click", editMovie);
    document.addEventListener("DOMContentLoaded", AllMovieList);
}

let Movie = function (name, director, date, URL) {
    this.name = name;
    this.director = director;
    this.date = date;
    this.URL = URL;
}

function addMovie(e) {
    if ((dateinput.value === "") || (direcinput.value === "") || (dateinput.value === "") || (urlinput.value === "")) {
        ui.showAlert("Eksik bilgi girdiniz!!", "danger");
    } else {
        const newMovie = new Movie(nameinput.value, direcinput.value, dateinput.value, urlinput.value);
        ui.addMovieUI(newMovie);
        ui.addMovieStorage(newMovie);
        ui.showAlert("Eklendi.", "success")
    }
    e.preventDefault();
}

function deleteAllMovie() {
    while(pagelistinput.firstChild != null) {
        pagelistinput.removeChild(pagelistinput.firstChild);
        localStorage.removeItem("movies");
    }
    ui.showAlert("Tüm filmler silindi.", "success");
}


function editMovie(e) {
    if(e.target.className === "btn btn-secondary mb-4 w-100 p-3") {
        ui.editMovieUI(e);
        ui.showAlert("Düzenlendi", "success");
    }
}
function deleteMovie(e) {
    if(e.target.className === "del btn btn-primary w-100 p-3") {
        e.target.parentElement.parentElement.remove();
        ui.deleteMovieLS(e.target.parentElement.parentElement.children[0].src);
        ui.showAlert("Seçilen Film Silindi", "success");
    }
}



function AllMovieList() {
    let movies = ui.getMoviesFromStorage();
    movies.forEach(function (movies) {
        ui.addMovieUI(movies);
    })
}

