const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
xhr.onload = function(){
    let row = document.querySelector(".row");

    if (this.status){
        const response = JSON.parse(this.responseText)
        console.log(response)
        response.forEach(function (e) {
            if (e.id<13){
                row.innerHTML += `
            <div class="col">
          <div class="card h-100">
            <img src="${e.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${e.title}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
            `;
            };
        //     row.innerHTML += `
        //     <div class="col">
        //   <div class="card h-100">
        //     <img src="${e.url}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">${e.title}</h5>
        //       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //     </div>
        //     <div class="card-footer">
        //       <small class="text-muted">Last updated 3 mins ago</small>
        //     </div>
        //   </div>
        // </div>
        //     `;
          });
    
    }
};

xhr.send();