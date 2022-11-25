class Storage{

static defaultMovie = function(){
   films = localStorage.getItem("films")? JSON.parse(localStorage.getItem("films")): [];
return films;
} ;

static deleteMovie= function (target) {
    films= Storage.defaultMovie();
    films.forEach(function (film, index) {
      if (film.name === target) {
       films.splice(index, 1);
      }
    });
  
    localStorage.setItem("films", JSON.stringify(films));
  };
}