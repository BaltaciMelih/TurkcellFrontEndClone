function UI() {}

UI.prototype.addTodoToUI = function (films) {
  let listHTML = filmList.innerHTML;
  films.map((film, index) => {
    return (listHTML +=
      `<tr class="movie-container">
                <td><img class="img-thumbnail url" style="width:130px; min-width: 100px;"src="${film.url}" alt="film-${index}"></td>
                <td class="pt-4 name">${film.name}</td>
                <td class="pt-4 director">${film.director}</td>
                <td class="pt-4 date">${film.date}</td>
                <td>
                <div class="col pt-4 ">
                <button class="btn btn-primary deleteFilm ps-4 pe-4" id="deleteFilm">Sil</button>
              </div>
                </td>
                </tr> `);
  });
  return (filmList.innerHTML = listHTML);
};


UI.prototype.displayMessage = function (message, type) {
  const formContainer = document.getElementById("form-container");
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  formContainer.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 2000);
};



UI.prototype.deleteMovie = function (target) {
    target.parentElement.parentElement.parentElement.remove();
  };

UI.prototype.clearFilms = function () {
   while (filmList.firstChild != null) {
    filmList.removeChild(filmList.firstChild);
  }
  localStorage.removeItem("films");
 displayMessage("Bütün filmler başarıyla silindi", "danger")
};
