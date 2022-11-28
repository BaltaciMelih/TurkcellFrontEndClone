document.addEventListener("DOMContentLoaded", getAlbum);
const tbody = document.querySelector("#foto");
const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const img = document.querySelector(".img");

function getAlbum() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
      const response = JSON.parse(this.responseText);
      console.log("parsetan sonra", response);
      const tr = document.createElement("tbody");
      tr.className = "row";
      response.forEach(function (object) {
        if (object.albumId == 1) {
          tr.innerHTML += `
         
        <tr class="col-3 d-flex flex-column  text-center p-2">
        <td>${object.albumId}</td>
        <td>${object.id}</td>
        <td>${object.title}</td>
        
        <td><img src="${object.url}" class="img-fluid" alt=""></td>
        <td><img src="${object.thumbnailUrl}" data-bs-toggle="modal" data-bs-target="#albumModal" class="img-fluid mdl" alt=""></td>
     </tr>
    `;
          console.log(object.thumbnailUrl);
        }
      });

      tbody.appendChild(tr);
      //console.log(response);
    }
  };

  xhr.send();
}

tbody.addEventListener("click", show);

function show(e) {
  if (e.target.classList.contains("mdl")) {
    console.log("dogru yerdesin", e.target.src);

    img.src = `${e.target.src}`;
  }
  console.log(modal);
}
