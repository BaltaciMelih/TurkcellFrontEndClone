const ui = new Ui();
const film = new Film();
const storage = new Storage();


const inputName = document.querySelector("#name")
const inputDirector = document.querySelector("#director")
const inputİmg = document.querySelector("#img")
const inputDate = document.querySelector("#date")
const btn = document.querySelector("#btnCreate")
const tbody = document.querySelector(".tbody");
const alerts = document.querySelector(".uyari")
const deleteAllbtn = document.querySelector("#deleteAll")

function eventListeners() {
    btn.addEventListener("click", ui.addMovie)
    tbody.addEventListener("click", ui.dltMovie)
    deleteAllbtn.addEventListener("click",ui.deleteAll)
    document.addEventListener("DOMContentLoaded", load);
} 
eventListeners();
function load (){
    storage.getFromStorage();
    storage.movies.forEach(function(item){
        ui.addMovieUi(item)
    })
};



