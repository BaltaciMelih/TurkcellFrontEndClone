export default class Storage{
    static getMoviesFromStorage(){
        let movies;
        if(localStorage.getItem("movies") === null){
            movies = [];
        }else{
            movies = JSON.parse(localStorage.getItem("movies"))
        }

        return movies;
    }

    static addMoviesToStorage(movie){
        const movies = Storage.getMoviesFromStorage();
        movies.push(movie);
        localStorage.setItem("movies",JSON.stringify(movies));
    }

    static removeMovieFromStorage(elementId){
        const movies = Storage.getMoviesFromStorage();
        console.log(elementId);
        movies.forEach((movie,index) =>{
            if(movie.id === elementId){
                movies.splice(index, 1);  //isimleri eşleşen filmi diziden sildik
            }
        });

        localStorage.setItem('movies', JSON.stringify(movies)); //yeni diziyi localStprage'e kaydettik.
    }
}