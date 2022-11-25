import {UI} from "./js/ui";
import {Storage} from "./js/storage";

const deleteAllBtn = document.querySelector("#deleteAll");
document.addEventListener("DOMContentLoaded",Storage.loadStorage); 

const postForm = () => {
    document.getElementById('movieForm').onsubmit = function(e){
        e.preventDefault();
        const MovieName = document.getElementById('name').value;
        const MovieDirector = document.getElementById('director').value;
        const MovieDate = document.getElementById('date').value;
        const MovieUrl = document.getElementById('url').value;
        
        class Movie {
            constructor(){
            this.name = MovieName;
            this.director = MovieDirector;
            this.date = MovieDate;
            this.url = MovieUrl;
            }
        }
        
        const movie = new Movie();
        console.log(movie);
        if (
            movie.name === "" &&
            movie.director === "" &&
            movie.date === "" &&
            movie.url === ""           
        ) {
            UI.displayMessage("Eksik giriş yaptınız", "danger");
        } else {
            UI.addMovieToUI(movie);
            Storage.addStorage(movie);
            UI.displayMessage("Film başarılı bir şekilde eklendi.", "success");
        }
        return false;
    }
}
postForm();
function clearAllMovies() {
    if (confirm("Emin misiniz?")) {
        UI.displayMessage("Silme işlemi başarılı", "success");
        setTimeout(() => {
            UI.deleteAllMovie()
            Storage.deleteAllStorage()
        }, 2000)
    }
}
deleteAllBtn.onclick = clearAllMovies;