let films = [];
let tableBodyEl = document.getElementById("tableBody");
let filmNameEl = document.getElementById("filmName");
let filmDirectorEl = document.getElementById("filmDirector");
let filmYearEl = document.getElementById("filmYear");
let filmBannerEl = document.getElementById("filmBanner");
let saveEl = document.getElementById("saveEl");
let clearEl = document.getElementById("clear");

class Movie {
  constructor(name, year, director, bannerUrl) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.bannerUrl = bannerUrl;
  }
}

//Localden 2 film gelecek
function setFilms() {
  films = localStorage.getItem("films")
    ? JSON.parse(localStorage.getItem("films"))
    : [];
  if (films.length < 1) {
    const initialFilms = [
      new Movie(
        "Prestige",
        "2006",
        "Christopher Nolan",
        "https://tr.web.img3.acsta.net/pictures/bzp/01/108998.jpg"
      ),
      new Movie(
        "Pan's Labyrınth",
        "2006",
        "Guillermo del Toro",
        "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"
      ),
    ];
    films = initialFilms;
    localStorage.setItem("films", JSON.stringify(initialFilms));
  }
  UI.showFilms(films);
}

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
    let filmsLength = JSON.parse(localStorage.getItem("films")).length;
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
      }, 3000);
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

//App Js
saveEl.addEventListener("click", UI.addNewFilm);
clearEl.addEventListener("click", UI.clearFilms);
function deletMovie(index) {
  films = JSON.parse(localStorage.getItem("films"));
  films.map((el, i) => {
    if (i == index) {
      films.splice(index, 1);
    }
  });
  localStorage.setItem("films", JSON.stringify(films));
  document.getElementById(index).remove();
  UI.displayMessage("Film Silindi", "primary");
}
// function editMovie(index) {
//   films = JSON.parse(localStorage.getItem("films"));
//   films.map((el, i) => {
//     if (i == index) {
//       filmNameEl.value = films[0].name;
//       filmDirectorEl.value = films[0].director;
//       filmYearEl.value = films[0].year;
//       filmBannerEl.value = films[0].bannerUrl;
//       films.splice(index, 1);
//     }
//   });
//   // localStorage.setItem("films", JSON.stringify(films));
//   document.getElementById(index).style.color = "red";
// }
