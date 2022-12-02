let cardContainer = document.querySelector(".card-container");
console.log(cardContainer);


//ekleme için get
function getJsonFile(){
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((json) => {
        json.map((data) => {
          console.log(data);
          cardContainer.append(createCard(data));
        });
      })
      .catch((err) => console.log(err));


}

getJsonFile(); //when click add button

//destructing
function createCard({name, url1, url2, description}) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add(
    "col-12", "col-md-5", "col-lg-3", "float-start", "d-flex", "justify-content-center", "bg-dark"
  );
  cardDiv.innerHTML = `
            <div
              class="card w-100 "
              >
              <div class="img-container">
                <img
                src="${url1}"
                class="card-img-top"
                alt="..." />
                <div class="overlay">
                  <img class="overlay-img" src="${url2}" alt="">
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-product-header">${name}</h3>
                <p class="card-text">
                  ${description}
                </p>
              </div>
            </div>`;
            
            return cardDiv;
}
