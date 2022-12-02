const postList = document.querySelector('.posts-list');
const addPostForm = document.querySelector('.add-post-form');
const url = 'http://localhost:3000/posts';
const titleValue = document.querySelector('#title-value');
const bodyValue = document.querySelector('#body-value');
const buttonSubmit = document.querySelector('.btn');
const authorValue = document.querySelector('#author-value');
const dateValue = document.querySelector('#date-value');
const imgValue = document.querySelector('#img-value');
const filterValue = document.querySelector('#filter');
let output ='';
fetch(url)
 .then(res => res.json())
 .then(data => {
    data.forEach(post => {
      output +=`
      <div class="posts-list row col-lg-5 me-2 text-center d-flex col-sm-12">
      <div class="card bg-light mt-4 >
          <div class="card-body" data-id=${post.id}>
              <h5 class="card-title pt-3 px-2">${post.title}</h5>   
              <h6 class="card-subtitle mb-2 text-muted px-2">Yazar: ${post.author}</h6>
              <img src="${post.img}" class="card-img-top img-fluid rounded my-3" alt="..." />
              <p class="card-text px-2 align-self-center">${post.content}</p>
              <div><small class="card-date float-end">${post.date}</small></div>
              <div class="footer-edits px-2 my-5">
              <a href="#" class="card-link text-decoration-none" id="edit-post">DÜZENLE</a>
              <a href="#" class="card-link text-decoration-none" id="delete-post">SİL</a>
<div>
<button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  İçeriği Görüntüle
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${post.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="${post.img}" class="card-img-top img-fluid rounded my-3" alt="..." />
      <p class="card-text px-2 align-self-center">${post.content}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
      </div>
    </div>
  </div>
</div>
</div>
              </div>
          </div>
        </div>
        </div>
      `;
    });
    postList.addEventListener('click',postClick)
    postList.innerHTML = output;
 });
 function postClick(e){
    e.preventDefault();
    let editButton = e.target.id == 'edit-post';
    let deleteButton = e.target.id == 'delete-post';
    let id = e.target.parentElement.parentElement.dataset.id;

    if (editButton){
        const parent = e.target.parentElement.parentElement;
        let titleContent = parent.querySelector('.card-title').textContent;
        let contentContent = parent.querySelector('.card-text').textContent;
        let subtitleContent = parent.querySelector('.card-subtitle').textContent;
        let dateContent = parent.querySelector('.card-date').textContent;
        let imgContent = parent.querySelector('.card-img-top').textContent;
        titleValue.value = titleContent;
        bodyValue.value = contentContent;
        authorValue.value = subtitleContent;
        dateValue.value = dateContent;
        imgValue.value = imgContent;
        buttonSubmit.addEventListener('click',buttonClick)
    }
function buttonClick(e){
    e.preventDefault();
    fetch(`${url}/${id}`,{
        method: 'PUT',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
            title: titleValue.value,
            author: authorValue.value,
            img: imgValue.value,
            date: dateValue.value,
            content: bodyValue.value,
        })
    })
      .then(res => res.json())
      .then(() => location.reload())
}
    if (deleteButton){
        fetch(`${url}/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(() => location.reload())
    }
 }

 addPostForm.addEventListener('submit', submitPost)

 function submitPost(e) {
    e.preventDefault();
    fetch(url,{
        method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
            title: titleValue.value,
            author: authorValue.value,
            img: imgValue.value,
            date: dateValue.value,
            content: bodyValue.value
        })
     })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            renderPosts(dataArr);
        })
        bodyValue.value = '';
        titleValue.value = '';
 };
document.querySelector('#filter').addEventListener('keyup',(e)=>{
const filterValue = e.target.value;
let filterItem = document.querySelectorAll(".card-title");
filterItem.forEach((filterItem)=>{
    let text = filterItem.textContent.toLowerCase();
    console.log(text.indexOf(filterValue));
    if (text.indexOf(filterValue) === -1) {
      filterItem.parentElement.parentElement.setAttribute(
        "style",
        "display:none !important"
      );
    }
    else {
        filterItem.parentElement.parentElement.setAttribute(
          "style",
          "display:block"
        );
      }
    });
})