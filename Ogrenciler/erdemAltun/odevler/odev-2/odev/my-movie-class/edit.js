class edit {
  static editMovie(e) {
    const elm = e.target;
    if (elm.className === "fa fa-edit") {
      editMovInStorage(
        elm.parentElement.parentElement.parentElement.childNodes[1].textContent
      );
      elm.parentElement.parentElement.parentElement.remove();
      Lclstorage.deleteMovInStorage(
        elm.parentElement.parentElement.parentElement.childNodes[1].textContent
      );
    }

    Lclstorage.deleteMovInStorage(
      elm.parentElement.parentElement.parentElement.childNodes[1].textContent
    );

    Ui.showAlert("warning", "Film filmi düzenle!");
  }
}

function allMovieLoad() {
  let movies = Lclstorage._getMovieFromStorage();
  movies.forEach((mov) => {
    const name = mov.name;
    const poster = mov.poster;
    const type = mov.type;
    const visiondate = mov.visiondate;
    Ui.addMovieToUI(name, poster, type, visiondate);
  });
}

function editMovInStorage(name) {
  let movies = Lclstorage._getMovieFromStorage();

  movies.forEach(function (mov) {
    if (mov.name == name) {
      movieName.value = mov.name;
      moviePoster.value = mov.poster;
      movieDirector.value = mov.director;
      movieDate.value = mov.visiondate;
    }
  });
}
