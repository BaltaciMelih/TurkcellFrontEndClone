document.getElementById('get').addEventListener('click', addData);

function addData() {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/photos');

  request.onload = function () {
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);

      response.forEach(function (el) {
        if (el.id <= 21) {
          let photo = document.getElementById('photos');
          photo.innerHTML += `
                                  <div class="col-lg-4 col-md-6 col-sm-10-auto mb-3">
                          <div class="card ">
                          <a data-bs-toggle="modal" data-bs-target="#myModal">
                        <img class="card-img-top" src="${el.thumbnailUrl}">
                          </a>
                                <div class="card-body">
                                        <h4 class="text-center name">${el.title}</h4>
                                        <p class="card-text text-center">${el.id}</p>
                                </div>
                        </div>
                </div>
        <!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
                              <img class="card-img-top" src="${el.url}">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;
        }
      });
    }
  };
  request.send();
}
