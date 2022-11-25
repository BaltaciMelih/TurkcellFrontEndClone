const form = document.getElementById("form");
const nameMovie = document.getElementById("movie-name");
const directorMovie = document.getElementById("movie-director");
const dateMovie = document.getElementById("movie-date");
const urlMovie = document.getElementById("movie-url");
const cardBodyTwo = document.querySelectorAll(".card-body")[1];
const clearMovies = document.getElementById("clear-archive");
const submitButton = document.getElementById("submit-button");
const filterMovie = document.getElementById("filter");

firstRun();
function firstRun() {
  if (localStorage.getItem("archive") === null) {
    Storage.addItemToStorage(
      new Movie(
        "Matrix",
        "Lana Wachowski",
        "1999-11-03",
        "https://tr.web.img3.acsta.net/c_310_420/pictures/210/201/21020166_20130717110427461.jpg"
      )
    );
    Storage.addItemToStorage(
      new Movie(
        "Eşkıya",
        "Yavuz Turgul",
        "1996-11-29",
        "https://tr.web.img2.acsta.net/c_310_420/pictures/bzp/01/17646.jpg"
      )
    );
    Storage.addItemToStorage(
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
  let movies = Storage.getItemFromStorage();
  UI.LoadAllItemsToUI(movies);
}

function addItem(e) {
  const name = nameMovie.value;
  const director = directorMovie.value;
  const date = dateMovie.value;
  const url = urlMovie.value;

  if (name === "" || director === "" || date === "" || url === "") {
    UI.displaymessage("Lütfen Tüm Bilgileri Doldurun", "danger");
  } else {
    const newMovie = new Movie(name, director, date, url);

    UI.addItemToUI(newMovie);
    Storage.addItemToStorage(newMovie);
    UI.displaymessage("Film Başarıyla Eklendi/Düzenlendi", "success");
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
    e.target.parentElement.parentElement.parentElement.remove();
    Storage.deleteItemFromStorage(
      e.target.parentElement.parentElement.parentElement.firstElementChild
        .nextElementSibling.textContent
    );
    UI.displaymessage("Film Başarıyla Silindi", "success");
  }
}

function clearAllItems() {
  if (confirm("Tüm Arşivi Silmek İstediğinize Emin Misiniz?")) {
    UI.clearAllItemsFromUI();
    Storage.clearAllItemsFromStorage();
    UI.displaymessage("Tüm Arşiv Silindi", "success");
  }
}

function editItem(e) {
  if (e.target.id === "edit-movie") {
    e.target.parentElement.parentElement.parentElement.remove();

    let movies = Storage.getItemFromStorage();
    movies.forEach(function (movie) {
      if (
        movie.name ===
        e.target.parentElement.parentElement.parentElement.firstElementChild
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

    Storage.deleteItemFromStorage(
      e.target.parentElement.parentElement.parentElement.firstElementChild
        .nextElementSibling.textContent
    );
    UI.displaymessage("Lütfen Filmi Düzenleyin", "warning");
  }
}

function filterItems(e) {
  const filterValue = e.target.value.toLowerCase();
  const filterNames = document.querySelectorAll(".filter-name");
  UI.filterItemsUI(filterNames, filterValue);
}
