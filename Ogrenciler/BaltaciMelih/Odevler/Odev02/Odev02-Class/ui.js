class UI {
  static addItemToUI(newMovie) {
    const archive = document.getElementById("archive");
    archive.innerHTML += `
    <tr>
    <td><img class="img-fluid" src="${newMovie.url}"</td>
    <td class = "filter-name">${newMovie.name}</td>
    <td>${newMovie.director}</td>
    <td>${newMovie.date}</td>
    <td><a class="btn btn-warning" href="#"><i id="edit-movie" class="bi bi-pencil-fill"></i></a>
    <a class="btn btn-danger" href="#"><i id="delete-movie" class="bi bi-trash-fill"></i></a></td>
    </tr>
    `;
  }

  static displaymessage(message, type) {
    const cardBodyOne = document.querySelectorAll(".card-body")[0];

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBodyOne.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2000);
  }

  static LoadAllItemsToUI(movies) {
    movies.forEach(function (newMovie) {
      UI.addItemToUI(newMovie);
    });
  }

  static clearAllItemsFromUI() {
    const archive = document.getElementById("archive");
    archive.innerHTML = "";
  }

  static filterItemsUI(filterNames, filterValue) {
    filterNames.forEach(function (filterName) {
      const text = filterName.innerHTML.toLowerCase();
      if (text.indexOf(filterValue) === -1) {
        filterName.parentElement.setAttribute(
          "style",
          "display:none !important"
        );
      } else {
        filterName.parentElement.setAttribute("style", "display:table-row");
      }
    });
  }
}
