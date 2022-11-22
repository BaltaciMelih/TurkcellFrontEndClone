function UI() {}
UI.prototype.showFilms = function (filmForShow) {
  let htmlTemplate = tableBodyEl.innerHTML;
  filmForShow.map((film, index) => {
    return (htmlTemplate =
      htmlTemplate +
      `<tr class="movie-container">
                <td><img class="img-thumbnail" style="width:130px"class="border-bottom bottom-2" src="${film.bannerUrl}" alt="banner-${index}"></td>
                <td>${film.name}</td>
                <td>${film.director}</td>
                <td>${film.year}</td>
                <td>
                <button class="btn btn-dark">Kaldır</button>
                <button class="btn btn-primary">Düzenle</button>
                </td>
                </tr> `);
  });
  return (tableBodyEl.innerHTML = htmlTemplate);
};
UI.prototype.displayMessage = function (message, type) {
  const formContainer = document.querySelector(".form-container");
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  formContainer.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 3000);
};

UI.prototype.clearFilms = function () {
  films = [];
  localStorage.removeItem("films");
  tableBodyEl.innerHTML = "";
};
