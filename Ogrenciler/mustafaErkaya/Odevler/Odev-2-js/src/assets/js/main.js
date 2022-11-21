import {StoreElements} from './store-elements.js';
import {Film} from './film.js';
import {FilmData} from './filmdata.js';

const Main = function() {
  this.elements;
};

Main.prototype.init = function() {
  FilmData.init();
  this.elements = StoreElements.init();
  console.log('this.elements', this.elements);
  this.listenEvents();
  
};



Main.prototype.listenEvents = function() {
  this.elements.muted.addEventListener("click", () => {this.soundMute();});
  this.elements.hidden.addEventListener("click", () => {this.listHidden();});
  this.elements.deleteAll.addEventListener("click", () => {this.deleteAllMovie();});
  this.elements.axe.addEventListener("click", () => {this.addMovie();});
};

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
  // console.log(film);
  FilmData.add(film);
  this.addMovieUI(film);
  this.resetForm();
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
                    <button class="btn btn-outline-secondary w-100">Sil</button>
                    <button class="btn btn-outline-success w-100 ">Düzenle</button>
                </div>
                `

  this.elements.movieBottom.prepend(row); // üste ekleme
  this.resetForm();

};

Main.prototype.resetForm = function() {
  this.elements.nameInput.value = "";
  this.elements.directorInput.value = "";
  this.elements.imgInput.value = "";
  this.elements.dateInput.value = "";
};

console.log(Main.prototype);

export {
  Main
};

