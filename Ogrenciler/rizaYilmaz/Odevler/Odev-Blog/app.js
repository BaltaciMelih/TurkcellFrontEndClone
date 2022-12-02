class Request {
    get(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      });
    }
    post(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      });
    }
    put(id,data) {
      return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/posts/${id}`, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      });
    }
    delete(id) {
      return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/posts/${id}`, {
          method: "DELETE",
        })
          .then((response) => resolve("Veri Silme Başarılı", response))
          .catch((err) => reject(err));
      });
    }
  }
  
  const request = new Request();
  let row = document.querySelector(".row");
  request
    .get("http://localhost:3000/posts")
    .then((data) =>
    
      data.forEach((item) =>{addUI(item) } )
    )
    .catch((err) => console.log(err));
    function addUI(item){
      row.innerHTML += `
      <div class="col-12 col-md-4 mt-5">
            <div class="card h-100">
              <img src="${
                item.imgurl
              }" class="card-img-top" style="height:38%;" alt="...">
              <div class="card-body">
                <h5 class="card-title text-start fw-bold">${item.title}</h5>
                 
                <p class="text-warning text-start fw-semibold category">${
                  item.category
                }</p>
                
                <p class="card-text text-start mt-2">${item.description.slice(
                  0,
                  250
                )} </p>
                <hr>
                <div class="d-flex justify-content-between">
                <p class="card-text text-start text-danger">${item.author}</p>
                <p class="card-text text-end text-muted">${item.date}</p>
                </div>
                <div class="d-flex justify-content-between">
                <div> <button class="btn btn-danger" onClick = "{sil(${item.id})
                }">Delete </button></div>
                <div> <button class="btn btn-info text-light" onClick = "{editPost(${item.id})}">Edit </button> </div>
                <button type="button" class="btn btn-primary readMore" data-bs-toggle="modal" data-bs-target="#myModal-${item.id}">Read More ...</button>
                </div>
                <div class="modal" id="myModal-${item.id}">
  <div class="modal-dialog">
    <div class="modal-content">
    
      <div class="modal-header">
        <h4 class="modal-title text-start">${item.title}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
      <div class="d-flex justify-content-between">
      <p class="text-danger">${item.author}</p>
      <p class="text-muted">${item.date}</p>
      </div>
      <img src="${
        item.imgurl
      }" class="card-img-top" style="height:38%;" alt="...">
      <p class="text-warning text-start mt-1">${item.category}</p>
        <p class="text-start mt-2"> ${item.description} </p>
      </div>
  
    </div>
  </div>
  </div>
              </div>
            </div>
          </div>
      `;
    }
    
  function sil(id){
    request
    .delete(id)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
  } 
  function editPost(id,title,description,author,date,imgurl,category){
    let editForm = document.querySelector("#edit-form");
    let inputTitle = document.querySelector("#exampleInputTitle");
    let inputAuthor = document.querySelector("#exampleInputAuthor");
    let inputDate = document.querySelector("#exampleInputDate");
    let inputCategory = document.querySelector("#categorySelect");
    let inputUrl = document.querySelector("#exampleInputUrl");
    let inputDescription = document.querySelector("#exampleInputDescription");
    console.log(id);
    request
    .get("http://localhost:3000/posts")
    .then((data) =>
    
      data.forEach((item) => {
      if(id==item.id){
        console.log("eşit");
        inputTitle.value = item.title;
        inputAuthor.value = item.author;
        inputDate.value = item.date;
        inputCategory.value = item.category;
        inputUrl.value = item.imgurl;
        inputDescription.value = item.description;
        editForm.addEventListener("submit",function(){
          request
          .put(id,{
            title: inputTitle.value.trim(),
            author: inputAuthor.value.trim(),
            date: inputDate.value.trim(),
            category: inputCategory.value.trim(),
            imgurl: inputUrl.value.trim(),
            description: inputDescription.value.trim(),
            
          })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        })
      }
      }
      )
    )
    .catch((err) => console.log(err));
  }