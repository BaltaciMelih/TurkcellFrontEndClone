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
  posts.forEach((post) => {
    template += `
            <article class="postcard dark red">
          <a class="postcard__img_link" href="#">
            <img
              class="postcard__img"
              src="${post.url}"
              alt="Image Title"
            />
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title red">
              <a href="#">${post.title}</a>
            </h1>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt"> ${post.body.slice(
              0,
              200
            )} </div>
            <ul class="postcard__tagbox">
              <li class="tag__item">
                <i class="fas fa-clock mr-2"></i>${post.category}</li>
              <li class="tag__item">
                <i class="fas fa-tag mr-2"></i>${post.writer}</li>
              <li class="tag__item">
                <i class="fas fa-clock mr-2"></i>${post.date}</li>
              <li class="tag__item play red">
                <a href="details.html?id=${post.id}"><i class="fas fa-play mr-2"></i>Devamını oku ...</a>
              </li>
              <li class="tag__item play green">
                <a href="edit.html?id=${post.id}"><i class="fas fa-play mr-2"></i>Düzenle</a>
              </li>
            </ul>
          </div>
        </article>

        `;
  });

  container.innerHTML = template;
};
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderPosts());
