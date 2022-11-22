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
  this.elements = StoreElements.init();
  console.log('this.elements', this.elements);
  this.listenEvents();
  this.appendMovies();
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
   
  
};
Main.prototype.appendMovies = function(){
  this.movieData.forEach((item) => {
    this.addMovieUI(item);
  })
  
}

Main.prototype.getElements = function() {  
  return this.elements;    
}

Main.prototype.soundMute = function() {
  this.elements.video.toggleAttribute("muted");
};

Main.prototype.listHidden = function() {
  this.elements.container.classList.toggle("d-none");
};

Main.prototype.deleteAllMovie = function() {
  while (this.elements.movieBottom.firstChild !== null) {
    this.elements.movieBottom.removeChild(this.elements.movieBottom.firstChild); // Daha hızlı çalışacak
  }
};

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
  }

  
};


Main.prototype.addMovieUI = function({name, director, img, date}) {
  const row = document.createElement("div");
    row.className = "row my-3";
    row.innerHTML = `
                    <div class="col-3">
                        <img class="img-fluid" src="${img}" alt="">
                    </div>
                    <div class="col-7 text-white">
                        <div class="row border-bottom">
        
                            <div class="col-4"><p>NAME</p></div>
                            <div class="col-8 "> <p>${name}</p> </div>
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
                    <button  class="delete btn btn-outline-secondary w-100">Delete</button>
                    <button  class="edit btn btn-outline-success w-100 ">Edit</button>
                </div>
                `;

  this.elements.movieBottom.prepend(row); // üste ekleme
  this.resetForm();

};
/////////
Main.prototype.delMovie = function (e){
  if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
      }
 
 }

Main.prototype.resetForm = function() {
  this.elements.nameInput.value = "";
  this.elements.directorInput.value = "";
  this.elements.imgInput.value = "";
  this.elements.dateInput.value = "";
  
};
// showAlert
Main.prototype.showAlert = function (message, type) {
  
  const div = document.createElement("div");
  div.className = `mx-auto my-2 col-7 alert alert-${type}`;
  div.textContent = message;
  // this.elements.container.prepend(div);
  this.elements.container.insertBefore(div, this.elements.container.children[1])

  setTimeout(function () {
    div.remove();
  }, 1500);
};

console.log(Main.prototype);

export {
  Main
};

