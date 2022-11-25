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
        cardDiv.className = "col-sm-2";
        cardDiv.innerHTML = `
        <div class="card mb-2">
            <img src="${response[i].thumbnailUrl}" class="card-img-top" alt="thumbnailUrl" id="thumbnailUrl">
            <div class="card-body">
              <h5 class="card-title" id="title">${response[i].title}</h5>
            </div>
        </div>`;
        rowDiv.appendChild(cardDiv);
      }
    }
  };
  xhr.send();
}
