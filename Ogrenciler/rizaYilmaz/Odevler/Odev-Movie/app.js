const movieFormInput = document.querySelector("#movie-form");
const movieNameInput = document.querySelector("#movieNameInput");
const directorInput = document.querySelector("#directorInput");
const moviePosterUrlInput = document.querySelector("#moviePosterUrlInput");
const releaseDateInput = document.querySelector("#releaseDateInput");
const genreSelectInput = document.querySelector("#genreSelectInput");
const unorderList = document.querySelector("#unorder-list");

movieFormInput.addEventListener("submit", submitForm);

function submitForm(e) {
  const movie = new Movie(
    movieNameInput.value.trim(),
    directorInput.value.trim(),
    moviePosterUrlInput.value.trim(),
    releaseDateInput.value.trim(),
    genreSelectInput.value.trim()
  );
  e.preventDefault();
}
let staticMovie = new Movie(
  "The Lord of the Rings: The Two Towers",
  "Peter Jackson",
  "https://pic-bstarstatic.akamaized.net/ugc/14fbdb83fcacf53581121419ce024b90fdbd2df6.png@720w_405h_1e_1c_1f.webp",
  2002,
  "Adventure"
);
let staticMovie1 = new Movie(
  "The Hobbit: An Unexpected Journey",
  "Peter Jackson",
  "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/the-hobbit-an-unexpected-journey.jpg",
  2012,
  "Adventure"
);
function Movie(name, director, url, date, genre) {
  this.name = name;
  this.director = director;
  this.url = url;
  this.date = date;
  this.genre = genre;
  const newElement = document.createElement("li");
  newElement.classList.add("list-item");
  newElement.innerHTML = `<div class="card mb-3 " style="max-width: 1000px;">
    <div class="row g-1">
      <div class="col-md-4">
        <img src="${url}" class="img-fluid rounded" alt="">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h6 class="card-title fw-bold">Movie Name:  <span class="fw-normal">${name}</span></h6>
          <h6 class="card-title fw-bold">Director:  <span class="fw-normal">${director}</span></h6>
          <h6 class="card-title fw-bold">Release Date:  <span class="fw-normal">${date}</span></h6>
          <h6 class="card-title fw-bold">Genre:  <span class="fw-normal">${genre}</span></h6>
        </div>
      </div>
      <div class="col-md-2 btn-group-vertical">
        <button class="btn btn-primary ">Edit</button>
        <button class="btn btn-danger remove">Delete</button>
      </div>
    </div>
  </div>`;
  filterMovie();
  unorderList.appendChild(newElement);
  clearTextInput();
  deleteItem();
}
function clearTextInput(){
  movieNameInput.value = "";
  directorInput.value = "";
  moviePosterUrlInput.value = "";
  releaseDateInput.value = "";
  genreSelectInput.value = "";
}
function filterMovie() {
  let filter = document.getElementById("filter");
  filter.addEventListener("keyup", filterMovie);
  function filterMovie(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-item");
    listItems.forEach(function (listItem) {
      const text = listItem.textContent.toLowerCase();
      if (text.indexOf(filterValue) === -1) {
        listItem.setAttribute("style", "display:none !important");
      } else {
        listItem.setAttribute("style", "display:block");
      }
    });
  }
}
function deleteItem() {
  let deleteMovie = document.querySelectorAll("li");
  for (let i = 0; i < deleteMovie.length; i++) {
    deleteMovie[i].addEventListener("click", deleteMovieFunction);
  }
  function deleteMovieFunction(e) {
    if (e.target.className === "btn btn-danger remove") {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  }
}
const clearButton = document.getElementById("clearAllButton");
clearButton.addEventListener("click", clearAllMovie);
function clearAllMovie() {
  while (unorderList.firstChild != null) {
    unorderList.removeChild(unorderList.firstChild);
  }
}