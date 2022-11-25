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
      Storage.removeMovieFromStorage(e.target.parentElement.parentElement.id);
      UI.showAlert("Silindi", "success");
    });

    // DomElements.getDoms().editButton.addEventListener("click", (e) => {
    //   UI.editMovie(e.target); 
    //   UI.showAlert("Düzenleme", "info");
    // })
  }
}
