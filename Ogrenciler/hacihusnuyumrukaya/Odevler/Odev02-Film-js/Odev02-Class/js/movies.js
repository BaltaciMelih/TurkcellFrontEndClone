class Movies {

//Movies
constructor(newMovieName,newDirector,newBanner,newDate) {
  this.newMovieName=newMovieName;
  this.newDirector=newDirector;
  this.newBanner=newBanner;
  this.newDate=newDate;
}

//Film Ekleme
static addMovie(e) {
  const newMovieName = movieNameInput.value.trim();
  const newDirector= movieDirectorInput.value.trim();
  const newBanner = movieBannerInput.value.trim();
  const newDate = movieDateInput.value.trim();
  if(newMovieName=="" || newDirector=="" || newBanner=="" || newDate==""){
    UI.Message("Lüften Bilgileri Eksiksiz Giriniz.","danger");
    UI.ClearInput();}
  else
  {
    if(document.getElementById("film-add").innerText == "Filmi Güncelle")
    {
      UI.Message("Film Başarıyla Güncellendi.","success");
    }
    else
    {
      UI.Message("Koleksiyona Film Başarıyla Eklendi.","success");
    }
    UI.MoviesUI(new Movies(newMovieName,newDirector,newBanner,newDate));
    UI.ClearInput();
    Storage.addMovieToStorage(new Movies(newMovieName,newDirector,newBanner,newDate));
    e.preventDefault();
  }
  document.getElementById("film-add").innerText = "Arşive Film Ekle";
  e.preventDefault();
}

//Filmleri Temizleme
static clearAllMovies(e) {
  if (localStorage.getItem("Movies") === null  ){
    UI.Message("Film koleksiyonunuz boş.","warning");
  }
  else{
    while (movieList.firstChild != null) {
      movieList.removeChild(movieList.firstChild);
    }
    localStorage.removeItem("Movies");
    UI.Message("Film koleksiyonunuz başarıyla temizlendi.","success");
  }
  e.preventDefault();
  }

//Seçilen Filmi Temizleme
static deleteMovies(e) {
    if (e.target.parentElement.parentElement.className === "delete-item") {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    let RemoveMovie=e.target.parentElement.parentElement.parentElement.parentElement;
    let RemoveMoviesName=RemoveMovie.querySelector('.movieNames');
    let RemoveMoviesDirector=RemoveMovie.querySelector('.movieDirector');
    Storage.RemoveLocalStorage(RemoveMoviesName.textContent,RemoveMoviesDirector.textContent);
    UI.Message("Seçilen Film Başarıyla Silindi.","success");
    }
}

//Seçilen Filmi Düzenleme
static changedMovies(e) {
  if (e.target.parentElement.parentElement.className === "change-item") {
  e.target.parentElement.parentElement.parentElement.parentElement.remove();
  let RemoveMovie=e.target.parentElement.parentElement.parentElement.parentElement;
  let RemoveMoviesName=RemoveMovie.querySelector('.movieNames');
  let RemoveMoviesDirector=RemoveMovie.querySelector('.movieDirector');
  let RemoveMoviesDate=RemoveMovie.querySelector('.movieDate');
  let RemoveMoviesBanner=RemoveMovie.querySelector('img');
  movieNameInput.value=RemoveMoviesName.textContent;
  movieDirectorInput.value=RemoveMoviesDirector.textContent;
  movieBannerInput.value=RemoveMoviesBanner.src;
  movieDateInput.value=RemoveMoviesDate.textContent;
  Storage.RemoveLocalStorage(RemoveMoviesName.textContent,RemoveMoviesDirector.textContent);
  document.getElementById("film-add").innerText = "Filmi Güncelle";
  }
}

//Film Adına Göre Filtreleme
static filterItems(e) {
  const filterNames = document.querySelectorAll(".movieNames");
  const filterValue = e.target.value.toLowerCase();
  UI.filterItemsUI(filterNames, filterValue);
}
}