let thumbnailUrl = document.getElementById("thumbnailUrl");
let title = document.getElementById("title");
let rowDiv = document.getElementById("rowDiv");

document.addEventListener("DOMContentLoaded", getAPI);

function getAPI() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      for (let i = 0; i < 12; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.className = "col-sm-3";
        cardDiv.innerHTML = `
        <div class="card mb-2">
            <img src="${response[i].thumbnailUrl}" class="card-img-top" alt="thumbnailUrl" id="thumbnailUrl">
            <div class="card-body">
              <h5 class="card-title" id="title">${response[i].title}</h5>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#resimOnizleme">
                Resmi Görmek İçin Tıklayınız
              </button>
            </div>
        </div>
        <div class="modal fade" id="resimOnizleme" data-bs-keyboard="false" tabindex="-1" aria-labelledby="resimOnizlemeLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="resimOnizlemeLabel">${response[i].title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <img src="${response[i].url}" class="card-img-top" alt="...">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">kapat</button>
            </div>
            </div>
        </div>
        </div>`;
        rowDiv.appendChild(cardDiv);
      }
    }
  };
  xhr.send();
}
