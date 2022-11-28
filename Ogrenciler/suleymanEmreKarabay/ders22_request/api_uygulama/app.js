let thumbnailUrl = document.getElementById("thumbnailUrl");
let title = document.getElementById("title");
let rowDiv = document.getElementById("rowDiv");
let containerDiv = document.getElementById("containerDiv");
containerDiv.innerHTML = "";
document.addEventListener("DOMContentLoaded", getAPI);

const KEY_NAME = "photos";

function toggleOpen(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);

      containerDiv.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="width:"600px";height:"800px"">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${
              response[e.target.parentElement.id - 1].title
            }</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <img src="${response[e.target.parentElement.id - 1].url}" alt="url">

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>`;
    }
  };
  xhr.send();
  console.log(e.target.parentElement.id);
}

function getAPI() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      for (let i = 0; i < 12; i++) {
        let kapsayıcıDiv = document.createElement("div");
        kapsayıcıDiv.className = "col-sm-2";

        let cardDiv = document.createElement("div");
        cardDiv.className = "card mb-2";

        let imgThumbnailUrl = document.createElement("img");
        imgThumbnailUrl.className = "card-img-top";
        imgThumbnailUrl.src = `${response[i].thumbnailUrl}`;
        imgThumbnailUrl.alt = "thumbnailUrl";

        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "card-body";

        let h5Title = document.createElement("h5");
        h5Title.className = "card-title";
        h5Title.innerText = `${response[i].title}`;

        let link = document.createElement("a");
        link.href = "#";
        link.className = "toggleButton";
        link.id = response[i].id;
        link.setAttribute("data-bs-toggle", "modal");
        link.setAttribute("data-bs-target", "#exampleModal");
        link.addEventListener("click", toggleOpen);

        link.appendChild(h5Title);
        cardBodyDiv.appendChild(link);
        cardDiv.appendChild(imgThumbnailUrl);
        cardDiv.appendChild(cardBodyDiv);
        kapsayıcıDiv.appendChild(cardDiv);
        rowDiv.appendChild(kapsayıcıDiv);
      }
    }
  };
  xhr.send();
}
