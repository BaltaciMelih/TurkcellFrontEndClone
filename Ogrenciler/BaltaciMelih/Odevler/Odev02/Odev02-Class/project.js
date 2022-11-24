const form = document.getElementById("form");
const nameMovie = document.getElementById("movie-name");
const directorMovie = document.getElementById("movie-director");
const dateMovie = document.getElementById("movie-date");
const urlMovie = document.getElementById("movie-url");
const cardBodyTwo = document.querySelectorAll(".card-body")[1];
const clearMovies = document.getElementById("clear-archive");
const submitButton = document.getElementById("submit-button");
const filterMovie = document.getElementById("filter");

const ui = new UI();

const storage = new Storage();

firstRun();
function firstRun() {
  if (localStorage.getItem("movies") === null) {
    storage.addItemToStorage(
      new Movie(
        "Matrix",
        "Lana Wachowski",
        "1999-11-03",
        "https://tr.web.img3.acsta.net/c_310_420/pictures/210/201/21020166_20130717110427461.jpg"
      )
    );
    storage.addItemToStorage(
      new Movie(
        "Eşkıya",
        "Yavuz Turgul",
        "1996-11-29",
        "https://tr.web.img2.acsta.net/c_310_420/pictures/bzp/01/17646.jpg"
      )
    );
    storage.addItemToStorage(
      new Movie(
        "12 Angry Men",
        "Sidney Lurnet",
        "1999-04-01",
        "https://tr.web.img4.acsta.net/c_310_420/pictures/bzp/03/4063.jpg"
      )
    );
  }
}

eventListeners();
loadAllItemsFromStorage();

function eventListeners() {
  form.addEventListener("submit", addItem);
  cardBodyTwo.addEventListener("click", deleteItem);
  clearMovies.addEventListener("click", clearAllItems);
  cardBodyTwo.addEventListener("click", editItem);
  filterMovie.addEventListener("keyup", filterItems);
}

function loadAllItemsFromStorage() {
  let movies = storage.getItemFromStorage();
  ui.LoadAllItemsToUI(movies);
}

function addItem(e) {
  const name = nameMovie.value;
  const director = directorMovie.value;
  const date = dateMovie.value;
  const url = urlMovie.value;

  if (name === "" || director === "" || date === "" || url === "") {
    ui.displaymessage("Lütfen Tüm Bilgileri Doldurun", "danger");
  } else {
    const newMovie = new Movie(name, director, date, url);

    ui.addItemToUI(newMovie);
    storage.addItemToStorage(newMovie);
    ui.displaymessage("Film Başarıyla Eklendi/Düzenlendi", "success");
  }

  nameMovie.value = "";
  directorMovie.value = "";
  dateMovie.value = "";
  urlMovie.value = "";

  submitButton.innerHTML = "Filmi Arşive Ekle";
  submitButton.className = "btn btn-success mb-3";

  e.preventDefault();
}

function deleteItem(e) {
  if (e.target.id === "delete-movie") {
    e.target.parentElement.parentElement.remove();
    storage.deleteItemFromStorage(
      e.target.parentElement.parentElement.firstElementChild.nextElementSibling
        .textContent
    );
    ui.displaymessage("Film Başarıyla Silindi", "success");
  }
}

function clearAllItems() {
  if (confirm("Tüm Arşivi Silmek İstediğinize Emin Misiniz?")) {
    ui.clearAllItemsFromUI();
    storage.clearAllItemsFromStorage();
    ui.displaymessage("Tüm Arşiv Silindi", "success");
  }
}

function editItem(e) {
  if (e.target.id === "edit-movie") {
    e.target.parentElement.parentElement.remove();

    let movies = storage.getItemFromStorage();
    movies.forEach(function (movie) {
      if (
        movie.name ===
        e.target.parentElement.parentElement.firstElementChild
          .nextElementSibling.textContent
      ) {
        nameMovie.value = movie.name;
        directorMovie.value = movie.director;
        dateMovie.value = movie.date;
        urlMovie.value = movie.url;
      }
      submitButton.innerHTML = "Filmi Düzenleyin";
      submitButton.className = "btn btn-warning mb-3";
    });

    storage.deleteItemFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.displaymessage("Lütfen Filmi Düzenleyin", "warning");
  }
}

function filterItems(e) {
  const filterValue = e.target.value.toLowerCase();
  const filterNames = document.querySelectorAll(".filter-name");
  ui.filterItemsUI(filterNames, filterValue);
}
