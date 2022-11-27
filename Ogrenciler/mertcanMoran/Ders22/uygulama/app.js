document.addEventListener("DOMContentLoaded", getAlbum);
function getAlbum() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
  xhr.onload = function () {
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);
      const tr = document.createElement("div");
      tr.className = "row";
      response.forEach(function (object) {
        if (object.albumId == 1) {
          tr.innerHTML += `
          <tr class="col-3 d-flex flex-column"><td>${object.albumId}</td>
        <td>${object.id}</td>
        <td>${object.title}</td>
        <td><img src = "${object.url}" class = "img-fluid" ></img></td>
        <td><img src = "${object.thumbnailUrl}" class = "img-fluid" ></img></td></tr>`;

          console.log(object.id);
        }
      });

      document.getElementById("foto").appendChild(tr);
      //console.log(response);
    }
  };

  xhr.send();
}
