class Add{ 

  static addMovie(e) {
  const newName = movieName.value.trim();
  const newPic = moviePic.value.trim();
  const newType = movieType.value.trim();
  const newDate = movieVisionDate.value.trim();

  if (newName == "" || newPic == "" || newType == "" || newDate == "") {
    UI.showAlert("danger", "Lütfen tüm alanları doldurunuz!!!");
  } else {
    UI.addMovieToUI(newName, newPic, newType, newDate);
    Storage.addMovieToStorage(newName, newPic, newType, newDate);
    Delcel.clearInputs();
    UI.showAlert("success", "Favori filminiz başarıyla eklenmiştir");
  }
  submitbutton.innerHTML = "Film Ekle";
  e.preventDefault();
}
 static editMovie(e) {
  const elm = e.target;
  if (elm.className === "fa fa-edit") {
    elm.parentElement.parentElement.parentElement.remove();
    let movies = Storage._getMovieFromStorage();
    movies.forEach(function (movie) {
      if (
        movie.name ===
        elm.parentElement.parentElement.previousElementSibling
          .previousElementSibling.previousElementSibling.previousElementSibling
          .textContent
      ) {
        movieName.value = movie.name;
        moviePic.value = movie.poster;
        movieType.value = movie.type;
        movieVisionDate.value = movie.visiondate;

        submitbutton.innerHTML = "Filmi Düzenle";
      }
    });
    Storage.deleteMovInStorage(
      elm.parentElement.parentElement.parentElement.childNodes[1].textContent
    );

    UI.showAlert("dark", "Film düzenleme modu aktif!");
  }
    }
    
    static allMovieLoad() {
  let movies = Storage._getMovieFromStorage();
  movies.forEach((mov) => {
    const name = mov.name;
    const poster = mov.poster;
    const type = mov.type;
    const visiondate = mov.visiondate;
    UI.addMovieToUI(name, poster, type, visiondate);
  });
}
};