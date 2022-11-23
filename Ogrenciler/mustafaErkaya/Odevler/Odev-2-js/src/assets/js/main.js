import {StoreElements} from './store-elements.js';
import {Film} from './film.js';
import {FilmData} from './filmdata.js';

const Main = function() {
  this.elements;
  this.movieData = [];
};

Main.prototype.init = function() {
  FilmData.init();
  this.movieData = FilmData.getData();
  console.log(this.movieData);

  this.elements = StoreElements.init();
  console.log('this.elements', this.elements);
  this.listenEvents();
  this.appendMovies();
  
  
  //sayfa açıldığında bu kısım çalışıyor.
};


///
// Main.prototype.deleteMovie = function(){
//   this.elements.movieDel.parentElement.parentElement.remove();
// }



Main.prototype.listenEvents = function() {
  this.elements.muted.addEventListener("click", () => {this.soundMute();});
  this.elements.hidden.addEventListener("click", () => {this.listHidden();});
  this.elements.deleteAll.addEventListener("click", () => {this.deleteAllMovie();});
  this.elements.axe.addEventListener("click", () => {this.addMovie();});
  this.elements.movieBottom.addEventListener("click", (e) => {this.delMovie(e);});
  //
  // this.elements.movieBottom.addEventListener("click",  function delMovie(e){
  //   if(e.target.classList.contains("delete")){
  //     e.target.parentElement.parentElement.remove();
  //   }
  //   // mainin protosuna tanımlamadığım için içine fonksiyon çağıramıyorum
  //   //savelocal
  //  FilmData.remove
  // });
   
  console.log("this.listenevents", this.listenEvents);
};

/////////////////////
Main.prototype.deleteIndex = function(film){ // bir yerde çağırmadım
  this.movieData.forEach(function(item, index){
    if(item === film){
      item.splice(index,1);
    }
  })
}

Main.prototype.appendMovies = function(){
  this.movieData.forEach((item) => {
    this.addMovieUI(item);
    console.log("this.appendMovies", this.appendMovies, item);
  })
  
}

Main.prototype.getElements = function() {  
  console.log("this.getElement", this.getElements);
  return this.elements;    
  
}

Main.prototype.soundMute = function() {
  this.elements.video.toggleAttribute("muted");
  console.log("this.soundMute", this.soundMute);
};

Main.prototype.listHidden = function() {
  this.elements.container.classList.toggle("d-none");
  console.log("this.listHidden", this.listHidden);
};

Main.prototype.deleteAllMovie = function() {
  if(confirm("are you serious ??")){
    while (this.elements.movieBottom.firstChild !== null) {
      this.elements.movieBottom.removeChild(this.elements.movieBottom.firstChild); // Daha hızlı çalışacak
      

    }
    this.showAlert("hepsi silindi", "success")

    
    
    
    console.log("this.deleteAllMovie", this.deleteAllMovie);
  }
 
};

// silme
// Main.prototype.deleteFilmStorage = function (title) {
//   let films = this.movieData;
//   let name = new Film(name, director, img, date)
//   films.forEach(function(film, index){
//     if(films[film] === title){
//       films.slice(index,1);
//     }
//   });
//   FilmData.setDataToStorage();
// }

// (
//   static deleteFilmFromStorage(filmTitle){
//     let films = this.getFilmsFromStorage();
//     films.forEach(function(film,index){
//       if(film.title === filmTitle){
//         films.splice(index,1);
//       }
//     });
//     localStorage.setItem("films",JSON.stringify(films));
//   }
// )
Main.prototype.addMovie = function() {
  const name = this.elements.nameInput.value.trim();
  const director = this.elements.directorInput.value.trim();
  const img = this.elements.imgInput.value.trim();
  const date = this.elements.dateInput.value.trim();
  const film = new Film({name, director, img, date});
  if(name === '' || director === '' || img === '' || date === ''){
    this.showAlert("Eksik Bilgi Girdiniz!!", "danger")
    this.resetForm();
  }
  else{
    this.showAlert("Filminiz Eklendi. İyi Seyirler!!", "success");
     // console.log(film);
  FilmData.add(film);
  
  this.addMovieUI(film);

  this.resetForm();
  console.log("this.addMovie", this.addMovie);
  }

  
};


Main.prototype.addMovieUI = function({name, director, img, date}) {
  const row = document.createElement("div");
    row.className = "row my-3 movie-container";
    row.innerHTML = `
                    <div class="col-3">
                        <img class="img-fluid" src="${img}" alt="">
                    </div>
                    <div class="col-7 text-white">
                        <div class="row border-bottom">
        
                            <div class="col-4"><p>NAME</p></div>
                            <div class="col-8 "> <p class="name">${name}</p> </div>
                        </div>

                    <div class="row border-bottom">
                    
                        <div class="col-4">
                            <p>DIRECTOR</p> 
                        </div>
                        <div class="col-8">
                            <p>${director}</p>
                        </div>
                    </div>

                    <div class="row border-bottom">
                        
                        <div class="col-4">
                            <p>RELEASE DATE</p> 
                        </div>
                        <div class="col-8">
                            <p>${date}</p>
                        </div>
                    </div>

                    <div class="row ">
                        
                        <div class="col-4">
                            <p>MOVIE SUMMARY</p> 
                        </div>
                        <div class="col-8">
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolores!</small>
                        </div>
                    </div>
                </div>

                <div class="col-2 d-flex flex-column justify-content-around  ">
                    <button  class="delete btn btn-outline-secondary w-100" id="deleteMovie">Delete</button>
                    <button  class="edit btn btn-outline-success w-100 ">Edit</button>
                </div>
                `;

  this.elements.movieBottom.prepend(row); // üste ekleme
  this.resetForm();
  console.log("this.addMovieUI", this.addMovieUI);
};
///////// uidan 
Main.prototype.movieTitle = function(e){
 
  let title = e.target.parentElement.parentElement.children[1].children[0].children[1].textContent; // istediğimiz name geliyor
  console.log(title);
  return title;
}

Main.prototype.delMovieUi = function(e){
  if(e.target.id === 'deleteMovie'){
  
    e.target.parentElement.parentElement.remove();
    
   
    this.showAlert("silme işlemi başarılı.", "success");
    // let name = e.target.parentElement.parentElement.children[1].children[0].children[1].textContent; // istediğimiz name geliyor
    // console.log(name);
    // return name;
  }
  
  e.preventDefault();

}


Main.prototype.delMovie = function (e){
  // let ad = [];
  // this.elements.id.forEach(function(item){
  //   console.log(item);
  // })
  
  // console.log(ad);
  this.delMovieUi(e)
  let title = this.movieTitle(e)
  
  FilmData.remove(title);
//  this.deleteFilmStorage()
   


 console.log("this.delMovie", this.delMovie);
 }

Main.prototype.resetForm = function() {
  this.elements.nameInput.value = "";
  this.elements.directorInput.value = "";
  this.elements.imgInput.value = "";
  this.elements.dateInput.value = "";
  
  console.log("this.reserForm", this.resetForm);
};

// showAlert
Main.prototype.showAlert = function (message, type) {
  
  const div = document.createElement("div");
  div.className = `mx-auto my-2 col-7 alert alert-${type}`;
  div.textContent = message;
  // this.elements.container.prepend(div);
  this.elements.container.insertBefore(div, this.elements.container.children[1])

  console.log("this.showAlert", this.showAlert);
  setTimeout(function () {
    div.remove();
  }, 1500);
};

console.log(Main.prototype);

export {
  Main
};

