const form = document.getElementById("blog-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const categoryInput = document.getElementById("category-select");
const urlInput = document.getElementById("blog-url");
const bodyInput = document.getElementById("blog");
const blogList = document.getElementById("blogs");
const filter = document.getElementById("filter");
const categories = document.getElementById("categories");
const request = new Request("http://localhost:3000/posts");
const ui = new UI();
eventListeners();
getAllBlogs();
function eventListeners() {
  form.addEventListener("submit", addBlog);
  blogList.addEventListener("click", deleteBlog);
  filter.addEventListener("keyup", filterBlogs);
  categories.addEventListener("click", filterCategory);
}
function getAllBlogs() {
  request
    .get()
    .then((blogs) => {
      ui.addAllBlogsToUI(blogs);
    })
    .catch((err) => {
      console.log(err);
    });
}
function addBlog(e) {
  const blogTitle = titleInput.value.trim();
  const blogAuthor = authorInput.value.trim();
  const blogCategory = categoryInput.value;
  const blogUrl = urlInput.value.trim();
  const blogBody = bodyInput.value.trim();
  const time = Date();
  if (
    blogTitle === "" ||
    blogAuthor === "" ||
    blogCategory === "" ||
    blogUrl === "" ||
    blogBody === ""
  ) {
    alert("Please Fill In All The Fields");
  } else {
    request
      .post({
        image: blogUrl,
        title: blogTitle,
        body: blogBody,
        author: blogAuthor,
        category: blogCategory,
        date: time,
      })
      .then((blog) => {
        ui.addBlogToUI(blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  titleInput.value = "";
  authorInput.value = "";
  categoryInput.value = "";
  urlInput.value = "";
  bodyInput.value = "";
  e.preventDefault();
}
function deleteBlog(e) {
  if (e.target.id === "delete-blog") {
    const id =
      e.target.parentElement.firstElementChild.firstElementChild.textContent;
    request
      .delete(id)
      .then((message) => {
        ui.deleteItemFromUI(e.target.parentElement.parentElement);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
function filterBlogs(e) {
  const filterValue = e.target.value.toLowerCase();
  const filterTitles = document.querySelectorAll(".card-title");
  ui.filterBlogsOnUI(filterValue, filterTitles);
}
function filterCategory(e) {
  const filterCategory = document.querySelectorAll(".badge");
  const categoryTitle = e.target.innerText;
  ui.filterCategoryOnUI(categoryTitle, filterCategory);
}
