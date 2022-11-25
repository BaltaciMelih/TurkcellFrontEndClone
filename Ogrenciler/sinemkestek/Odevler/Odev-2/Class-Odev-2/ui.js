class UI {
  static showFilms(filmForShow) {
    let htmlTemplate = tableBodyEl.innerHTML;
    filmForShow.map((film, index) => {
      return (htmlTemplate =
        htmlTemplate +
        `<tr id=${index} class="movie-container">
                  <td><img class="img-thumbnail" style="width:130px"class="border-bottom bottom-2" src="${film.bannerUrl}" alt="banner-${index}"></td>
                  <td>${film.name}</td>
                  <td>${film.director}</td>
                  <td>${film.year}</td>
                  <td>
                  <button class="btn btn-dark my-2" onClick="deletMovie(${index})">Kaldır</button>
                  <button class="btn btn-primary my-2" id="edit" onClick="editMovie(${index})">Düzenle</button>
                  </td>
                  </tr> `);
    });
    return (tableBodyEl.innerHTML = htmlTemplate);
  }
  static addFilms(filmForShow) {
    let htmlTemplate = tableBodyEl.innerHTML;
    let filmsLength = localStorage.getItem("films")
      ? JSON.parse(localStorage.getItem("films")).length
      : 0;
    htmlTemplate += `<tr id=${filmsLength} class="movie-container">
    <td><img class="img-thumbnail" style="width:130px"class="border-bottom bottom-2" src="${filmForShow.bannerUrl}" alt="banner-${filmsLength}"></td>
    <td>${filmForShow.name}</td>
    <td>${filmForShow.director}</td>
    <td>${filmForShow.year}</td>
    <td>
    <button class="btn btn-dark my-2" onClick="deletMovie(${filmsLength})">Kaldır</button>
    <button class="btn btn-primary my-2" id="edit"  onClick="editMovie(${filmsLength}")>Düzenle</button>
    </td>
    </tr> `;
    return (tableBodyEl.innerHTML = htmlTemplate);
  }
  static addNewFilm() {
    let name = filmNameEl.value;
    let director = filmDirectorEl.value;
    let year = filmYearEl.value;
    let bannerUrl = filmBannerEl.value;
    if (name == "" || director == "" || year == "" || bannerUrl == "") {
      if (name == "" || director == "") {
        UI.displayMessage("Film Adı ve Yönetmen boş bırakılamaz", "secondary");
      }
    } else {
      let newFilm = new Movie(name, year, director, bannerUrl);
      console.log(newFilm);
      films.push(newFilm);
      UI.addFilms(newFilm);
      localStorage.setItem("films", JSON.stringify(films));
      UI.valuesElEmpty();
      UI.displayMessage("Film Listeye Eklendi", "secondary");
    }
  }
  static displayMessage(message, type) {
    const formContainer = document.querySelector("body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    if (!document.querySelector(".alert")) {
      formContainer.appendChild(div);
      setTimeout(function () {
        div.remove();
      }, 1500);
    }
  }

  static valuesElEmpty() {
    filmNameEl.value = "";
    filmDirectorEl.value = "";
    filmYearEl.value = "";
    filmBannerEl.value = "";
  }

  static clearFilms() {
    films = [];
    localStorage.removeItem("films");
    tableBodyEl.innerHTML = "";
    UI.displayMessage("Tüm filmler silindi", "primary");
  }
}
