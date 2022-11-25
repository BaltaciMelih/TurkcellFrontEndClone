class UI {

//Filmi UI e ekleme
static MoviesUI(movies){
  const listItem = document.createElement("li");
  const linkDiv=document.createElement("div");
  const link1 = document.createElement("a");
  link1.href = "#";
  link1.className = "change-item";
  link1.innerHTML = `<i class="bi bi-sticky-fill"></i>
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-sticky-fill text-dark" viewBox="0 0 16 16">
    <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
  </svg><br>`;
  const link2 = document.createElement("a");
  link2.href = "#";
  link2.className = "delete-item";
  link2.innerHTML = `<i class='bi bi-x-circle-fill'></i>
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-x-circle-fill text-dark" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
  </svg>`;
  listItem.className = "list-group-item d-flex bg-secondary";
  const bannerImage=document.createElement("div");
  bannerImage.className="img img-fluid";
  bannerImage.innerHTML=`<img src="${movies.newBanner}" alt="" width="250px" height="300px">`;
  listItem.appendChild(bannerImage);
  const movieItem=document.createElement("div");
  movieItem.classList="ms-3 fs-4 text-dark";
  movieItem.innerHTML=`
  <span class="fw-bolder">Film Adı : </span><span class="movieNames">${movies.newMovieName}</span><br>
  <span class="fw-bolder">Yönetmen : </span><span class="movieDirector">${movies.newDirector}</span> <br>
  <span class="fw-bolder">Yayın Tarihi : </span><span class="movieDate">${movies.newDate}</span>`;
  listItem.appendChild(movieItem);
  linkDiv.className="ms-auto";
  linkDiv.appendChild(link1);
  linkDiv.appendChild(link2);
  listItem.appendChild(linkDiv);
  movieList.appendChild(listItem);
}

//Textleri temizleme
static ClearInput(){
  movieNameInput.value="";
  movieDirectorInput.value="";
  movieBannerInput.value="";
  movieDateInput.value="";
}

//Filter
static filterItemsUI(filterName, Value) {
  filterName.forEach(function (Name) {
    const text = Name.innerHTML.toLowerCase();
    if (text.indexOf(Value) === -1) {
      Name.parentElement.parentElement.setAttribute("style", "display:none !important");
    } else {
      Name.parentElement.parentElement.setAttribute("style", "display:table-row");
    }
  });
};
//Mesaj
static Message(message, type) {
  const cardBody = document.querySelector(".card-body");
  const messageDiv = document.createElement("div");
  messageDiv.className = `m-3 alert alert-${type}`;
  messageDiv.textContent = message;
  cardBody.appendChild(messageDiv);
  setTimeout(function () {
    messageDiv.remove();
  }, 2500);
};

}