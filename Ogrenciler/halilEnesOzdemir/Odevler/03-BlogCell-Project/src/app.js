import { http } from './httpRequests';

eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', getPosts);
}

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
