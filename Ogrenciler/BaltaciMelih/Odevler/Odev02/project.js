const form = document.getElementById("form");
const nameFilm = document.getElementById("film-name");
const directorFilm = document.getElementById("film-director");
const dateFilm = document.getElementById("film-date");
const urlFilm = document.getElementById("film-url");
const cardBodyTwo = document.querySelectorAll(".card-body")[1];
const clearFilms = document.getElementById("clear-archive");

const ui = new UI();

const storage = new Storage();

eventListeners();
loadAllItemsFromStorage();

function eventListeners() {
  form.addEventListener("submit", addItem);
  cardBodyTwo.addEventListener("click", deleteItem);
  clearFilms.addEventListener("click", clearAllItems);
  cardBodyTwo.addEventListener("click", editItem);
}

function loadAllItemsFromStorage() {
  let films = storage.getItemFromStorage();
  ui.LoadAllItemsToUI(films);
}

function addItem(e) {
  const name = nameFilm.value;
  const director = directorFilm.value;
  const date = dateFilm.value;
  const url = urlFilm.value;

  if (name === "" || director === "" || date === "" || url === "") {
    ui.displaymessage("Lütfen Tüm Bilgileri Doldurun", "danger");
  } else {
    const newFilm = new Film(name, director, date, url);

    ui.addItemToUI(newFilm);
    storage.addItemToStorage(newFilm);
    ui.displaymessage("Film Başarıyla Eklendi", "success");
  }

  nameFilm.value = "";
  directorFilm.value = "";
  dateFilm.value = "";
  urlFilm.value = "";

  e.preventDefault();
}

function deleteItem(e) {
  if (e.target.id === "delete-film") {
    e.target.parentElement.parentElement.remove();
    storage.deleteItemFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.displaymessage("Film Başarıyla Silindi", "success");
  }
}

function clearAllItems() {
  if (confirm("Tüm Arşivi Silmek İstediğinize Emin Misiniz?")) {
    ui.clearAllItemsFromUI();
    storage.clearAllItemsFromStorage();
  }
}

function editItem(e) {
  if (e.target.id === "edit-film") {
    e.target.parentElement.parentElement.remove();

    let films = storage.getItemFromStorage();
    films.forEach(function (film) {
      if (
        film.name ===
        e.target.parentElement.previousElementSibling.previousElementSibling
          .textContent
      ) {
        nameFilm.value = film.name;
        directorFilm.value = film.director;
        dateFilm.value = film.date;
        urlFilm.value = film.url;
      }
    });

    storage.deleteItemFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.displaymessage("Lütfen Filmi Düzenleyin", "warning");
  }
}
