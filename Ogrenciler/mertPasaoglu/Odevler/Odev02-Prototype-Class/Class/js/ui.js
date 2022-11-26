export class UI {
  static addMovieToUi = (newFilm) => {
    const movieList = document.querySelector(".movie-cards");
    movieList.innerHTML += `        
    <div class="row d-flex justify-content-center mt-5">
      <div class="card shadow p-3 mb-3 rounded  border border-0 bg-success text-white" style="max-width: 480px">
        <div class="row">
          <div class="col-md-4 img"><img src="${newFilm.url}" class="img-fluid rounded-start" alt=""></div>
          <div class="col-md-8 ">
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 class="card-title fw-bold fs-2" contenteditable="true">${newFilm.name}</h5>
              <p class="card-text director-name fs-5" contenteditable="true">${newFilm.director}</p>
              <p class="card-text premiere fs-6" contenteditable="true">${newFilm.premiere}</p>
            </div>
            <div class="action-area mx-3 d-flex justify-content-evenly">
            <button class="btn btn-delete btn-danger">Delete</button>
            <button class="btn btn-edit btn-primary px-4 text-white">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  };
  static clearInputs = (name, director, url, premiere) => {
    name.value = "";
    director.value = "";
    url.value = "";
    premiere.value = "";
  };
  static displayMessage = (message, type) => {
    const formSection = document.querySelector(".form-section");
    const div = document.createElement("div");
    div.className = `${type}`;
    div.textContent = message;
    formSection.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 2000);
  };
  static loadAllMoviesToUi = (movies) => {
    const movieList = document.querySelector(".movie-cards");
    movies.forEach((movie) => {
      movieList.innerHTML += `
      <div class="row d-flex justify-content-center mt-5">
        <div class="card shadow p-3 mb-3 rounded border border-0 bg-success text-white" style="max-width: 480px">
          <div class="row">
            <div class="col-md-4 img"><img src="${movie.url}" class="img-fluid rounded-start" alt=""></div>
            <div class="col-md-8">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title fw-bold fs-2">${movie.name}</h5>
                <p class="card-text director-name fs-5">${movie.director}</p>
                <p class="card-text premiere fs-6">${movie.premiere}</p>
              </div>
              <div class="action-area mx-3 d-flex justify-content-evenly">
              <button class="btn btn-delete btn-danger">Delete</button>
              <button class="btn btn-edit btn-primary px-4 text-white">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    });
  };
  static deleteMovieFromUi = (e) => {
    e.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  };
  static clearAllMoviesFromUi = () => {
    let movieCards = document.querySelector(".movie-cards");
    while (movieCards.firstElementChild !== null) {
      movieCards.firstElementChild.remove();
    }
  };
  static editButton = () => {
    let submit = document.getElementById("add-movie");
    submit.innerText = "Edit Movie";
    submit.onclick = () => { submit.innerText = "Add Movie"};
  }
}
