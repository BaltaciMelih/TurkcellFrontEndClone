let thumbnailUrl = document.getElementById("thumbnailUrl");
let title = document.getElementById("title");
let colDiv = document.getElementById("colDiv");
let colDiv2 = document.getElementById("colDiv2");

document.addEventListener("DOMContentLoaded", getAPI);

function getAPI() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      for (let i = 0; i < 12; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.className = "row w-75 mb-5 img-div";
        cardDiv.innerHTML = `
        <div class="card  onClick="resize(e)">
            <img src="${response[i].thumbnailUrl}" class="card-img-top" alt="thumbnailUrl" id="thumbnailUrl">
            <div class="card-body">
              <h5 class="card-title" id="title">${response[i].title}</h5>
            </div>
        </div>`;
        colDiv.appendChild(cardDiv);
      }
    }
  };
  xhr.send();
}
function r