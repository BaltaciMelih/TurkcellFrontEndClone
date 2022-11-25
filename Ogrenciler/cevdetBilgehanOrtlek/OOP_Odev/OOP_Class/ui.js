class UI {

  deleteFilmList() {
    const ulDiv = document.querySelector(".list-group");
    ulDiv.innerHTML = "";
  }
  
  deleteEachFilm(e) {
  
      if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.parentElement.remove();
      }
    }
  
  
  getUIFilms(film) {
      const listItem = document.createElement("li");
      const ulDiv = document.querySelector(".list-group");
  
      listItem.className =
        "list-group-item d-flex justify-content-between align-items-center";
    
      const listPoster = document.createElement("img");
      listPoster.src = `${film.url}`;
      listPoster.alt = `${film.title}`;
      listPoster.width = "60";
      listPoster.height = "80";
    
      const titleDiv = document.createElement("div");
      titleDiv.innerText = film.title;
    
      const directorDiv = document.createElement("div");
      directorDiv.innerText = film.writers;
    
      const dateDiv = document.createElement("div");
      dateDiv.innerText = film.date;
    
      const iconDiv = document.createElement("div");
      iconDiv.className = "d-flex gap-3";
  
      const movieTypeDiv = document.createElement("div");
      movieTypeDiv.innerText = film.movieType;
    
      const deleteIconLink = document.createElement("a");
      deleteIconLink.addEventListener("click",deleteMovie);
      deleteIconLink.href = "#";
      deleteIconLink.className = "deleteMovies";
      deleteIconLink.id = film.id;
      deleteIconLink.innerHTML= `<i class="fa fa-remove"></i>`;
  
      const editIconLink = document.createElement("a");
      editIconLink.addEventListener("click",editMovies);
      editIconLink.href = "#";
      editIconLink.className = "editMovies";
      editIconLink.id = film.id;
      editIconLink.innerHTML= `<i class="fa fa-edit"></i>`;
     
  
  
    
    
   
      iconDiv.appendChild(editIconLink);
      iconDiv.appendChild(deleteIconLink);
  
      listItem.appendChild(listPoster);
      listItem.appendChild(titleDiv);
      listItem.appendChild(directorDiv);
      listItem.appendChild(dateDiv);
      listItem.appendChild(movieTypeDiv);
      listItem.appendChild(iconDiv);
  
  
    
      ulDiv.appendChild(listItem);
    }


}


// UI.prototype.deleteFilmList = function () {
//   const ulDiv = document.querySelector(".list-group");
//   ulDiv.innerHTML = "";
// };

// UI.prototype.deleteEachFilm = function(e) {

//     if (e.target.className === "fa fa-remove") {
//       e.target.parentElement.parentElement.parentElement.remove();
//     }
//   }


// UI.prototype.getUIFilms = function (film) {
//     const listItem = document.createElement("li");
//     const ulDiv = document.querySelector(".list-group");

//     listItem.className =
//       "list-group-item d-flex justify-content-between align-items-center";
  
//     const listPoster = document.createElement("img");
//     listPoster.src = `${film.url}`;
//     listPoster.alt = `${film.title}`;
//     listPoster.width = "60";
//     listPoster.height = "80";
  
//     const titleDiv = document.createElement("div");
//     titleDiv.innerText = film.title;
  
//     const directorDiv = document.createElement("div");
//     directorDiv.innerText = film.writers;
  
//     const dateDiv = document.createElement("div");
//     dateDiv.innerText = film.date;
  
//     const iconDiv = document.createElement("div");
//     iconDiv.className = "d-flex gap-3";

//     const movieTypeDiv = document.createElement("div");
//     movieTypeDiv.innerText = film.movieType;
  
//     const deleteIconLink = document.createElement("a");
//     deleteIconLink.addEventListener("click",deleteMovie);
//     deleteIconLink.href = "#";
//     deleteIconLink.className = "deleteMovies";
//     deleteIconLink.id = film.id;
//     deleteIconLink.innerHTML= `<i class="fa fa-remove"></i>`;

//     const editIconLink = document.createElement("a");
//     editIconLink.addEventListener("click",editMovies);
//     editIconLink.href = "#";
//     editIconLink.className = "editMovies";
//     editIconLink.id = film.id;
//     editIconLink.innerHTML= `<i class="fa fa-edit"></i>`;
   


  
  
 
//     iconDiv.appendChild(editIconLink);
//     iconDiv.appendChild(deleteIconLink);

//     listItem.appendChild(listPoster);
//     listItem.appendChild(titleDiv);
//     listItem.appendChild(directorDiv);
//     listItem.appendChild(dateDiv);
//     listItem.appendChild(movieTypeDiv);
//     listItem.appendChild(iconDiv);


  
//     ulDiv.appendChild(listItem);
//   };
  