class Ui {

  static loadDefaultFilmsToUI() {
    const initialized = localStorage.getItem("initialized");
    if (!initialized) {
      const movies = [
        new Movie(
          "https://cdn1.ntv.com.tr/gorsel/xTHnkzlzxk6gqOx0Uc3mcg.jpg?width=1000&mode=both&scale=both&v=1655042592950",
          "Avengers Age Of Ultron",
          "Joss Whedon",
          "1 Mayıs 2015"
        ),
        new Movie(
          "https://tr.web.img2.acsta.net/pictures/18/03/16/15/01/4344531.jpg",
          "Avengers Infinity War",
          "Anthony Russo, Joe Russo",
          "27 Nisan 2018"
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
    const link = document.createElement("a");

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

    linkTd.appendChild(link);
    listItem.appendChild(movPoster);
    listItem.appendChild(movName);
    listItem.appendChild(movType);
    listItem.appendChild(movVisionDate);
    listItem.appendChild(linkTd);
    movielist.appendChild(listItem);
  }

  static showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardbody.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, 2000);
  }
}
