class Request {
  constructor(url) {
    this.url = url;
}
  get() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const resData = await response.json();
    return resData;
  }
  put(id, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      fetch(this.url + id ,{
        method: "DELETE",
      })
        .then((response) => resolve("Veri Silme Başarılı", response))
        .catch((err) => reject(err));
    });
  }
} 

const request = new Request("http://localhost:3000/Blogs/");

blogUI();
const ui = document.querySelector("#ui");
const mc = document.querySelector("#abc");


function blogUI() {
    request
      .get("http://localhost:3000/Blogs/")
      .then((data) => {
        data.forEach((blog) => {
          // console.log(blog);
          ui.innerHTML += `          
            <div class="col-12 col-sm-4 col-md-3 d-flex justify-content-center align-items-center">
              <div class="card border-0 my-5">
                <img src="${blog.image}" class="card-img-top" alt="${blog.name}" />
                <div class="card-body">
                  <h4 class="card-title text-center" contenteditable="true">${blog.name}</h4>
                  <h5 pt-4" contenteditable="true">${blog.author}</h5>
                  <p class="card-text" contenteditable="true">${blog.content}</p>
                  <p class="card-text" contenteditable="true">${blog.category}</p>
                  <h6 class="text-center" contenteditable="true">${blog.date}</h6>
                  <button id="${blog.id}" class="btn btn-danger delete" onclick="return this.parentNode.parentNode.parentNode.remove();">Delete${blog.id}</button>
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-${blog.id}">Review</button>
                </div>
              </div>
            </div>
            <div class="modal fade" id="Modal-${blog.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="abc" class="modal-body">
                ${blog.content}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          `;      
        });
      })
      .catch((err) => console.log(err));
}  

function filterItemsOnUI(filterValue, filterTitles) {
  filterTitles.forEach(function (filterTitle) {
    const text = filterTitle.innerText.toLowerCase();
    console.log(text);
    if (text.indexOf(filterValue) === -1) {
      filterTitle.parentElement.parentElement.parentElement.setAttribute(
        "style",
        "display:none !important"
      );
    } 
    else 
    {
      filterTitle.parentElement.parentElement.parentElement.setAttribute(
        "style",
        "display:block"
      );
    }
  });
}

// $("#submit").click(function () {
//   var text = $("#content").val();
//   $("#modal_body").html(text);
// });
  
document.querySelector("#blog-add").addEventListener("click", function (e) {
   e.preventDefault();
  const newPost = {
    name: `${document.getElementById("name").value}`,
    content: `${document.getElementById("content").value}`,
    author: `${document.getElementById("author").value}`,
    date: `${document.getElementById("date").value}`,
    category: `${document.getElementById("categories").value}`,
    image: `${document.getElementById("image-url").value}`,
  };
  console.log("merhaba");
  
  request
      .post(newPost)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
});

const searchTerm = document.getElementById("searchTerm");
searchTerm.addEventListener("keyup",filterItems);
function filterItems(e) {
  const filterValue = e.target.value.toLowerCase();
  const filterTitles = document.querySelectorAll(".card-title");
  filterItemsOnUI(filterValue, filterTitles);
}