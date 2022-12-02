const id = new URLSearchParams(window.location.search).get("id");
const blogContainer = document.getElementById("post");
const deleteBtn = document.getElementById("delete-btn");
const editBtn = document.getElementById("edit-btn");

deleteBtn.addEventListener("click", async() => {
    const res = await fetch("http://localhost:3000/posts/" + id, {
        method: "DELETE",
    });
    if (!res.ok) {
        deleteBtn.innerText = "Something went wrong";
        return;
    }
    window.location.replace("./index.html");
});


const fetchBlog = async() => {
    const res = await fetch("http://localhost:3000/posts/" + id);
    if (!res.ok) {
        window.location.replace("./index.html");
    }
    const blog = await res.json();
    addBlog(blog);
};

const addBlog = (blog) => {
    const template = `
    <form id="blogForm" method="post">
    <label for="author">Picture : </label>
    <input type="text" name="imgsrc" id="imgsrc" value='${blog.imgsrc}' autocomplete="off" />
    <label for="author">Category : </label>
    <input type="text" name="category" id="category" value='${blog.category}' autocomplete="off" />
    <label for="author">Author : </label>
    <input type="text" name="author" id="author" value='${blog.author}' autocomplete="off" />
    <label for="title">Title : </label>
    <input type="text" name="title" id="title" value='${blog.title}' autocomplete="off" />
    <label for="body">Comment : </label>
    <input type="text" name="body" id="body" value='${blog.body}' autocomplete="off" />
    <div class="button-group">
        <button type="submit">Update</button>
        <p id="form-status"></p>
    </div>
</form>

      
    `;
    blogContainer.innerHTML = template;
};



fetchBlog();

const form = document.getElementById("blogForm");
const formStatus = document.getElementById("form-status");

const sendBlog = async(e) => {
    try {
        e.preventDefault();
        const author = form.author.value;
        const title = form.title.value;
        const body = form.body.value;
        const category = form.category.value;
        const imgsrc = form.imgsrc.value;
        const datetime = new Date();
        const blog = {
            author,
            title,
            body,
            imgsrc,
            category,
            datetime



        };

        const res = await fetch("http://localhost:3000/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });

        const blogs = await res.json();
        if (blogs) {
            window.location.replace("./index.html");
        } else {
            throw "Blog not submitted.";
        }
    } catch (err) {
        formStatus.innerText = err.name ? err.message : err;
    }
};

form.addEventListener("submit", sendBlog);