function UI() {}

UI.prototype.addItemToUI = function (newMovie) {
  const archive = document.getElementById("archive");
  archive.innerHTML += `
    <tr>
    <td><img class="img-fluid" src="${newMovie.url}"</td>
    <td>${newMovie.name}</td>
    <td>${newMovie.director}</td>
    <td class="d-flex flex-column">
    ${newMovie.date}
    <a class="btn btn-warning mt-5" id="edit-movie" href="#">Filmi Düzenle</a>
    <a class="btn btn-danger mt-5" id="delete-movie" href="#">Filmi Sil</a>
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

UI.prototype.LoadAllItemsToUI = function (movies) {
  movies.forEach(function (newMovie) {
    ui.addItemToUI(newMovie);
  });
};

UI.prototype.clearAllItemsFromUI = function () {
  const archive = document.getElementById("archive");
  archive.innerHTML = "";
};
