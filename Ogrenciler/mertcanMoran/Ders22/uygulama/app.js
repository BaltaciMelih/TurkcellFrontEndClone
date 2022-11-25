document.addEventListener("DOMContentLoaded", getAlbum);
function getAlbum() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
  xhr.onload = function () {
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);
      const row = document.createElement("tr");
      row.innerHTML = `
    <td class = "w-25">${response[0].albumId}</td>
    <td class = "w-25">${response[0].id}</td>
    <td><img src = "${response[0].thumbnailUrl}" class = "img-fluid w-25 h-25" ></img></td>
    <td class = "w-25">${response[0].title}</td>
    <td><img src = "${response[0].url}" class = "img-fluid w-25 h-25" ></img></td>
    
    `;
      document.getElementById("foto").appendChild(row);
      console.log(response[0]);
    }
  };

  xhr.send();
}
