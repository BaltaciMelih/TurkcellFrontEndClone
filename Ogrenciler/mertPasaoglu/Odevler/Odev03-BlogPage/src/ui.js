class UI {
    addAllBlogsToUI(posts) {
      posts.forEach(function (post) {
        ui.addBlogToUI(post);
      });
    }
    addBlogToUI(post) {
      const blogList = document.getElementById("blogs");
      blogList.innerHTML += `
        <div class="card border border-2 shadow bg-light rounded  p-2 d-flex flex-column justify-content-between text-center">
          <img
            class="img-fluid"
            src="${post.image}"
          />
          <div class="card-body row">
            <h4 class="card-title">
              ${post.title}<span class="badge bg-primary ms-2">${post.category}</span>
            </h4>
            <p class="card-text text-truncate">
              ${post.body}
            </p>
            <div class="card-footer">
              <small class="text-muted d-none">Blog No: <span>${post.id}</span></small>
              <p class="card-text">
                <p><i>By</i> ${post.author}</p>
              </p>
              <p class="card-text">
                <small class="text-muted">${post.date}</small>
              </p>
              <div class="d-flex justify-content-evenly footer-buttons">              
              <button
              id="readButton"
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#A${post.id}"
              >
              Read More...
              </button>
              <button type="button" class="btn btn-danger" id="delete-blog">Delete</button></div>
              <div
                class="modal fade modal-lg"
                id="A${post.id}"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5">
                      ${post.title}<span class="badge bg-info ms-2">${post.category}</span>
                      </h1>
                      <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      ></button>
                    </div>
                    <img
                    class="card-img-top img-fluid"
                    src="${post.image}"
                    />
                    <div class="card-body row">
                      <p class="card-text">
                          ${post.body}
                      </p>
                      <div class="card-footer">
                        <p class="card-text">
                        <small class="text-muted"><i>By</i> ${post.author}</small>
                        </p>
                        <p class="card-text">
                        <small class="text-muted">${post.date}</small>
                        </p>
                        <div class="modal-footer">
                          <button
                          type="button"
                          class="btn btn-dark"
                          data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div> 
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    deleteItemFromUI(e) {
      e.remove();
    }
    filterBlogsOnUI(filterValue, filterTitles) {
      filterTitles.forEach(function (filterTitle) {
        const text = filterTitle.innerText.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
          filterTitle.parentElement.parentElement.setAttribute(
            "style",
            "display:none !important"
          );
        } else {
          filterTitle.parentElement.parentElement.setAttribute(
            "style",
            "display:block"
          );
        }
      });
    }
    filterCategoryOnUI(categoryName, filterCategory) {
      filterCategory.forEach(function (category) {
        const text = category.innerText;
        if (
          text.indexOf(categoryName) === -1 &&
          categoryName != "All Categories"
        ) {
          category.parentElement.parentElement.parentElement.setAttribute(
            "style",
            "display:none !important"
          );
        } else {
          category.parentElement.parentElement.parentElement.setAttribute(
            "style",
            "display:block"
          );
        }
      });
    }
  }
  