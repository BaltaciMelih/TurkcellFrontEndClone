const movieForm = document.getElementById("movieAdd-Form");
const movieName = document.getElementById("name");
const movieDirector = document.getElementById("director");
const movieDate = document.getElementById("date");
const movieBg = document.getElementById("bg-url");
const movieList = document.getElementById("movie-list");
const deleteAllButton = document.getElementById("clearAllMovies");
const card = document.querySelectorAll(".card");
const deleteMovie = document.getElementById("deleteMovie");
const addMovies = document.getElementById("addMovie");

 let selectedItem;

const storage = new Storage();
const ui = new UI();

eventListeners();
function eventListeners() {
  movieForm.addEventListener("submit", addMovie);
  deleteAllButton.addEventListener("click", clearAllMovies);
  deleteMovie.addEventListener('click', removeItem)
  document.addEventListener("DOMContentLoaded", starterCon);
}



let movieArr = [];
function addMovie(e) {
  e.preventDefault();
  const newName = movieName.value.trim();
  const newDirector = movieDirector.value.trim();
  const newDate = movieDate.value.trim();
  const newBg = movieBg.value;
  if (newName == "" && newDirector == "" && newDate == "") {
    ui.displayMessage("Lütfen bütün bilgileri girin.", "danger");
  } else {
    let _storedMovieLength = storage.getFromStorage().length + 1
    ui.addListToUI({ "id": _storedMovieLength, "filmName": newName, "filmDirector": newDirector, "filmDate": newDate, "filmBg": newBg });
    storage.addStorage({ "id": _storedMovieLength, "filmName": newName, "filmDirector": newDirector, "filmDate": newDate, "filmBg": newBg });
    ui.displayMessage("İnput başarıyla eklendi", "primary");
  }

}

function clearAllMovies(e) {
  e.preventDefault()
  if (confirm("Emin misiniz?")) {
    ui.clearAll();
    ui.displayMessage("Silme işlemi başarılı", "success");
    storage.clearAllStorage();
  }
}


function starterCon() {
  let getStorage = storage.getFromStorage();
  getStorage.forEach((element) => {
    ui.addListToUI(element);
  });
}

const setSelectedItem = (item) => {
  selectedItem = item
  if (document.querySelector('.active-movie')) {
    ui.selectedDelete();
  }
    ui.selectedAdd(selectedItem);
}

function removeItem() {
  if (selectedItem.indexOf('dummy') === -1) {
    ui.removeElement(selectedItem)
    let getStorage = storage.getFromStorage();
    let _removedList = getStorage.filter(el=>{
      return el.id != selectedItem
    });

    storage.updateStorage(_removedList)
  }else{
    ui.displayMessage("Dummy filmler silinemez!", "warning");
  }
}


