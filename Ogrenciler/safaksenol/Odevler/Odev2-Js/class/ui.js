class UI {
  
  static loadDefaultFilmsToUI() {
  const initialized = localStorage.getItem("initialized");
  if (!initialized) {
    const movies = [
      new Movie(
        "https://tr.web.img4.acsta.net/pictures/16/08/16/10/53/130303.jpg",
        "Sully",
        "Clint Eastwood",
        "9 Eylül 2016"
      ),
      new Movie(
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "Matrix",
        "Lana Wachowski",
        "3 Eylül 1999"
      ),
    ];
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("initialized", true);
  }
}
  static addMovieToUI(name, pic, type, visiondate) {
    const listItem = document.createElement("tr");
    const movPoster = document.createElement("td");
    const movName = document.createElement("td");
    const movType = document.createElement("td");
    const movVisionDate = document.createElement("td");
    const linkTd = document.createElement("td");
    const linkEditTd = document.createElement("td");
    const link = document.createElement("a");
    const editBtn = document.createElement("a");

    movPoster.innerHTML = `<img src="${pic}" width="100">`;
    movName.textContent = name;
    movType.textContent = type;
    movVisionDate.textContent = visiondate;
    movName.classList = "name";
    movType.classList = "type";
    movVisionDate.classList = "visiondate";

    movPoster.setAttribute("scope", "row");

    link.href = "#";
    link.classList = "delete-item";
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    editBtn.href = "#";
    editBtn.classList = "edit";
    editBtn.innerHTML = '<i class = "fa fa-edit"></i>';


    linkTd.appendChild(link);
    linkEditTd.appendChild(editBtn);
    listItem.appendChild(movPoster);
    listItem.appendChild(movName);
    listItem.appendChild(movType);
    listItem.appendChild(movVisionDate);
    listItem.appendChild(linkTd);
    listItem.appendChild(linkEditTd);
    movielist.appendChild(listItem);
  }

  static showAlert (type, message) {
    const alert = document.createElement("div");

    alert.classList = `alert alert-${type}`;
    alert.textContent = message;

    firstCardbody.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, 2000);
  }

  static movFilter(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".name");
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.parentElement.setAttribute("style", "display:none !important");
    } else {
      listItem.parentElement.setAttribute("style", "display:table-row");
    }
  });
  }

  static preview() {
  const poster = moviePic.value;
  previewPoster.setAttribute("src", poster);
}
};