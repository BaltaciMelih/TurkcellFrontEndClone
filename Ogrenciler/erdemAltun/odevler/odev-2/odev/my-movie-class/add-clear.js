class move {
  static deletemovie(e) {
    const elm = e.target;
    if (elm.className === "fa fa-remove") {
      elm.parentElement.parentElement.parentElement.remove();
      Lclstorage.deleteMovInStorage(
        elm.parentElement.parentElement.parentElement.childNodes[1].textContent
      );
      Ui.showAlert("success", "Film Başarıyla Silindi...");
    }
  }

  static clearAllMovies() {
    while (movielist.firstChild != null) {
      movielist.removeChild(movielist.firstChild);
    }
    localStorage.removeItem("movies");
  }

  static addMovie(e) {
    e.preventDefault();

    const newName = movieName.value.trim();
    const newPic = moviePoster.value.trim();
    const newType = movieDirector.value.trim();
    const newDate = movieDate.value.trim();

    if (newName == "" || newPic == "" || newType == "" || newDate == "") {
      Ui.showAlert("danger", "Lütfen tüm alanları doldurunuz!!!");
    } else {
      Ui.addMovieToUI(newName, newPic, newType, newDate);
      Lclstorage.addMovieToStorage(newName, newPic, newType, newDate);
      clearInputs();
      Ui.showAlert("success", "Favori filminiz başarıyla eklenmiştir");
    }

    return false;
  }

  static movFilter(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".name");
    listItems.forEach(function (listItem) {
      const text = listItem.textContent.toLowerCase();
      if (text.indexOf(filterValue) === -1) {
        const alert = document.querySelector(".alert");
        if (!alert) {
          Ui.showAlert("warning", "Aradığınız Film Bulunamadı!");
        }
        listItem.parentElement.setAttribute("style", "display:none !important");
      } else {
        listItem.parentElement.setAttribute("style", "display:table-row");
      }
    });
  }


}
