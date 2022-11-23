let films = [];
let filmName = document.getElementById("filmName");
let filmYear = document.getElementById("filmYear");
let filmBanner = document.getElementById("filmBanner");
let filmDirector = document.getElementById("filmDirector");
let save = document.getElementById("save");
let clear = document.getElementById("clear");

var Film = function (name, year, director, bannerUrl) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.bannerUrl = bannerUrl;
  };
  const ui = new UI();
  function setFilms() {
    films = localStorage.getItem("films")
      ? JSON.parse(localStorage.getItem("films"))
      : [];
    if (films.length < 1) {
      const initialFilms = [
        new Film(
          "Pulp Fiction",
          "1994",
          "Quentin Tarantino ",
          "https://www.miramax.com/assets/Pulp-Fiction1.png"
        ),
        new Film(
          "Matrix",
          "1999",
          "Lana Wachowski",
          "image.png"
        ),
      ];
      films = initialFilms;
      localStorage.setItem("films", JSON.stringify(initialFilms));
    }
    ui.showFilms(films);
  }
  save.addEventListener("click", () => {
    let name = filmName.value;
    let director = filmDirector.value;
    let year = filmYear.value;
    let bannerUrl = filmBanner.value;
    let newFilm = [];
    newFilm.push(new Film(name, year, director, bannerUrl));
    films.push(newFilm[0]);
    localStorage.setItem("films", JSON.stringify(films));
  });
  
  clear.addEventListener("click", ui.clearFilms);
