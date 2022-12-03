let cardContainer = document.querySelector(".card-container");
let productName = document.getElementById("name");
let productDescription = document.querySelector("#description");
let productUrl1 = document.querySelector("#url1");
let productUrl2 = document.querySelector("#url2");
let form = document.querySelector("#form");
let container = document.querySelector("#productContainer");
class Request {
  constructor(url) {
    this.url = url;
    const products = [];
  }

  get() {
    this.products = [];
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        // .then((data) => resolve(data))
        .then((json) => {
          json.map((data) => {
            this.products.push(data);
            cardContainer.append(createCard(data));
          });
        })
        .catch((err) => reject(err));
    });
    return response;
  }

  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      // mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const resData = await response.json();
    return resData;
  }

  put(id, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "DELETE",
      })
        .then((response) => resolve("Veri Silme Başarılı", response))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request("http://localhost:3000/product");

request
  .get()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

let productsArr = request.products;
console.log(productsArr);

function date() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  date = `${day}-${month}-${year}  ${hour}.${minute}`;
  return date;
}

function deleteProduct(e) {
  e.preventDefault();
  const htmlElement = e.target;
  if (htmlElement.classList.contains("delete-btn")) {
    const deletingId = htmlElement.parentElement.parentElement.id;
    request
      .delete(Number(deletingId)) //id stirng olarak alındığından numbera çevirdim.
      .then((msg) => console.log(msg))
      .catch((err) => console.log(err));
  }
}

// function editProduct(e){
//   e.preventDefault();
//   const htmlElement = e.target;
//   if (htmlElement.classList.contains("edit-btn")){
//     const editName = productName
//     const editDescription = productDescription
//     const editUrl1 = productUrl1
//     const editUrl2 = productUrl2
//     const editCard = htmlElement.parentElement.parentElement;
//     const editId = htmlElement.id;
//     const editDate = Date();

//     request.get()
//     .then((data) => {
//       data.forEach((element) => {
//         console.log("foreach");
//         if (element.id == editId) {
//           console.log("if")
//           editName.value = element.name;
//           editDescription.value = element.description;
//           editUrl1.value = element.url1;
//           editUrl2.value = element.url2;
//         }
//       });
//     }
//     )
//     .catch((err) => console.log(err));

//     form.addEventListener("submit", function(e) {
//       request.put(editId, {
//         name: editName.value,
//         description: editDescription.value,
//         url1: editUrl1.value,
//         url2: editUrl2.value
//       })
//       .then((data) => {
//         editCard.innerHTML = `
//         <div
//               class="card w-100 "
//               id= "${editId}"
//               >
//               <div class="img-container">
//                 <img
//                 src="${editUrl1}"
//                 class="card-img-top"
//                 alt="..." />
//                 <div class="overlay">
//                   <img class="overlay-img" src="${url2}" alt="">
//                 </div>
//               </div>
//               <div class="card-body">
//                 <h3 class="card-product-header">${editName}</h3>
//                 <p class="card-text">
//                   ${editDescription}
//                 </p>
//                 <span class="float-end">Tarih: <br/> ${editDate}</span>

//                 <button id= "${editId}" type="button" class="btn btn-dark delete-btn">Delete</button>
//                 <button id= "${editId}" type="button" class="btn btn-light edit-btn">Edit</button>

//               </div>
//             </div>
//         `;
//       })
//     })

//   }
// }

//events
cardContainer.addEventListener("click", deleteProduct);
//cardContainer.addEventListener("click", editProduct);

// {
//   e.preventDefault();
//   const htmlElement = e.target;
//   if (htmlElement.classList.contains("delete-btn")) {
//     const deletingId = htmlElement.parentElement.parentElement.id;
//     request
//       .delete(Number(deletingId)) //id stirng olarak alındığından numbera çevirdim.
//       .then((msg) => console.log(msg))
//       .catch((err) => console.log(err));
//   }

//   if (htmlElement.parentElement.parentElement.classList.contains("card")) {
//     const forwardingId = htmlElement.parentElement.parentElement.id;
//     //ürüne tıklandığında o ürüne ait sayfaya yönlendirir

