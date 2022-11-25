class Storage {

//Local Storageden Film verisi alma
static getMovieNamesFromStorage() {
    let Movies;
        if (localStorage.getItem("Movies") === null) {
           Movies = [];} 
        else {
           Movies = JSON.parse(localStorage.getItem("Movies"));   }
     return Movies;
};
 
//Local Storageye Film verisi gönderme
static addMovieToStorage(movies) {
      let Movies = Storage.getMovieNamesFromStorage();
      Movies.push(movies);
      localStorage.setItem("Movies", JSON.stringify(Movies));
};
 
//Local Storagedeki Filmleri Gösterme
static LoadAllMoviesToUI() {
    let Movies = Storage.getMovieNamesFromStorage();
    Movies.forEach(function (movie) {
    UI.MoviesUI(movie);
   });
};

//Local Storageden Filmi Silme
static RemoveLocalStorage(RemoveMoviesName,RemoveMoviesDirector) {
    let Movies = Storage.getMovieNamesFromStorage();
        for(let i = 0; i < Movies.length; i++) {
        if(Movies[i].newMovieName==RemoveMoviesName && Movies[i].newDirector==RemoveMoviesDirector ) {
            Movies.splice(i,1);}
        }
        localStorage.setItem("Movies", JSON.stringify(Movies));
};

}