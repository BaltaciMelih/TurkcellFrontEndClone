const form = document.getElementById("blog-form");
const blogNameInput = document.getElementById("blog-name");
const authorNameInput = document.getElementById("author-name");
const contentInput = document.getElementById("blog-content");
const imageInput = document.getElementById("blog-URL");
const blogList = document.getElementById("blog-list");
const filter = document.getElementById("filter");

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addBlog);
    blogList.addEventListener("click", deleteBlog);
    blogList.addEventListener("click", editBlog);
    filter.addEventListener("keyup", filterBlogs);
}

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
    post(data) {
        return new Promise((resolve, reject) => {
            fetch(this.url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then((response) => response.json())
            .then((data) = resolve(data))
            .catch((err) => console.log(err))
        });
    }
    put(id, data) {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err))
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}/${id}`, {
                method: "DELETE",
            })
                .then((response) => resolve("Blog silindi", response))
                .catch((err) => reject(err))
        });
    }
}

function addBlogUI(newBlog) {
    blogList.innerHTML += `
        <div class="row border-1 border-bottom py-3">
            <div class="col-sm-8">
                <h6>Tarih</h6>
                <h2>${newBlog.title}</h2>
                <p>${newBlog.content}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-3">
                        <span>${newBlog.author}</span>
                    </div>
                    <div class="d-flex gap-3">
                        <img id="edit-blog" data-id="${newBlog.id}" src="./node_modules/bootstrap-icons/icons/pencil-square.svg" alt="edit" width="20px">
                        <img id="del-blog" data-id="${newBlog.id}" src="./node_modules/bootstrap-icons/icons/trash3.svg" alt="del" width="20px">
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <img class="img-edit mt-2" src="${newBlog.image}">
            </div>
        </div>
    `;
}

function showAlert (message, type) {
    const alert = document.createElement("div");
    alert.className = `mt-3 alert alert-${type}`;
    alert.textContent = message;
    form.appendChild(alert);
    setTimeout(function () {
        alert.remove();
    }, 2000);
}

function addAllUI(blogs) {
    blogs.forEach(function(blog) {
        addBlogUI(blog)
    });
}
        
const request = new Request("http://localhost:3000/blogs");

request
    .get()
    .then((data) => addAllUI(data))
    .catch((err) => console.log(err))

function addBlog(e) {
    const newBlog = {
        title: `${blogNameInput.value}`,
        author: `${authorNameInput.value}`,
        content: `${contentInput.value}`,
        image: `${imageInput.value}`,
    }
    if((blogNameInput.value === "") || (authorNameInput.value === "") || (contentInput.value === "") || (imageInput.value === "")) {
        showAlert("Eksik bilgi girdiniz!!", "danger");
    } else {
        request
        .post(newBlog)
        .then((data) => {addBlogUI(data)})
        .catch((err) => console.log(err))
    }
    e.preventDefault();
}

function deleteBlog(e) {
    if(e.target.id === "del-blog") {
        const id = e.target.dataset.id;
        console.log(id)
        request
            .delete(id)
            .then((msg) => {console.log(msg)})
            .catch((err) => console.log(err))
    }
    e.preventDefault();
}

function editBlog(e) {
    if(e.target.id === "edit-blog") {
        const id = e.target.dataset.id;
        console.log(id)
        request
            .get(`http://localhost:3000/blogs/${id}`) 
            .then((blogs) => {blogs.forEach(function(blog) {
                if(blog.id == id) {
                    blogNameInput.value = blog.title;
                    authorNameInput.value = blog.author;
                    contentInput.value = blog.content;
                    imageInput.value = blog.image;
                }
                });
            })
            .catch((err) => console.log(err)); 
            form.addEventListener("submit", function(e) {
                request
                    .put(id, {
                        title: blogNameInput.value,
                        author: authorNameInput.value,
                        content: contentInput.value,
                        image: imageInput.value,
                    })
                    .then((blogs) => console.log(blogs))
                    .catch((err) => console.log(err));
                })
    }
    e.preventDefault();
}

function filterBlogs(e) {
    const filterValue = e.target.value.toUpperCase();
    const listItems = document.querySelectorAll("h2");
    listItems.forEach(function(listItems) {
        const text = listItems.textContent.toUpperCase();
        if (text.indexOf(filterValue) === -1) {
            listItems.parentElement.parentElement.setAttribute("style", "display: none");
        } else {
            listItems.parentElement.parentElement.setAttribute("style", "display: flex");
        }
    });
}
