function Movie() {}

//Movies
const Movies=function(newMovieName,newDirector,newBanner,newDate) {
  this.newMovieName=newMovieName;
  this.newDirector=newDirector;
  this.newBanner=newBanner;
  this.newDate=newDate;
}

//Film Ekleme
Movie.prototype.addMovie= function(e) {
  const newMovieName = movieNameInput.value.trim();
  const newDirector= movieDirectorInput.value.trim();
  const newBanner = movieBannerInput.value.trim();
  const newDate = movieDateInput.value.trim();
  if(newMovieName=="" || newDirector=="" || newBanner=="" || newDate==""){
    ui.Message("Lüften Bilgileri Eksiksiz Giriniz.","danger");
    ui.ClearInput();}
  else
  {
    if(document.getElementById("film-add").innerText == "Filmi Güncelle")
    {
      ui.Message("Film Başarıyla Güncellendi.","success");
    }
    else
    {
      ui.Message("Koleksiyona Film Başarıyla Eklendi.","success");
    }
    ui.MoviesUI(new Movies(newMovieName,newDirector,newBanner,newDate));
    ui.ClearInput();
    storage.addMovieToStorage(new Movies(newMovieName,newDirector,newBanner,newDate));
    e.preventDefault();
  }
  document.getElementById("film-add").innerText = "Arşive Film Ekle";
  e.preventDefault();
}

//Filmleri Temizleme
Movie.prototype.clearAllMovies= function(e) {
  if (localStorage.getItem("Movies") === null  ){
    ui.Message("Film koleksiyonunuz boş.","warning");
  }
  else{
    while (movieList.firstChild != null) {
      movieList.removeChild(movieList.firstChild);
    }
    localStorage.removeItem("Movies");
    ui.Message("Film koleksiyonunuz başarıyla temizlendi.","success");
  }
  e.preventDefault();
  }

//Seçilen Filmi Temizleme
Movie.prototype.deleteMovies= function(e) {
    if (e.target.parentElement.parentElement.className === "delete-item") {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    let RemoveMovie=e.target.parentElement.parentElement.parentElement.parentElement;
    let RemoveMoviesName=RemoveMovie.querySelector('.movieNames');
    let RemoveMoviesDirector=RemoveMovie.querySelector('.movieDirector');
    storage.RemoveLocalStorage(RemoveMoviesName.textContent,RemoveMoviesDirector.textContent);
    ui.Message("Seçilen Film Başarıyla Silindi.","success");
    }
}

//Seçilen Filmi Düzenleme
Movie.prototype.changedMovies= function(e) {
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
  storage.RemoveLocalStorage(RemoveMoviesName.textContent,RemoveMoviesDirector.textContent);
  document.getElementById("film-add").innerText = "Filmi Güncelle";
  }
}

//Film Adına Göre Filtreleme
Movie.prototype.filterItems= function(e) {
  const filterNames = document.querySelectorAll(".movieNames");
  const filterValue = e.target.value.toLowerCase();
  ui.filterItemsUI(filterNames, filterValue);
}