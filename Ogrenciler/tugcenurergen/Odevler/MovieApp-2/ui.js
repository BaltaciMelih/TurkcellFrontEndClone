import DomElements from "./domElements.js";
import EventsListener from "./eventsListener.js";
import Storage from "./storage.js";

export default class UI {
  static displayMovies() {
    const movies = Storage.getMoviesFromStorage(); //boş bir filmler dizisi oluşturdum

    movies.forEach((movie) => UI.addMovie(movie)); //dizideki her filmi listeye eklemek için addMovie fonksiyonunu çağırdım
  }

  static addMovie(movie) {
    //editleme işlemi sonrası kaydetmeden kalan Edit butonunu tekrardan save butonuna çevirdim.
    DomElements.getDoms().saveButton.innerHTML = "Save";
    const list = DomElements.getDoms().movieList;
    const liItem = document.createElement("li");
    liItem.classList.add("row");
    liItem.id = movie.id; //localstorage'den silme işlemi için oluşturulan filmlerin id'sini filmlerin dom elementleri ile aynı yaptım
    console.log(movie.id);
    console.log(liItem.id);
    liItem.innerHTML = `
        <div 
              class="col col-4 bg-secondary bg-gradient d-flex flex-row justify-content-center rounded-start">
              <img
                class="img-fluid w-50"
                src="${movie.url}"
                alt="" />
            </div>
            <div
              class="col col-6 bg-secondary bg-gradient text-light d-flex flex-column justify-content-evenly align-items-start">
              <h3 class="movie-name-h3">Movie Name: ${movie.name}</h3>
              <h3>Movie Director:  ${movie.director}</h3>
              <h3>Movie Date:  ${movie.date}</h3>
            </div>
            <div
              class="col col-2 bg-secondary bg-gradient buttons d-flex justify-content-evenly align-items-center rounded-end">
              <button id="edit-button"  class="btn btn-dark bg-gradient h-25 edit-button ">edit</button>
              <button  id="delete-button" class="btn btn-danger h-25 delete-button">delete</button>
            </div>
        `;

    list.appendChild(liItem);
  }

  static clear() {
    DomElements.getDoms().movieName.value = "";
    DomElements.getDoms().movieDirector.value = "";
    DomElements.getDoms().movieDate.value = "";
    DomElements.getDoms().movieUrl.value = "";
  }

  static deleteMovie(htmlElement) {
    if (htmlElement.classList.contains("delete-button")) {
      console.log(htmlElement.id);
      htmlElement.parentElement.parentElement.remove();
      Storage.removeMovieFromStorage(
        htmlElement.parentElement.parentElement.id
      );
        //eğer editleme sırasındaki silme işlemi ise silindi alerti göstermesin
      if (
        !DomElements.getDoms().saveButton.classList.contains("editing-submit")
      ) {
        UI.showAlert("silindi", "success");
      }
      //sonraki silmeler için classList'i eski haline getirdim
      DomElements.getDoms().saveButton.classList.remove("editing-submit");
      
    }
  }

  static showAlert(message, type) {
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.appendChild(document.createTextNode(message));
    const alertDiv = DomElements.getDoms().alertDiv;
    const movieList = DomElements.getDoms().movieList;
    alertDiv.insertBefore(div, movieList); //movieListten önce div i alertDiv'e ekle

    setTimeout(() => DomElements.getDoms().alert.remove(), 1500); //3 saniye sonra sil
  }

  static editMovie(htmlElement) {
    if (htmlElement.classList.contains("edit-button")) {
      const allMovies = Storage.getMoviesFromStorage();
      const editingMovie = htmlElement.parentElement.parentElement;

      allMovies.forEach((movieObject) => {
        if (movieObject.id === editingMovie.id) {
          //editlenecek filme ulaşıldı
          const editingName = movieObject.name;
          const editingDirector = movieObject.director;
          const editingDate = movieObject.date;
          const editingUrl = movieObject.url;

          DomElements.getDoms().movieName.value = editingName;
          DomElements.getDoms().movieDirector.value = editingDirector;
          DomElements.getDoms().movieDate.value = editingDate;
          DomElements.getDoms().movieUrl.value = editingUrl;

          DomElements.getDoms().saveButton.classList.add("editing-submit");
          DomElements.getDoms().saveButton.innerHTML = "Edit";

          htmlElement.classList.add("delete-button"); //silinebilmesi için editlenecek filmin butonuna da delete-button verdim
          htmlElement.parentElement.parentElement.remove();
          UI.deleteMovie(htmlElement);

        }
      });
    }

  }


}
