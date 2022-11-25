const ui = new UI();
const storage = new Storage();
let filmList = document.getElementById("filmler");
let filmName = document.getElementById("filmName");
let filmDirector = document.getElementById("filmDirector");
let filmDate = document.getElementById("filmDate");
let filmUrl = document.getElementById("filmBanner");
let addFilm = document.getElementById("film-add");
let clearAll = document.getElementById("delete-all");
let filter = document.getElementById("filter");
let films = [];

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", defaultFilms);
  addFilm.addEventListener("click", addMovie);
  clearAll.addEventListener("click", ui.clearFilms);
  filmList.addEventListener("click", deleteFilm);
  filmList.addEventListener("click", editFilm);
  filter.addEventListener("keyup", filterFilms);
}

function defaultFilms() {
  films = storage.defaultMovie();
  if (films.length < 1) {
    const dFilms = [
      new Film(
        "Avengers 1",
        "Joss Whedon",
        "2012-05-04",
        "https://tr.web.img3.acsta.net/medias/nmedia/18/85/49/05/20085945.jpg"
      ),
      new Film(
        "Avengers 2",
        "Joss Whedon",
        "2015-05-01",
        "https://tr.web.img4.acsta.net/pictures/15/08/06/07/51/269807.jpg"
      ),
    ];
    films = dFilms;
    localStorage.setItem("films", JSON.stringify(dFilms));
  }
  ui.addTodoToUI(films);

}

function addMovie() {
  let name = filmName.value.trim();
  let director = filmDirector.value.trim();
  let date = filmDate.value.trim();
  let url = filmUrl.value.trim();
  let newFilm = [];
  if (name === "" || director === "" || date == "" || url === "") {
    ui.displayMessage("Tüm alanları doldurunuz", "danger");
  } else {
  newFilm.push(new Film(name, director, date,url));
  films.push(newFilm[0]);
  ui.addTodoToUI(newFilm);
  filmName.value = "";
  filmDirector.value = "";
  filmDate.value = "";
  filmUrl.value = "";
  addFilm.innerHTML = "Film Ekle";
  localStorage.setItem("films", JSON.stringify(films));
  ui.displayMessage("Film Başarıyla Yüklendi","success");
};
};

 function deleteFilm(e) {
  if(e.target.id === "deleteFilm"){
     ui.deleteMovie(e.target);
     storage.deleteMovie(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
      ui.displayMessage("Silme işlemi gerçekleşti", "success");
   };}



  function editFilm(e) {
    if(e.target.id === "editFilm"){
      ui.deleteMovie(e.target);
      let films = storage.defaultMovie();
    films.forEach(function (film) {
      if (film.name === e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent) {
        filmName.value = film.name;
        filmDirector.value = film.director;
        filmDate.value = film.date;
        filmUrl.value = film.url;
      }
      })
      addFilm.innerHTML = "Filmi Düzenle";
      storage.deleteMovie(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
      ui.displayMessage("Film Bilgilerini Düzenleyiniz", "warning");
    };}




  function filterFilms(e){   
  let filterValue = e.target.value.toLowerCase();
  let listedFilms = document.querySelectorAll(".name");
  let i =0;
  listedFilms.forEach(function (film) {
  const text = film.textContent.toLowerCase();
  if (text.indexOf(filterValue) === -1) {
    film.parentElement.setAttribute("style", "display:none !important");
  } else {
    film.parentElement.setAttribute("style", "display:table-row");
    i++;
  }
  });
  if(i==0){
    ui.displayMessage("Böyle Bir film Listede Bulunmamaktadır", "danger");
  }
  }