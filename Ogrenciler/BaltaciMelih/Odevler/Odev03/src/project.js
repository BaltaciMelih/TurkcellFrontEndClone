const form = document.getElementById("blog-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const selectInput = document.getElementById("category-select");
const imgInput = document.getElementById("article-image");
const articleInput = document.getElementById("article");
const articleList = document.getElementById("articles");

const request = new Request("http://localhost:3000/articles");
const ui = new UI();

eventListeners();
getAllItems();

function eventListeners() {
  form.addEventListener("submit", addItem);
  articleList.addEventListener("click", deleteItem);
  articleList.addEventListener("click", editItem);
}

function getAllItems() {
  request
    .get()
    .then((articles) => {
      ui.addAllItemsToUI(articles);
    })
    .catch((err) => {
      console.log(err);
    });
}

function addItem(e) {
  const articleTitle = titleInput.value.trim();
  const articleAuthor = authorInput.value.trim();
  const articleSelect = selectInput.value;
  const articleImg = imgInput.value.trim();
  const articleBody = articleInput.value.trim();
  const time = Date();

  if (
    articleTitle === "" ||
    articleAuthor === "" ||
    articleSelect === "" ||
    articleImg === "" ||
    articleBody === ""
  ) {
    alert("Lütfen Tüm Alanları Doldurun");
  } else {
    request
      .post({
        image: articleImg,
        title: articleTitle,
        body: articleBody,
        author: articleAuthor,
        category: articleSelect,
        date: time,
      })
      .then((article) => {
        ui.addItemToUI(article);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  titleInput.value = "";
  authorInput.value = "";
  selectInput.value = "default";
  imgInput.value = "";
  articleInput.value = "";
  e.preventDefault();
}

function deleteItem(e) {
  if (e.target.id === "delete-article") {
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

function editItem(e) {
  if (e.target.id === "edit-article") {
    const editForm = document.getElementById("edit-blog-form");
    const editTitle = document.getElementById("edit-title");
    const editAuthor = document.getElementById("edit-author");
    const editSelect = document.getElementById("edit-category-select");
    const editImg = document.getElementById("edit-article-image");
    const editArticle = document.getElementById("edit-article-text");

    const card = e.target.parentElement.parentElement;
    const id =
      e.target.parentElement.firstElementChild.firstElementChild.textContent;
    const time = Date();

    request
      .get()
      .then((articles) => {
        articles.forEach(function (article) {
          if (article.id == id) {
            editImg.value = article.image;
            editTitle.value = article.title;
            editArticle.value = article.body;
            editAuthor.value = article.author;
            editSelect.value = article.category;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    editForm.addEventListener("submit", function (e) {
      request
        .put(id, {
          image: editImg.value,
          title: editTitle.value,
          body: editArticle.value,
          author: editAuthor.value,
          category: editSelect.value,
          date: time,
        })
        .then((newArticle) => {
          ui.editItemOnUI(newArticle, card);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
