const ui = new Ui();
const film = new Film();


const inputName = document.querySelector("#name")
const inputDirector = document.querySelector("#director")
const inputİmg = document.querySelector("#img")
const inputDate = document.querySelector("#date")
const btn = document.querySelector("#btnCreate")
const tbody = document.querySelector(".tbody");



function eventListeners() {
    btn.addEventListener("click", ui.addMovie)
    tbody.addEventListener("click", ui.dltMovie)
} 
eventListeners();

function getLs(){
    let movie;

    if (localStorage.getItem("film")===null){
        movie=[]
    }
    else {
        movie= JSON.parse(localStorage.getItem("film"))
        console.log(movie)
    }

    ui.addMovieUi({movie})
}
getLs();

