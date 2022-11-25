let thumbnailUrl = document.getElementById("thumbnailUrl");
let title = document.getElementById("title");
let row = document.getElementsByTagName("row");
document.addEventListener("DOMContentLoaded", getAPI);

function getAPI() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      for (response.id = 0; response.id < 30; response.id++) {
        console.log(response[response.id]);
        console.log(response.id);
        let cardDiv = document.createElement("div");
        cardDiv.className = "d-flex flex-wrap";
        cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${
              response[response.id].thumbnailUrl
            }" class="card-img-top" alt="thumbnailUrl" id="thumbnailUrl">
            <div class="card-body">
              <h5 class="card-title" id="title">${
                response[response.id].title
              }</h5>
            </div>
          </div>`;
        row.appendChild(cardDiv);
      }
    }
  };
  xhr.send();
}
