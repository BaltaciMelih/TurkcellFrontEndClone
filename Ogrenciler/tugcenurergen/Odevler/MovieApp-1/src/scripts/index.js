import { Movie } from "./movie.js";
import { DomElements } from "./domElements.js";
import { Storage } from "./storage.js";

const Main = function () {
  this.doms;
  this.movieObjects = [];
};

Main.prototype.mainProcess = function () {
  //Movie.mainProcess();
  Storage.mainProcess();
  this.movieObjects = Storage.mainProcess();
  console.log(this.movieObjects);
  this.doms = DomElements.mainProcess();
  //this.listenEvents();
  this.eventsListener();
  this.showMovies();
};

Main.prototype.eventsListener = function () {
  this.doms.uploadBox.addEventListener("click", () =>
    this.doms.fileInput.click()
  ); //this is for click the fileInput when clicking the uploadbox
  this.doms.fileInput.addEventListener("change", this.loadFile);
  this.doms.saveButton.addEventListener("click", () => this.addMovie());
  this.doms.deleteButton.addEventListener("click", this.deleteMovieUI);
};

Main.prototype.showMovies = function () {
  this.movieObjects.forEach((element) => {
    this.addMovieToUI(element);
  });
};

Main.prototype.addMovieToUI = function ({
  movieName,
  movieDirector,
  movieDate,
  movieUrl,
}) {
  //addMovieToUI
  const listItem = document.createElement("li");
  listItem.innerHTML = `
  <li class="row list-group-item d-flex flex-row justify-content-between border mb-3 mt-3 ">
  <div class="col-2 d-flex justify-content-center">
    <img class="bg-dark img-fluid" src="${movieUrl}" alt="" />
  </div>
  <div class="col-8 d-flex justify-content-between bg-light">
    <div class="d-flex flex-column">
    <p>Movie name:  ${movieName}</p>
    <p>Movie Director:  ${movieDirector}</p>
    <p>Movie Date:  ${movieDate}</p>
    </div>
    <div class="d-flex flex-column gap-4 mt-2 ">
    <button class="delete-btn btn btn-dark">delete</button>
    <button class="edit-btn btn btn-dark">edit</button>
    </div>
  </div>
  </li>
  `;
  this.doms.list.appendChild(listItem);
};

Main.prototype.deleteMovieUI = function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.parentElement.parentElement.remove();
    console.log("delete element");
  }
};

Main.prototype.getDoms = function () {
  return this.doms;
};

Main.prototype.addMovie = function () {
  const name = this.doms.movieName.value.trim();
  const director = this.doms.movieDirector.value.trim();
  const date = this.doms.movieDate.value.trim();
  const url = this.doms.enterUrlInput.value.trim();
  const newMovie = new Movie({ name, director, date, url });
  if (name === "" || director === "" || url === "" || date === "") {
    console.log("eksik");
  } else {
    console.log("eklendi");
    Storage.addToStorage(newMovie);
    this.addMovieToUI(newMovie);
  }
};

Main.prototype.loadFile = (e) => {
  const file = e.target.files[0];
  if (!file) return; //return if user has not selected any files
  this.doms.previewImg.src = URL.createObjectURL(file); //creates a URL of the passed object
  this.doms.previewImg.addEventListener("load", () => {
    // document.querySelector(".wrapper").classList.add("active"); //once image loaded adding active class in the wrapper
  });
};

export { Main };
