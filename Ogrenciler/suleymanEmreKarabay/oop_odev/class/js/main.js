const KEY_NAME = "filmsDefault";
const INIT_KEY_NAME = "initialized";
const ADD_KEY_NAME = "add";
const id = document.querySelector("#id");

const filmTitle = document.querySelector("#filmTitle");
const filmDirector = document.querySelector("#filmDirector");
const posterUrl = document.querySelector("#posterUrl");
const filmDate = document.querySelector("#filmDate");
const addButton = document.querySelector("#filmAdd");
const clearAllButton = document.querySelector("#clearAll");
const updateButton = document.querySelector("#update");

const ulDiv = document.querySelector(".list-group");

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", loadFilmsToUI);
  addButton.addEventListener("click", addNewFilm);
  clearAllButton.addEventListener("click", clearAll);
  updateButton.addEventListener("click", updateFilm);
}

function loadFilmsToUI() {
  UI.deleteFilmList();

  if (Storage.getFilmsFromStorage(INIT_KEY_NAME) == "") {
    const firstFilms = Movie.defaultFilms();
    localStorage.setItem(INIT_KEY_NAME, true);
    localStorage.setItem(KEY_NAME, JSON.stringify(firstFilms));
  }
  const films = Storage.getFilmsFromStorage(KEY_NAME);

  films.forEach((film) => {
    UI.getUIFilms(film);
  });
}

function addNewFilm() {
  if (UI.emptyControl()) {
    UI.deleteFilmList();
    const films = Storage.getFilmsFromStorage(KEY_NAME);
    const newFilm = new Movie(
      filmTitle.value,
      filmDirector.value,
      posterUrl.value,
      filmDate.value
    );
    films.push(newFilm);
    localStorage.setItem(KEY_NAME, JSON.stringify(films));
    loadFilmsToUI();
    UI.inputDelete();
    UI.alert("success", "movie upload successful", 2000);
  }
}

function clearAll() {
  UI.deleteFilmList();
  localStorage.removeItem(KEY_NAME);
  Storage.getFilmsFromStorage(KEY_NAME);
}

function deleteFilm(e) {
  UI.deleteFilmItem(e);
  Storage.deleteItemFromStorage(e);
  UI.alert("success", "Deletion Successful", 2000);
}

function editFilm(e) {
  UI.editFilmItem(e);
  UI.addNoneButton(addButton);
  UI.addNoneButton(clearAllButton);
  UI.deleteNoneButton(updateButton);
}

function updateFilm(e) {
  UI.addNoneButton(updateButton);
  UI.deleteNoneButton(addButton);
  UI.deleteNoneButton(clearAllButton);
  Storage.updateFilmFromStorage();
  UI.deleteFilmList();
  const films = Storage.getFilmsFromStorage(KEY_NAME);
  films.forEach((film) => {
    UI.getUIFilms(film);
  });
  UI.inputDelete();
  UI.alert("success", "movie add successful", 2000);
}