//     window.setTimeout(function () {
//       location.href = "./product.html";
//     }, 450);

//     //ekrana bilgileri yazdıralım
//     productsArr.map((element) => {
//       if (element.id == forwardingId) {
//         const newProduct= {
//           productName: element.name,
//           productDescription: element.description,
//           productPageUrl1: element.url1,
//           productPageUrl2: element.url2

//         };
//         // const productPageName = element.name;
//         // const productPageDescription = element.description;
//         // const productPageUrl1 = element.url1;
//         // // const productPageUrl2 = element.url2;

//         // console.log(loadProductPage(newProduct)+ "temp");
//       }
//       return
//     });
//   }
// });

//form submit edildiğinde yeni ürün eklensin
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newPost = {
    id: Math.floor(Math.random() * 1000),
    name: `${document.getElementById("name").value}`,
    description: `${document.getElementById("description").value}`,
    url1: `${document.getElementById("url1").value}`,
    url2: `${document.getElementById("url2").value}`,
    date: date(), ///
  };
  request.post(newPost).then((data) => console.log(data));
});

//ekrana json verilerini bastırma
function createCard({ id, name, description, url1, url2, date }) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add(
    "col-12",
    "col-md-5",
    "col-lg-3",
    "float-start",
    "d-flex",
    "justify-content-center"
  );
  cardDiv.innerHTML = `  
            <div
              class="card w-100 "
              id= "${id}"
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
                <h3 class="card-product-header">${name}
                <button
                  type="button"
                  class="btn btn-light"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  Details
                </button>
                </h3>
              
                <!-- Modal -->
                
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Product
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                         <div id="productContainer" class="p-container">
                            <div class="row">
                              <div class="col product-img-col">
                                <img
                                  class="product-img"
                                  src="${url1}"
                                  alt="" />
                              </div>
                            </div>

                            <div class="row">
                              <div class="col product-header-div">
                                <h3>${name}</h3>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col product-text-div">
                                <p class="product-text">
                                  ${description}
                                </p>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col product-header-div">
                                <h4>Colors</h4>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col product-text-div">
                                <div class="color1"></div>
                                <div class="color2"></div>
                                <div class="color3"></div>
                                <div class="color4"></div>
                                <div class="color5"></div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col product-text-div">
                                <button class="btn btn-warning ">Add to Chart</button>
                              </div>
                            </div>
                          </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div>
              
                <span class="float-end">Tarih: <br/> ${date}</span>
                <button id= "${id}" type="button" class="btn btn-dark delete-btn">Delete</button>
                <button id= "${id}" type="button" class="btn btn-light edit-btn">Edit</button></div>
                
              </div>
            `;

  return cardDiv;
}

// function loadProductPage(
//   {productPageName,
//   productPageDescription,
//   productPageUrl1,
//   productPageUrl2}
// ) {
//     console.log(productPageName);
//   let productPageContainer = document.createElement("div");
//   productPageContainer.classList.add("container");
//   productPageContainer.innerHTML = `
//     <div class="row">
//         <div class="col product-img-col">
//           <img
//             class="product-img"
//             src="https://res.cloudinary.com/castlery/image/private/w_900,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1645672292/crusader/variants/50440749-AM4001/Madison-Right-Chaise-Sectional-Sofa-Bisque-Angle.jpg"
//             alt="" />
//         </div>
//       </div>

//       <div class="row">
//         <div class="col product-header-div">
//           <h3>Product</h3>
//         </div>
//       </div>
//       <div class="row">
//         <div class="col product-text-div">
//           <p class="product-text">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
//             labore modi placeat magnam, corporis consectetur?
//           </p>
//         </div>
//       </div>
//       <div class="row">
//         <div class="col product-header-div">
//           <h4>Colors</h4>
//         </div>
//       </div>

//       <div class="row">
//         <div class="col product-text-div">
//           <div class="color1"></div>
//           <div class="color2"></div>
//           <div class="color3"></div>
//           <div class="color4"></div>
//           <div class="color5"></div>
//         </div>
//       </div>
//     `;

//     console.log(productPageContainer);
//     container.append(productPageContainer);
// }
