function UI() {}

UI.prototype.addFormUI = function () {
  const form = document.getElementById('movie-form');
  form.innerHTML += `
            <div class="row">
              <div class=" col-md-6  mb-3 mb-md-3">
                <input class="form-control" type="text" name="name" id="name" placeholder="Movie Name" />
                </div>
              <div class=" col-md-6  mb-3 mb-md-3">
                <input class="form-control" type="text" name="director" id="director" placeholder="Director" />
              </div>
              <div class="col-md-6 mb-3 mb-md-4">
                <input class="form-control" type="text" name="url" id="url" placeholder="Poster URL" />
              </div>
              <div class=" col-md-6 mb-3 mb-md-4">
                <input class="form-control" type="text" onfocus="(this.type='date')" onblur="(this.type='text')"  name="release" id="release" placeholder="Release Date" />
              </div>
              <div class="d-flex justify-content-center align-items-center flex-column gap-3">
                <button type="submit" id="add-movie-submit" class="btn btn-danger px-3 py-1 btn-block ">Add Movie</button> 
                <button type="submit" id="clear-all" class="btn btn-dark px-3 py-1">Clear All</button> 
             </div>
            </div>

  `;
};

UI.prototype.addMovieToList = function (newMovie) {
  const album = document.querySelector('#album');
  album.innerHTML += `
                        <div class="col-lg-4 col-md-6 col-10  mb-3 ancestor">
                          <div class="card shadow-sm">
                                <img class="card-img-top" width="100%" height="300" src="${newMovie.url}"></img>
                                <div class="card-body">
                                        <h4 class="text-center name">${newMovie.name}</h4>
                                        <p class="card-text">Director: ${newMovie.director}</p>
                                        <p class="card-text">Release Year: ${newMovie.release}</p>
                                      <div class="d-flex space-between  justify-content-between mt-2">
                                         <button type="button" class="btn btn-sm btn-outline-primary fs-6 py-1 px-4" id="edit-movie">Edit</button>
                                         <button type="button" class="btn btn-sm btn-outline-danger fs-6 py-1 px-4" id="delete-movie">Delete</button>
                                       </div>

                                </div>
                        </div>
                </div>`;
};

UI.prototype.clearFields = function (field1, field2, field3, field4) {
  field1.value = '';
  field2.value = '';
  field3.value = '';
  field4.value = '';
};

UI.prototype.showAlert = function (msg, type) {
  const section = document.getElementById('section');
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.textContent = msg;

  section.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 1500);
};

UI.prototype.deleteMovieFromList = function (element) {
  element.remove();
};

UI.prototype.clearAllMoviesFromList = function () {
  while (album.firstElementChild !== null) {
    album.firstElementChild.remove();
  }
};

UI.prototype.removeAddMovieButton = function () {
  addMovieButton.remove();
};

UI.prototype.editMovieUI = function (e) {
  debugger;
  const oldURL = e.target.parentElement.parentElement.parentElement.children[0].src;
  const oldName = e.target.parentElement.parentElement.children[0].textContent;
  const oldDirector = e.target.parentElement.parentElement.children[1].innerHTML.split(': ')[1];
  const oldRelease = e.target.parentElement.parentElement.children[2].textContent.split(': ')[1];

  const newURL = prompt("Yeni film URL'ini giriniz.");
  const newName = prompt('Yeni film ismini giriniz.');
  const newDirector = prompt('Yeni yönetmen adını giriniz.');
  const newRelease = prompt('Film çıkış tarihini giriniz.');

  const oldValues = [oldName, oldDirector, oldRelease, oldURL];
  const newValues = [newName, newDirector, newRelease, newURL];

  storage.editMovieStorage(oldValues, newValues);

  e.target.parentElement.parentElement.parentElement.innerHTML = `

              <img class='card-img-top' width='100%' height='300' src='${newURL}'></img>
              <div class='card-body'>
                <h4 class='text-center name'>${newName}</h4>
                <p class='card-text'>Director: ${newDirector}</p>
                <p class='card-text'>Release Year: ${newRelease}</p>
                <div class='d-flex space-between  justify-content-between mt-2'>
                  <button type='button' class='btn btn-sm btn-outline-primary fs-6 py-1 px-4' id='edit-movie'>
                    Edit
                  </button>
                  <button type='button' class='btn btn-sm btn-outline-danger fs-6 py-1 px-4' id='delete-movie'>
                    Delete
                  </button>
                </div>
              </div>
  `;
};
