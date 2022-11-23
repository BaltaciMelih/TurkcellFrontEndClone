function Storage() {}

//Local Storageden Film verisi alma
Storage.prototype.getMovieNamesFromStorage= function() {
    let Movies;
        if (localStorage.getItem("Movies") === null) {
           Movies = [];} 
        else {
           Movies = JSON.parse(localStorage.getItem("Movies"));   }
     return Movies;
};
 
//Local Storageye Film verisi gönderme
Storage.prototype.addMovieToStorage= function(movies) {
      let Movies = storage.getMovieNamesFromStorage();
      Movies.push(movies);
      localStorage.setItem("Movies", JSON.stringify(Movies));
};
 
//Local Storagedeki Filmleri Gösterme
Storage.prototype.LoadAllMoviesToUI= function() {
    let Movies = storage.getMovieNamesFromStorage();
    Movies.forEach(function (movie) {
    ui.MoviesUI(movie);
   });
};

//Local Storageden Filmi Silme
Storage.prototype.RemoveLocalStorage= function(RemoveMoviesName,RemoveMoviesDirector) {
    let Movies = storage.getMovieNamesFromStorage();
        for(let i = 0; i < Movies.length; i++) {
        if(Movies[i].newMovieName==RemoveMoviesName && Movies[i].newDirector==RemoveMoviesDirector ) {
            Movies.splice(i,1);}
        }
        localStorage.setItem("Movies", JSON.stringify(Movies));
};