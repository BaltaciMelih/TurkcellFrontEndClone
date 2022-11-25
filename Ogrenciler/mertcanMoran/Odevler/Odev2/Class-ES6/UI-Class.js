class UI {
  static addMovieToList(movie) {
    const list = document.querySelector("#movie-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td class = "w-25">${movie.name}</td>
    <td class = "w-25">${movie.director}</td>
    <td class = "w-25">${movie.year}</td>
    <td><img src = "${movie.url}" class = "img-fluid w-25 h-25" ></img></td>
    <td><a href="#"><i class = "bi bi-pencil" id = "edit"></i></a></td>
    <td><a href="#"><i class = "bi bi-trash3" id = "delete"></i></a></td>
    `;

    list.appendChild(row);
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.classList.add("alert", `alert-${className}`);
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#movie-form");

    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  static deleteMovie(target) {
    if (target.id === "delete") {
      target.parentElement.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#name").value = "";
    document.querySelector("#director").value = "";
    document.querySelector("#year").value = "";
    document.querySelector("#url").value = "";
  }
}
