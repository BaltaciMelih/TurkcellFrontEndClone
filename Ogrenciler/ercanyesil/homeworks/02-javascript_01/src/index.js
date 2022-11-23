import {UI} from "./js/ui";
import {Storage} from "./js/storage";

const ui = new UI();
const storage = new Storage();
const deleteAllBtn = document.querySelector("#deleteAll");
document.addEventListener("DOMContentLoaded",storage.loadStorage); 

const postForm = () => {
    document.getElementById('movieForm').onsubmit = function(e){
        e.preventDefault();

        const MovieName = document.getElementById('name').value;
        const MovieDirector = document.getElementById('director').value;
        const MovieDate = document.getElementById('date').value;
        const MovieUrl = document.getElementById('url').value;

        function Movie () {
            this.name = MovieName;
            this.director = MovieDirector;
            this.date = MovieDate;
            this.url = MovieUrl;
        }

        const movie = new Movie();

        if (
            movie.name === "" &&
            movie.director === "" &&
            movie.date === "" &&
            movie.url === ""
        ) {
            ui.displayMessage("Eksik giriş yaptınız", "danger");
        } else {
            ui.addMovieToUI(movie);
            storage.addStorage(movie);
            ui.displayMessage("Film başarılı bir şekilde eklendi.", "success");
            ui.clearInput();
        }
        return false;
    }
}

postForm();



function clearAllMovies() {
    if (confirm("Emin misiniz?")) {
        ui.displayMessage("Silme işlemi başarılı", "success");
        setTimeout(() => {
            ui.deleteAllMovie()
            storage.deleteStorage()
        }, 2000)
    }
}
deleteAllBtn.onclick = clearAllMovies;