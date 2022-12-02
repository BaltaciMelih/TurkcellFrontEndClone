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
  posts.forEach((info) => {
    template += `
           
    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
    <div
      class="card text-white card-has-bg click-col"
      style="
        background-image: url(${info.image});
      "
    >
      <img
        class="card-img d-none"
        src="${info.image}"
        alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
      />
      <div class="card-img-overlay d-flex flex-column">
        <div class="card-body">
          <small class="card-meta mb-2">${info.category}</small>
          <h4 class="card-title mt-0">
            <a class="text-white" href="#"
              >${info.title}</a
            >
          </h4>
          <small><i class="far fa-clock"></i>${info.date}</small>
        </div>
        <div class="card-footer">
          <div class="media">
            <img
              class="mr-3 rounded-circle"
              src="${info.pp}"
              alt="user profile picture"
              style="max-width: 50px"
            />
            <div class="media-body">
              <h6 class="my-0 text-white d-block">${info.writer}</h6>
              <small>${info.occupation}</small>
            </div>
          </div>
        </div>
        <div class="btn-group col-12" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-danger delete-btn card-btn button-delete" id="${info.id}">Sil</button>
        <button type="button" class="btn btn-success edit-btn card-btn button-edit" data-bs-toggle="modal" data-bs-target="#edit-dialog-${info.id}" id="">Düzenle</button>
        <button type="button" class="btn btn-primary float-end card-btn button-read" data-bs-toggle="modal" data-bs-target="#id${info.id}">Daha fazla...</button>
      </div>
      </div>
    </div>
  </div>

<!-- Modal -->
<div class="modal fade" id="edit-dialog-${info.id}" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header">
     <h2 class="modal-title fs-5" id="ModalLabel">Blogu Düzenle</h2>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body ">
   <form class="update_form">
   <input type="hidden" value="${info.id}" name="id" />
   <input type="text" value="${info.title}" name="title" required placeholder="Blog title" />
   <input type="text" value="${info.writer}" name="writer" required placeholder="Blog writer" />
   <input type="text" value="${info.pp}" name="pp" required placeholder="Profile Picture" />
   <input type="date" value="${info.date}" name="date" required placeholder="Blog date" />
   <input type="text" value="${info.image}" name="image" required placeholder="Blog image" />
   <input type="text" value="${info.category}" name="category" required placeholder="Blog category" />
   <input type="text" value="${info.occupation}" name="occupation" required placeholder="Occupation" />
   <textarea  type="text" name="body" "required placeholder="Blog body">${info.body}</textarea>
   <div class="modal-footer">
     
   <button type="sumbit" class="btn btn-primary">Değişiklikleri Kaydet</button>
 </div>
 
 </form>
   </div>
  
 </div>
</div>
</div>
  
  <div class="modal fade" id="id${info.id}" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
       <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    ${info.title}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body mx-2 px-3">
                <img src="${info.image}" class="w-100 my-3" alt="blog image"></img>
                ${info.body}<hr>
                <div class="media">
                <img
                  class="mr-3 rounded-circle"
                  src="${info.pp}"
                  alt="user profile picture"
                  style="max-width: 50px"
                />
                <div class="media-body">
                  <h6 class="my-0 text-dark d-block">${info.writer}</h6>
                  <small>${info.occupation}</small>
                </div>
                </div></div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Geri Dön
                  </button>
                  <button type="button" class="btn btn-primary">
                  ${info.category}
                </button>
                  <button type="button" class="btn btn-primary">
                    ${info.date}
                  </button>
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

  const updateForms = container.querySelectorAll(".update_form");
  updateForms.forEach((item) => item.addEventListener("submit", updatePost));
};

const updatePost = async (e) => {
  e.preventDefault();
  const id = e.target[0].value;
  const updateForms = container.querySelectorAll(".update_form");

  const doc = {
    pp: updateForms[id - 1].pp.value,
    occupation: updateForms[id - 1].occupation.value,
    title: updateForms[id - 1].title.value,
    image: updateForms[id - 1].image.value,
    date: updateForms[id - 1].date.value,
    category: updateForms[id - 1].category.value,
    writer: updateForms[id - 1].writer.value,
    body: updateForms[id - 1].body.value,
  };
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/json" },
  });
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderPosts());

container.addEventListener("click", async (e) => {
  if (e.target.className.includes("delete-btn")) {
    await fetch(`http://localhost:3000/posts/${e.target.id}`, {
      method: "DELETE",
    });
  }
});
