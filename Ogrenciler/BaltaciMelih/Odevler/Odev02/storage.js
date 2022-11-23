function Storage() {}

Storage.prototype.addItemToStorage = function (newFilm) {
  let films = this.getItemFromStorage();
  films.push(newFilm);

  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.getItemFromStorage = function () {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};

Storage.prototype.deleteItemFromStorage = function (filmName) {
  let films = this.getItemFromStorage();
  films.forEach(function (film, index) {
    if (film.name === filmName) {
      films.splice(index, 1);
    }
  });
  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.clearAllItemsFromStorage = function () {
  localStorage.removeItem("films");
};
