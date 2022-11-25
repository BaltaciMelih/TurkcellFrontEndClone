class Filter {
    static filterMovie() {
      let filter = document.getElementById("filter");
      filter.addEventListener("keyup", filterMovie);
      function filterMovie(e) {
        const filterValue = e.target.value.toLowerCase();
        const listItems = document.querySelectorAll(".list-item");
        listItems.forEach(function (listItem) {
          const text = listItem.textContent.toLowerCase();
          if (text.indexOf(filterValue) === -1) {
            listItem.setAttribute("style", "display:none !important");
          } else {
            listItem.setAttribute("style", "display:block");
          }
        });
      }
    }
  }
  