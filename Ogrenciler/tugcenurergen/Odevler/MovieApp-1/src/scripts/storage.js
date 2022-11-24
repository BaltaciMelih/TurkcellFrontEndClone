const Storage = function () {
  this.data = [];
  console.log(this.data);
};

Storage.mainProcess = function () {
  this.getFromStorage();
  return this.data;
};

Storage.getFromStorage = function () {
  if (localStorage.getItem("movies") === null) {
    this.data = [];
  } else {
    this.data = JSON.parse(localStorage.getItem("movies"));
  }
};

Storage.addToStorage = function (newMovie) {
  this.data = this.mainProcess();
  this.data.push(newMovie);
  console.log(newMovie);
  console.log("FilmData", this.data);
  this.setStorage();
};

Storage.setStorage = function () {
  localStorage.setItem("movies", JSON.stringify(this.data));
  console.log("localstorage");
};

export { Storage };
