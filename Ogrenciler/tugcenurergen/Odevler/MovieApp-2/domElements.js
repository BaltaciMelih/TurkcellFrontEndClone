export default class DomElements{
   
    static getDoms(){
        const movieForm = document.querySelector('#movie-form');
        const movieUrl = document.querySelector("#movie-url");
        const movieName = document.querySelector("#movie-name");
        const movieDirector = document.querySelector("#movie-director");
        const movieDate = document.querySelector("#movie-date");
        const saveButton = document.querySelector("#save-button");
        const movieList = document.querySelector("#movie-list");
        const deleteButton = document.querySelector("#delete-button");
        const editButton = document.querySelector("#edit-button");
        const alertDiv = document.querySelector("#alert-div");
        const alert = document.querySelector(".alert");
        const search = document.querySelector("#search");
        const movieNameH3 = document.querySelectorAll(".movie-name-h3");
        return {
          movieForm,
          movieName,
          movieDirector,
          movieDate,
          movieUrl,
          saveButton,
          movieList,
          deleteButton,
          editButton,
          alertDiv,
          alert,
          search,
          movieNameH3,
        };
}
}

