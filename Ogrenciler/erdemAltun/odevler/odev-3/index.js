const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");


const renderPosts = async (term) => {
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";
  if (term) {
    uri += `&q=${term}`;
  }
  const res = await fetch(uri);
  const posts = await res.json();

  let template = "";
  posts.forEach((post) => {
    template += `
           
       <div class="card" style="width: 400px; margin:30; background-color: transparent">
       <img src="${post.image
      }" class="card-img-top" style="width:375" alt="...">
       <div class="card-body">
         <h5 class="card-title">${post.title}</h5>
         <p class="card-text">${post.body.slice(0, 200)}</p>
       </div>
       <ul class="background-color: transparent">
         <li class="list-group-item">${post.category}</li>
         <li class="list-group-item">${post.writer}</li>
         <li class="list-group-item">${post.date}</li>
       </ul>
       <div class="card-body">
       <button type="button" class="btn btn-danger delete-btn card-btn button-delete" id="${post.id
      }">Delete</button>
       <button type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#id${post.id
      } ">
       İncele...
     </button>
     <button type="button"  class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-dialog-${post.id}">
  Düzenle
</button>

<!-- Modal -->
<div class="modal fade" id="edit-dialog-${post.id}" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="ModalLabel">Blogu Düzenle</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
      <form class="update_form">
      <input type="hidden" value="${post.id}" name="id" />
      <input type="text" value="${post.title}" name="title" required placeholder="Blog title" />
      <input type="text" value="${post.writer}" name="writer" required placeholder="Blog writer" />
      <input type="text" value="${post.image}" name="image" required placeholder="Blog image" />
      <input type="date" value="${post.date}" name="date" required placeholder="Blog date" />
      <input type="text" value="${post.category}" name="category" required placeholder="Blog category" />
      <textarea  type="text" name="body" "required placeholder="Blog body">${post.body}</textarea>
      <div class="modal-footer">
        
      <button type="sumbit" class="btn btn-primary">Kaydet</button>
    </div>
    
    </form>
      </div>
     
    </div>
  </div>
</div>
     
     <div class="modal fade" id="id${post.id
      }" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content p-5">
         <img src="${post.image}"  >
         <h1>${post.title}</h1>
         <p><small>${post.date}</small></p>
         <p><small>${post.category}</small></p>
         <h3>${post.writer}</h3>
         <p>${post.body}</p>
        
         
           </div>
           
           </div>
         </div>
       </div>
     </div>
       </div>
     </div>
     
    
        `;
  });

  container.innerHTML = template;

  const updateForms = container.querySelectorAll('.update_form');
  updateForms.forEach((item) => item.addEventListener('submit', updatePost));
};


const updatePost = async (e) => {
  e.preventDefault();
  const id = e.target[0].value
  const updateForms = container.querySelectorAll('.update_form');

  const doc = {
    title: updateForms[(id - 1)].title.value,
    image: updateForms[(id - 1)].image.value,
    date: updateForms[(id - 1)].date.value,
    category: updateForms[(id - 1)].category.value,
    writer: updateForms[(id - 1)].writer.value,
    body: updateForms[(id - 1)].body.value,
  }
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  });
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderPosts());

container.addEventListener("click", async (e) => {
  
  await fetch(`http://localhost:3000/posts/${e.target.id}`, {
    method: "DELETE",
  });

  e.preventDefault();
});