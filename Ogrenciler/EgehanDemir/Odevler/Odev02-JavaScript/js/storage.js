function Storage() { }


Storage.prototype.addStorage = function (movieArr) {
    let allMovies = this.getFromStorage();
    allMovies.push(movieArr);
    localStorage.setItem('allMovies', JSON.stringify(allMovies));
    
};
Storage.prototype.updateStorage = function (movieArr) {
    localStorage.setItem('allMovies', JSON.stringify(movieArr));
};

Storage.prototype.getFromStorage = function () {
    let allMovies;
    if (localStorage.getItem("allMovies") === null) {
        allMovies = [];
    } else {
        allMovies = JSON.parse(localStorage.getItem("allMovies"));
    }
   return allMovies;
};

Storage.prototype.clearAllStorage = function () {
    localStorage.removeItem("allMovies");
};



