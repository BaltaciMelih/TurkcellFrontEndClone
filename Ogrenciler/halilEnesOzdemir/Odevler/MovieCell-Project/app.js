const form = document.querySelector('#movie-form');
const album = document.getElementById('album');
const addMovieButton = document.getElementById('add-movie');

eventListeners();

function eventListeners() {
  addMovieButton.addEventListener('click', addMovie);
  document.addEventListener('DOMContentLoaded', starterCond);
  album.addEventListener('click', deleteMovie);
  album.addEventListener('click', editMovie);
}

const ui = new UI();

const storage = new LStorage();

function starterCond() {
  let movies = storage.getMoviesFromStorage();
  movies.forEach((movie) => {
    ui.addMovieToList(movie);
  });
}

function addMovie() {
  ui.addFormUI();
  ui.removeAddMovieButton();
  const addMovieSubmit = document.getElementById('add-movie-submit');
  addMovieSubmit.addEventListener('click', addMovieSubmitFunc);
  const clearAll = document.getElementById('clear-all');
  clearAll.addEventListener('click', clearAllMovies);
}

function addMovieSubmitFunc(e) {
  const nameInput = document.querySelector('#name');
  const directorInput = document.querySelector('#director');
  const releaseInput = document.querySelector('#release');
  const urlInput = document.querySelector('#url');

  if (nameInput.value === '' || directorInput.value === '' || urlInput.value == '' || releaseInput.value === '') {
    ui.showAlert('Lütfen tüm alanları doldurun', 'danger');
  } else {
    const newMovie = new Movie(nameInput.value, directorInput.value, urlInput.value, releaseInput.value);
    ui.addMovieToList(newMovie);
    storage.addMovieToStorage(newMovie);
    ui.showAlert('Film başarıyla eklendi', 'success');
  }
  ui.clearFields(nameInput, directorInput, urlInput, releaseInput);
  e.preventDefault();
}

function deleteMovie(e) {
  if (e.target.id === 'delete-movie') {
    ui.deleteMovieFromList(e.target.closest('.ancestor'));
    storage.deleteMovieFromStorage(e.target.parentElement.parentElement.children[0].textContent);
    ui.showAlert('Silme işlemi başarılı', 'success');
  }
}

function editMovie(e) {
  console.log(e);
  if (e.target.id === 'edit-movie') {
    ui.editMovieUI(e);
    ui.showAlert('Düzenleme işlemi başarılı', 'Success');
  }
}

function clearAllMovies(e) {
  if (e.target.id === 'clear-all') {
    ui.clearAllMoviesFromList();
    storage.clearAllMoviesFromStorage();
  }
  e.preventDefault();
}
