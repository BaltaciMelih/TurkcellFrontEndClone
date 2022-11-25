export default class Movie{
    constructor(movieName, movieDirector, movieDate, movieUrl){
        this.id = `${Math.floor(Math.random() * 1000)}`;
        this.name = movieName;
        this.director = movieDirector;
        this.date = movieDate;
        this.url = movieUrl;
    }
}

