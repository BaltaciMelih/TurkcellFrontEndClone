class Storage { 

static addStorage(movieArr) {
    let allMovies = this.getFromStorage();
    allMovies.push(movieArr);
    localStorage.setItem('allMovies', JSON.stringify(allMovies));   
}
static updateStorage(movieArr) {
    localStorage.setItem('allMovies', JSON.stringify(movieArr));
}
static getFromStorage() {
    let allMovies;
    if (localStorage.getItem("allMovies") === null) {
        allMovies = [];
    } else {
        allMovies = JSON.parse(localStorage.getItem("allMovies"));
    }
   return allMovies;
}

static clearAllStorage() {
    localStorage.removeItem("allMovies");
}

}



