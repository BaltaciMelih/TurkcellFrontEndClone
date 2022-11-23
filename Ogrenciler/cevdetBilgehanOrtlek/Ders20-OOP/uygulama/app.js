const ui = new UI();
const KEY = "Allfilms";
const storage = new Storage();
const movie= new Movie();
const constantMovieControl= "constantMovieControl";
const clearAllMovies= document.querySelector("#clear-movies");
const addMovies=document.querySelector("#movie-add");
const movieName=document.querySelector("#movieName");
const writers=document.querySelector("#Writers");
const url=document.querySelector("#url");
const year=document.querySelector("#year");
const movieType=document.querySelector("#type");
const updateMovie=document.querySelector("#movie-update");
const inputId= document.querySelector("#id");


eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", constantMovies);
  clearAllMovies.addEventListener("click",clearMovies);
  addMovies.addEventListener("click",movieAdd);
  updateMovie.addEventListener("click",updateMovies)

}

function constantMovies(){
    ui.deleteFilmList();
    let movies =storage.getFilmsFromStorage(KEY);
    localStorage.setItem(KEY, JSON.stringify(movies));
    const cmc =storage.getFilmsFromStorage(constantMovieControl);

if(cmc==""){
    const constantMovies= movie.constantMovies();
    constantMovies.forEach(element => {
        movies.push(element);
    });
}
    localStorage.setItem(KEY, JSON.stringify(movies));
    localStorage.setItem(constantMovieControl, JSON.stringify(true));
    movies =storage.getFilmsFromStorage(KEY);
    movies.forEach((movies) => {
        ui.getUIFilms(movies);
      });
}

function clearMovies(){

ui.deleteFilmList();
localStorage.removeItem(KEY);
}

function movieAdd(){
    ui.deleteFilmList();
    const filmNew = new Movie(
        movieName.value,writers.value,url.value,year.value,movieType.value
      );
      let movies =storage.getFilmsFromStorage(KEY);
      movies.push(filmNew);
      localStorage.setItem(KEY, JSON.stringify(movies));
      movies =storage.getFilmsFromStorage(KEY);
      movies.forEach(movies => {
        ui.getUIFilms(movies);
      });
      movieName.value="";
      writers.value="";
      url.value="";
      year.value="";
      movieType.value="";
}

function deleteMovie(e){
    ui.deleteEachFilm(e);
    storage.deleteStorage(e);
}

function editMovies(e){
  console.log(e.target.parentElement.id);
  let movies =storage.getFilmsFromStorage(KEY);

  movies.forEach(movie => {
    if(movie.id==e.target.parentElement.id){
    inputId.value=movie.id;
    movieName.value=movie.title;
    writers.value=movie.writers;
    url.value=movie.url;
    year.value=movie.date;
    movieType.value=movie.movieType;
    }
    
  });

}

function updateMovies(){
  let movies =storage.getFilmsFromStorage(KEY);
movies.forEach(movie => {
  console.log(movie.id);
  console.log(inputId.value);

  if(movie.id==inputId.value){
   movie.title= movieName.value;
   movie.writers=writers.value;
   movie.url=url.value;
   movie.date=year.value;
   movie.movieType=movieType.value;

  }
});
localStorage.setItem(KEY, JSON.stringify(movies));
ui.deleteFilmList();
movies =storage.getFilmsFromStorage(KEY);
movies.forEach(movies => {
  ui.getUIFilms(movies);
});

}

