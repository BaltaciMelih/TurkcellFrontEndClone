class DeleteItem {
    static deleteItem() {
      let deleteMovie = document.querySelectorAll("li");
      for (let i = 0; i < deleteMovie.length; i++) {
        deleteMovie[i].addEventListener("click", deleteMovieFunction);
      }
      function deleteMovieFunction(e) {
        if (e.target.className === "btn btn-danger remove") {
          e.target.parentElement.parentElement.parentElement.remove();
        }
        deleteMovieToStorage(
          e.target.parentElement.parentElement.children[1].children[0].children[0]
            .children[0].textContent
        );
      }
    }
  }
  