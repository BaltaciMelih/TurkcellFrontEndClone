class UI {
  addAllItemsToUI(articles) {
    articles.forEach(function (article) {
      ui.addItemToUI(article);
    });
  }
  addItemToUI(article) {
    const articleList = document.getElementById("articles");
    articleList.innerHTML += `
          <div class="card p-0 mb-4 col-lg-6 col-sm-12">
            <img
              class="card-img-top img-fluid"
              src="${article.image}"
            />
            <div class="card-body row">
              <h4 class="card-title">
                ${article.title}<span class="badge bg-danger ms-2">${article.category}</span>
              </h4>

              <p class="card-text text-truncate">
                ${article.body}
              </p>
              <div class="card-footer">
                    <small class="text-muted">Makale Numarası: <span>${article.id}</span></small>
                    <p class="card-text">
                    <small class="text-muted">Yazar: ${article.author}</small>
                    </p>
                    <p class="card-text">
                    <small class="text-muted">${article.date}</small>
                    </p>
                        <button
                        id="readButton"
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#A${article.id}"
                        >
                        Devamını Görüntüle
                        </button>
                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal" id="edit-article">Düzenle</button>
                        <button type="button" class="btn btn-danger" id="delete-article">Sil</button>
                            <div class="modal fade modal-lg" id="editModal" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5">Makaleyi Düzenle</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form id="edit-blog-form" name="form">
                                        <div class="form-inputs row">
                                        <div class="col-lg-12 mt-3">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="edit-title"
                                            placeholder="Başlık Düzenle"
                                            />
                                        </div>
                                        <div class="col-sm-12 col-lg-6 mt-3">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="edit-author"
                                            placeholder="Ad-Soyad Düzenle"
                                            />
                                        </div>
                                        <div class="col-sm-12 col-lg-6 mt-3">
                                            <select class="form-select" id="edit-category-select">
                                            <option selected value="default">Kategori Düzenle</option>
                                            <option value="Crypto Haber">Crypto Haber</option>
                                            <option value="Crypto&Yazılım">Crypto&Yazılım</option>
                                            <option value="Metaverse">Metaverse</option>
                                            <option value="Web 3.0">Web 3.0</option>
                                            <option value="BlockChain">BlockChain</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12 mt-3">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="edit-article-image"
                                            placeholder="Görsel Linki Düzenle"
                                            />
                                        </div>
                                        <div class="col-lg-12 mt-3">
                                            <textarea
                                            class="form-control"
                                            id="edit-article-text"
                                            rows="4"
                                            placeholder="Makale Düzenle"
                                            ></textarea>
                                        </div>
                                        </div>
                                        <button type="submit" class="btn btn-warning mt-3">Değişiklikleri Kaydet</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>  
                                </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="modal fade modal-lg"
                            id="A${article.id}"
                            tabindex="-1"
                            aria-hidden="true"
                            >
                            <div class="modal-dialog">
                            <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5">
                                            ${article.title}<span class="badge bg-danger ms-2">${article.category}</span>
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
                                        src="${article.image}"
                                        />
                                        <div class="card-body row">
                                        <p class="card-text">
                                            ${article.body}
                                        </p>
                                <div class="card-footer">
                                    <p class="card-text">
                                    <small class="text-muted">Yazar: ${article.author}</small>
                                    </p>
                                    <p class="card-text">
                                    <small class="text-muted">${article.date}</small>
                                    </p>
                                    <div class="modal-footer">
                                    <button
                                    type="button"
                                    class="btn btn-dark"
                                    data-bs-dismiss="modal"
                                    >
                                     Kapat
                                    </button>
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
  editItemOnUI(article, card) {
    card.innerHTML = `
        <img
              class="card-img-top img-fluid"
              src="${article.image}"
            />
            <div class="card-body row">
              <h4 class="card-title">
                ${article.title}<span class="badge bg-danger ms-2">${article.category}</span>
              </h4>

              <p class="card-text text-truncate">
                ${article.body}
              </p>
              <div class="card-footer">
                    <small class="text-muted">Makale Numarası: <span>${article.id}</span></small>
                    <p class="card-text">
                    <small class="text-muted">Yazar: ${article.author}</small>
                    </p>
                    <p class="card-text">
                    <small class="text-muted">${article.date}</small>
                    </p>
                        <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#A${article.id}"
                        >
                        Devamını Görüntüle
                        </button>
                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal" id="edit-article">Düzenle</button>
                        <button type="button" class="btn btn-danger" id="delete-article">Sil</button>
                        
                            <div class="modal fade modal-lg" id="editModal" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5">Makaleyi Düzenle</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form id="edit-blog-form" name="form">
                                        <div class="form-inputs row">
                                        <div class="col-lg-12 mt-3">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="edit-title"
                                            placeholder="Başlık Düzenle"
                                            />
                                        </div>
                                        <div class="col-sm-12 col-lg-6 mt-3">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="edit-author"
                                            placeholder="Ad-Soyad Düzenle"
                                            />
                                        </div>
                                        <div class="col-sm-12 col-lg-6 mt-3">
                                            <select class="form-select" id="edit-category-select">
                                            <option selected value="default">Kategori Düzenle</option>
                                            <option value="Crypto Haber">Crypto Haber</option>
                                            <option value="Crypto&Yazılım">Crypto&Yazılım</option>
                                            <option value="Metaverse">Metaverse</option>
                                            <option value="Web 3.0">Web 3.0</option>
                                            <option value="BlockChain">BlockChain</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12 mt-3">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="edit-article-image"
                                            placeholder="Görsel Linki Düzenle"
                                            />
                                        </div>
                                        <div class="col-lg-12 mt-3">
                                            <textarea
                                            class="form-control"
                                            id="edit-article-text"
                                            rows="4"
                                            placeholder="Makale Düzenle"
                                            ></textarea>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-warning">Değişiklikleri Kaydet</button>
                                </div>
                                </div>
                            </div>
                            </div>

                        <div
                            class="modal fade modal-lg"
                            id="A${article.id}"
                            tabindex="-1"
                            aria-hidden="true"
                            >
                            <div class="modal-dialog">
                            <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5">
                                            ${article.title}<span class="badge bg-danger ms-2">${article.category}</span>
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
                                        src="${article.image}"
                                        />
                                        <div class="card-body row">
                                        <p class="card-text">
                                            ${article.body}
                                        </p>
                                <div class="card-footer">
                                    <p class="card-text">
                                    <small class="text-muted">Yazar: ${article.author}</small>
                                    </p>
                                    <p class="card-text">
                                    <small class="text-muted">${article.date}</small>
                                    </p>
                                    <div class="modal-footer">
                                    <button
                                    type="button"
                                    class="btn btn-dark"
                                    data-bs-dismiss="modal"
                                    >
                                     Kapat
                                    </button>
                                </div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>`;
  }
  filterItemsOnUI(filterValue, filterTitles) {
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
        categoryName != "Tüm Kategoriler"
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
