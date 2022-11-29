// Ders - 23 Uygulaması Grup üyeleri
// Şafak Şenol
// Ömür Kasap
// Erdem Altun

const blog = document.querySelector('#rows')
document.addEventListener('DOMContentLoaded', getBlog);

let veri;
function getBlog() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                veri = data;
                veri.forEach((element) => {
                    blogger(element.userId, element.id, element.title, element.body)
                })
            })
            .catch((err) => console.log((err)));
    })
}

function blogger(usid, id, title, body) {
    const blogs= document.createElement('div');
    blogs.className = "col-md-4 col-sm-6 content-card";
    blogs.innerHTML += `
   <div class="card-big-shadow">
   <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
   <div class="content">
            <h4 class="category">${usid}</h4>
            <h5 class="category">${id}</h5>
            <h5 class="title">${title}</h5>
            <p class="description">${body}</p>
        </div>
    `;
    blog.appendChild(blogs);
}
