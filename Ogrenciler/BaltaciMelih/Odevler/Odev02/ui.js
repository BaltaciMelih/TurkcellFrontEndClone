function UI() {}

UI.prototype.addItemToUI = function (newFilm) {
  const archive = document.getElementById("archive");
  archive.innerHTML += `
    <tr>
    <td><img class="img-fluid" src="${newFilm.url}"</td>
    <td>${newFilm.name}</td>
    <td>${newFilm.director}</td>
    <td class="d-flex flex-column">
    ${newFilm.date}
    <a class="btn btn-warning mt-5" id="edit-film" href="#">Filmi Düzenle</a>
    <a class="btn btn-danger mt-5" id="delete-film" href="#">Filmi Sil</a>
    </td>
    </tr>
    `;
};

UI.prototype.displaymessage = function (message, type) {
  const cardBodyOne = document.querySelectorAll(".card-body")[0];

  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  cardBodyOne.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 2000);
};

UI.prototype.LoadAllItemsToUI = function (films) {
  films.forEach(function (newFilm) {
    ui.addItemToUI(newFilm);
  });
};

UI.prototype.clearAllItemsFromUI = function () {
  const archive = document.getElementById("archive");
  archive.innerHTML = "";
};
