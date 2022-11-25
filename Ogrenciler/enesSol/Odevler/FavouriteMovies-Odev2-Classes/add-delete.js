class Actions {
  static addMovie(e) {
    e.preventDefault();
    const id = movieIdInput.value;
    const title = movieNameInput.value.trim();
    const director = directorNameInput.value.trim();
    const poster = movieImageInput.value.trim();
    const releaseDate = releaseDateInput.value.trim();

    if ((title, director, poster, releaseDate === "")) {
      UI.showAlert("danger", "Please fill all the inputs.");
    } else {
      const movie = new Movie(id, title, director, poster, releaseDate);
      if (id !== "") {
        Edit.updateMovie(movie);
        document.getElementById("submitButton").innerText = "Add Movie";
      } else {
        movie.id = new Date().getTime();
        Actions.createMovie(movie);
      }
    }
  }

  // Add Movie
  static createMovie(movie) {
    UI.addMovieToUI(movie);
    Storage.addMovieToStorage(movie);
    UI.showAlert("success", "Movie successfully added.");
  }

  // Delete
  static deleteMovie(e) {
    const movieId = e.currentTarget.dataset["id"];
    e.currentTarget.parentElement.remove();
    Storage.deleteItemFromLS(movieId);
  }

  // Delete All Movies
  static clearAllMovies() {
    while (movieList.firstChild != null) {
      movieList.removeChild(movieList.firstChild); // Daha hızlı çalışacak
    }
    localStorage.removeItem("movies");
  }

  // Filtering Movies
  static filterMovies(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) {
      const text = listItem.textContent.toLowerCase();
      // console.log(text.indexOf(filterValue));
      if (text.indexOf(filterValue) === -1) {
        const alert = document.querySelector(".alert");
        if (!alert) {
          UI.showAlert("warning", "Could not find what you are looking for :(");
        }
        listItem.setAttribute("style", "display:none !important");
      } else {
        listItem.setAttribute("style", "display:block");
      }
    });
  }
}
