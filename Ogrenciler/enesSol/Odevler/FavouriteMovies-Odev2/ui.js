function UI() {}

UI.prototype.loadDefaultFilmsToUI = function () {
  const initialized = localStorage.getItem("initialized");
  if (!initialized) {
    const movies = [
      new Movie(
        1,
        "Wakanda Forever",
        "Ryan Coogler",
        "https://images.thedirect.com/media/photos/FeJx739VsAIHff6.jpg",
        "November 11, 2022"
      ),
      new Movie(
        2,
        "Titanic",
        "James Cameron",
        "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/145202/titanic-3dposteri.jpg",
        "December 19, 1997"
      ),
    ];
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("initialized", true);
  }
};

UI.prototype.addMovieToUI = function (movie) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  const editButton = document.createElement("a");
  const moviediv = document.createElement("div");
  moviediv.className = "card movie-card my-5 overflow-hidden";

  link.href = "#";
  link.dataset["id"] = movie.id;
  link.className = "delete-item my-auto";
  link.innerHTML = "<i class='fa fa-remove fa-2x text-danger'></i>";

  editButton.href = "#";
  editButton.dataset["id"] = movie.id;
  editButton.className = "edit my-auto mx-lg-5 mx-2";
  editButton.innerHTML = "<i class='fa fa-edit fa-2x'></i>";

  editButton.addEventListener("click", edit.updateMovieInfo);

  link.addEventListener("click", actions.deleteMovie);
  moviediv.innerHTML = `  <img style = "width: 300px; height: 350px" src="${movie.poster}" class="card-img-top img-fluid alt="...">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.director}</a>
    <p class="card-text">${movie.releaseDate}</a>
  </div>`;
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(moviediv);
  listItem.appendChild(link);
  listItem.appendChild(editButton);
  movieList.appendChild(listItem);
  movieNameInput.value = "";
  directorNameInput.value = "";
  movieImageInput.value = "";
  releaseDateInput.value = "";
};

// Load All Movies
UI.prototype.loadAllMoviesToUI = function () {
  movieList.innerHTML = "";
  let movies = storagePt.getMoviesFromStorage();
  movies.forEach(function (movie) {
    ui.addMovieToUI(movie);
  });
};

// Alert Method
UI.prototype.showAlert = function (type, message) {
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
};
