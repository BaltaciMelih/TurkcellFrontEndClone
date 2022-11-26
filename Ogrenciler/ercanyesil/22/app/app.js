document.getElementById("change").addEventListener("click", change);
function change() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/photos"  
  );
  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      let list = document.getElementById("list");
      console.log(response);
      for (let index = 0; index < 10; index++) {
        
        list.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src='${e.thumbnailUrl}' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <a href="" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
      }
      
        
      
    }
  };
  xhr.send();
}