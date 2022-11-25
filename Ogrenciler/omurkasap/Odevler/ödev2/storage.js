function Storage(){
    this.movies;
};

Storage.prototype.getFromStorage = function() {
    if (localStorage.getItem("film")===null){
        this.movies = []
        console.log(this.movies)
        console.log("Get Çalışıyor")
    }

    else {
        this.movies= JSON.parse(localStorage.getItem("film"))
        console.log(this.movies)
    }

    
}

Storage.prototype.setFromStorage = function() {
    localStorage.setItem("film", JSON.stringify(this.movies))
}
Storage.prototype.updateStorage = function(title) {
    let films = this.movies;
    console.log(typeof title)
    console.log(title)
    
    films.forEach(function(name, index){
        if (name.name === title){
            films.splice(index, 1)
            console.log(films)
        }
        console.log(typeof name.name)
        console.log(name.name)
       
        
    })
    storage.setFromStorage();
}
