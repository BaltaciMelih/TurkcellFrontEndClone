export class UI{

static addMovieToUI(movie) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML += `
      <div id="${movie.name}" class="card mb-3 mt-4">
        <div class="row g-0">
            <div class="col-md-2">
                <img src="${movie.url}" class="img-fluid rounded-start" alt="${movie.name}">
            </div>
            <div class="col-md-10">
                <div class="card-body">
                    <h5 class="card-title" contenteditable="true">${movie.name}</h5>
                    <p class="card-text" contenteditable="true">${movie.director}</p>
                    <p class="card-text" contenteditable="true">${movie.date}</p>
                    <button type="button" class="btn btn-danger btn-delete" onclick="return this.parentNode.parentNode.parentNode.parentNode.remove();">Delete</button>
                    
                    <!--TODO: h5 ve p'lerin üzerinde tıklayınca editable olacak edit butonuna gerek yok-->
                    <!--TODO: Verilerin önemli olabilmesi durumu için card lar localstorage den silme işlemi yapılmamıştır..-->
                    <button type="button" id="editButton" class="btn btn-warning btn-edit mx-3" onclick="">Edit</button>
                </div>
            </div>
        </div>
    </div>
  `;
};


static clearInput() {
  MovieName.value = "";
  MovieDirector.value = "";
  MovieDate.value = "";
  Myurl.value = "";
};

static displayMessage(message, type) {
  const cardBody = document.querySelector("#status");
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  cardBody.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 2000);
};

static deleteAllMovie(){
    document.getElementById("movieList").remove();
}



}