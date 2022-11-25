const DomElements = function(){};

DomElements.mainProcess = function () {
  const uploadBox = document.querySelector(".upload-box");
  const fileInput = uploadBox.querySelector("input");
  const previewImg = uploadBox.querySelector("img");
  const urlBox = document.querySelector(".url-box");
  const enterUrlInput = urlBox.querySelector("#enter-url");
  const movieName = document.querySelector("#movie-name");
  const movieDirector = document.querySelector("#movie-director");
  const movieDate = document.querySelector("#movie-date");
  const saveButton = document.querySelector(".save-button");
  const list = document.querySelector(".movies");
  const deleteButton = document.querySelector(".delete-btn");
  return {
    uploadBox,
    fileInput,
    previewImg,
    urlBox,
    enterUrlInput,
    movieName,
    movieDirector,
    movieDate,
    saveButton,
    list,
    deleteButton,
  };
};

export {DomElements};