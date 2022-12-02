const row = document.getElementById("blogRows");
const addButton = document.getElementById("AddButton");
const updateButton = document.getElementById("UpdateButton");
const deleteButton = document.getElementById("DeleteButton");
const dataIdInput = document.getElementById('updateId')
const deleteIdInput = document.getElementById('deleteId')
const filterButton = document.getElementById('filterButton')
const filterInput = document.getElementById('filterInput')

class Request {
  constructor(url) {
    this.url = url;
  }
  async get(query) {
   
    row.innerHTML=""
    
    const response = await fetch(`${this.url}/${query}`);
    if (!response.ok) {
      throw new Error(`Bir hata oluştu ${response.status}`);
    }
    const data = await response.json()
      .then(veri => {
        veri.forEach(function (e) {
          row.innerHTML += `<div class="col-12 col-md-4">
                <div class="card m-5" style="width: 18rem;">
                    <img src="${e.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${e.title}</h5>
                      <p class="card-text">${e.text}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item text-danger">Category: ${e.category}</li>
                      <li class="list-group-item text-danger">Author: ${e.author}</li>
                      <li class="list-group-item text-danger">Publish Date: ${e.DateAndTime}</li>
                    </ul>
                    <div class="card-body">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" id="yaziyiGoster">
                            Look Into
                          </button>
                    </div>
                  </div>
                  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${e.category}</li>
                                <li class="list-group-item">${e.author}</li>
                                <li class="list-group-item">${e.DateAndTime}</li>
                              </ul>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>`
        });
      })
      .catch(err => console.log(err));
  }

  async post(data) {
    const response = await fetch(`${this.url}/`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),

    })
    const res = await response.json()
      .catch(err => console.log("Bir Hata Oluştu"));
    return res;
  }
  async put(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),

    })
    const res = await response.json()
      .catch(err => console.log("Bir Hata Oluştu"));
    return res;
  }

  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    })
    const res = await response.json()
      .catch(err => console.log("Bir Hata Oluştu"));
    return res;
  }
}

const req = new Request("http://localhost:3000/posts");

req.get('')
  .catch(err => console.log(`Hata: ${err.message}`));

filterButton.addEventListener('click',()=>{
  if(filterInput.value!==''){
    req.get(`?category=${filterInput.value}`)
  }else{
    req.get('')
  }
 
})

addButton.addEventListener("click", () => {
  req.post({
    id: ``,
    image: `${document.getElementById("url").value}`,
    title: `${document.getElementById("title").value}`,
    text: `${document.getElementById("text").value}`,
    category: `${document.getElementById("category").value}`,
    author: `${document.getElementById("author").value}`,
    DateAndTime: `${document.getElementById("PublishTime").value}`
  })
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

updateButton.addEventListener("click", () => {
  req.put(dataIdInput.value, {
    image: `${document.getElementById("updateurl").value}`,
    title: `${document.getElementById("updatetitle").value}`,
    text: `${document.getElementById("updatetext").value}`,
    category: `${document.getElementById("updatecategory").value}`,
    author: `${document.getElementById("updateauthor").value}`,
    DateAndTime: `${document.getElementById("updatePublishTime").value}`
  })
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

deleteButton.addEventListener("click", () => {
  req.delete(deleteIdInput.value)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
});





