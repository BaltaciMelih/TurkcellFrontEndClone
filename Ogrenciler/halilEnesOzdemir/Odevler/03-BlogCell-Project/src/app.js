import { http } from './httpRequests';
import { ui } from './ui';

const addPostSubmit = document.querySelector('.addSubmit');

eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', getPosts);
  addPostSubmit.addEventListener('click', submitPost);
}

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

function submitPost() {
  const imageUrl = document.getElementById('imgUrl').value;
  const category = document.getElementById('category').value;
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const textContent = document.getElementById('textContent').value;
  // const id = document.querySelector('#id');

  const data = { imageUrl, category, title, author, textContent };

  http
    .post('http://localhost:3000/posts', data)
    .then((data) => {
      getPosts();
    })
    .catch((err) => console.log(err));
}
