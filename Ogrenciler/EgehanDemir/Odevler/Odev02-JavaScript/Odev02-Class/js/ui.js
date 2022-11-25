class UI { 
  
static addListToUI(filmObj){
  movieList.firstElementChild.innerHTML += `
                      <div class="col-md-3">
                        <div id="${filmObj.id}" class="card mb-2" onClick="setSelectedItem('${filmObj.id}')" style="width: 18rem;">
                            <img class="card-img-top" src="${filmObj.filmBg}" alt="Card image cap">
                            <div class="card-body">
                              <h5 class="card-title">${filmObj.filmName}</h5>
                              <p class="card-text">${filmObj.filmDirector}</p>
                              <p class="card-text">${filmObj.filmDate}</p>
                            </div>
                        </div>
                      </div>
    `;
}

static clearAll(){
  movieList.innerHTML = "";
}
static displayMessage(message, type) {
  const smallForm = document.getElementById("small-form");
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  smallForm.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 2000);
}

static removeElement(element) {
  document.getElementById(element).parentElement.remove()
}

static selectedAdd(selectedItem) {
  document.getElementById(selectedItem).classList.add('active-movie'); 
}

static selectedDelete() {
  document.querySelector('.active-movie').classList.remove('active-movie');
}

}