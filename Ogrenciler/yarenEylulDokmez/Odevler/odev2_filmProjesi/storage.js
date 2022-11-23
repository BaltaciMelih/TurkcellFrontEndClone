function Storage() {}

Storage.prototype.defaultMovie = function(){
   films = localStorage.getItem("films")? JSON.parse(localStorage.getItem("films")): [];
return films;
} ;

Storage.prototype.deleteMovie= function (target) {
    films= storage.defaultMovie();
    films.forEach(function (film, index) {
      if (film.name === target) {
       films.splice(index, 1);
      }
    });
  
    localStorage.setItem("films", JSON.stringify(films));
  };