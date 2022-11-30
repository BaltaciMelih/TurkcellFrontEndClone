class UI {
  constructor() {
    this.post = document.querySelector('#blogposts');
    this.imageUrlInput = document.querySelector('#imgUrl');
    this.categoryInput = document.querySelector('#category');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');
    this.textContentArea = document.querySelector('#textContent');
  }

  showPosts(blogposts) {
    let blogs = document.querySelector('#blogposts');
    blogposts.forEach((post) => {
      blogs += `
      <div class="container">
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img" src="${post.imageUrl}" alt="Music">
        <div class="card-img-overlay">
          <a href="#" class="btn btn-light btn-sm">${post.category}</a>
        </div>
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <h2 class= "card-text">${post.author}</h2>
          <p class="card-text">${post.textContent}</p>
          <a href="#" class="btn btn-info">Read More</a>
        </div>
        <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div class="views">Oct 20, 12:45PM
          </div>
          <div class="stats">
           	<i class="far fa-eye"></i> 1347
            <i class="far fa-comment"></i> 12
          </div>
           
        </div>
      </div>
    </div>
  </div>
</div>
      `;
    });
    this.post.innerHTML = blogs;
  }
}

export const ui = new UI();
