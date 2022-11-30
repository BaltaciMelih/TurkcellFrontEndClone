import { http } from './httpRequests';
import { ui } from './ui';

const addPostSubmit = document.querySelector('.addSubmit');
const blogposts = document.querySelector('#blogposts');
eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', getPosts);
  addPostSubmit.addEventListener('click', submitPost);
  blogposts.addEventListener('click', deletePost);
}

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

function submitPost() {
  debugger;
  const imageUrl = document.getElementById('imgUrl').value;
  const category = document.getElementById('category').value;
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const textContent = document.getElementById('textContent').value;
  const id = document.querySelector('#id').value;

  const data = { imageUrl, category, title, author, textContent };

  // Input Doğrulama...
  if (imageUrl === '' || category === '' || title === '' || author === '' || textContent === '') {
    ui.showAlert('Lütfen tüm alanları doldurun', 'danger');
  } else {
    if (id === '') {
      http
        .post('http://localhost:3000/posts', data)
        .then((data) => {
          ui.showAlert('Post başarıyla eklendi', 'success');
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    } else {
      // Update post
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then((data) => {
          ui.showAlert('Post güncellendi', 'success');
          ui.changeState('add');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

function deletePost(e) {
  debugger;
  if (e.target.id === 'delete-post') {
    const id = e.target.dataset.id;
    if (confirm('Are u sure?')) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert('Post silindi', 'danger');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
  e.preventDefault();
}
