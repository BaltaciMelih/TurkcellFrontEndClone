function UI() {}
UI.prototype.showFilms = function (filmForShow) {
  let htmlTemplate = tableBodyEl.innerHTML;
  filmForShow.map((film, index) => {
    return (htmlTemplate)
  });
  return (tableBodyEl.innerHTML = htmlTemplate);
};
UI.prototype.displayMessage = function (message, type) {
  const formContainer = document.querySelector(".form-container");
  const div = document.createElement("div");
  div.className = alert-type;
  div.textContent = message;
  formContainer.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 3000);
};

UI.prototype.clearFilms = function () {
  films = [];
  localStorage.removeItem("films");
  tableBodyEl.innerHTML = "";
};