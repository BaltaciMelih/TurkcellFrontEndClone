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
    let _storedMovieLength = Storage.getFromStorage().length + 1
    UI.addListToUI({ "id": _storedMovieLength, "filmName": newName, "filmDirector": newDirector, "filmDate": newDate, "filmBg": newBg });
    Storage.addStorage({ "id": _storedMovieLength, "filmName": newName, "filmDirector": newDirector, "filmDate": newDate, "filmBg": newBg });
    UI.displayMessage("İnput başarıyla eklendi", "primary");
  }

}

function clearAllMovies(e) {
  e.preventDefault()
  if (confirm("Emin misiniz?")) {
    UI.clearAll();
    UI.displayMessage("Silme işlemi başarılı", "success");
    Storage.clearAllStorage();
  }
}


function starterCon() {
  let getStorage = Storage.getFromStorage();
  getStorage.forEach((element) => {
    UI.addListToUI(element);
  });
}

const setSelectedItem = (item) => {
  selectedItem = item
  if (document.querySelector('.active-movie')) {
    UI.selectedDelete();
  }
    UI.selectedAdd(selectedItem);
}

function removeItem() {
  if (selectedItem.indexOf('dummy') === -1) {
    UI.removeElement(selectedItem)
    let getStorage = Storage.getFromStorage();
    let _removedList = getStorage.filter(el=>{
      return el.id != selectedItem
    });

    Storage.updateStorage(_removedList)
  }else{
    UI.displayMessage("Dummy filmler silinemez!", "warning");
  }
}


