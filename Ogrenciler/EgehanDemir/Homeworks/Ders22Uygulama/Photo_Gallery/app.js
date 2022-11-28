document.getElementById("get").addEventListener("click", addData);

function addData() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/photos");

  request.onload = function () {
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);
      // console.log(response);
      // console.log(response[0].id); 

      response.forEach(function (el) {
        if (el.id <= 20) {
          let photo2 = document.getElementById("photos");
          photo2.innerHTML += `
          <hr >
          <div class="row">
            <div class="col-12 col-md-12">
            <div class="card" style="width: 18rem;" >

            <img class="card-img-top " src="${el.thumbnailUrl} alt="Card image cap" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card-body">
              <h5 class="card-title">${el.title}</h5>
              <p class="card-text">${el.id}</p>
            </div>
          </div>
            </div>
          </div>
          `
        }
      });
      response.forEach(function (e) {
        if (e.id <= 20) {
          let photo = document.getElementById("photos");
          photo.innerHTML += `<!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                  <div class="modal-body">
                   <img src="${e.url}l" alt="mainPhoto"/>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                  </div>
                  </div>
                  </div>`
        }
      });
    }

  };
  request.send();

};
// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// }