import DomElements from "./domElements.js";
import Movie from "./movie.js";
import UI from "./ui.js";
import Storage from "./storage.js";

export default class EventsListener {
  static events() {
    //submit olduğunda imputları aktar
    DomElements.getDoms().movieForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = DomElements.getDoms().movieName.value.trim();
      const director = DomElements.getDoms().movieDirector.value.trim();
      const date = DomElements.getDoms().movieDate.value.trim();
      const url = DomElements.getDoms().movieUrl.value.trim();

      if (name === "" || director === "" || date === "" || url === "") {
        UI.showAlert("Boş bırakmayınız", "danger");
      } else {
        //movie oluşturma
        const movie = new Movie(name, director, date, url);
        console.log(movie);

        //UI'a ekleme
        UI.addMovie(movie);
        Storage.addMoviesToStorage(movie);
        UI.showAlert("Eklendi", "success");
        UI.clear();
      }
    });

    DomElements.getDoms().movieList.addEventListener("click", (e) => {
      UI.deleteMovie(e.target); //UI'dan silme
    });

    DomElements.getDoms().movieList.addEventListener("click", (e) => {
      //console.log("edit button");
      console.log(e.target);
      UI.editMovie(e.target); 
      UI.showAlert("Düzenleme", "info");
      
    })

  DomElements.getDoms().search.addEventListener("keyup", e => {
    let searchValue = e.target.value.toLowerCase();
    let movieNames = DomElements.getDoms().movieNameH3;
    console.log(movieNames);
    movieNames.forEach((movieName) => {
      const str = movieName.textContent.toLowerCase();
      if(str.indexOf(searchValue) === -1) {
        movieName.parentElement.parentElement.classList.add("d-none");
      }else{
        movieName.parentElement.parentElement.classList.remove("d-none");
      }
    })
  })

  }

}
