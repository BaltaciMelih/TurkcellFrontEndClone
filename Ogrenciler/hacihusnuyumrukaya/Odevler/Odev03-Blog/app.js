//Elements
const foodCard = document.querySelector(".foodCard");
const foodForm = document.getElementById("foodForm");
const foodName = document.getElementById("foodName");
const foodContent = document.getElementById("foodContent");
const authorName = document.getElementById("author");
const category = document.getElementById("category");
const foodImage = document.getElementById("foodImage");
const addFoods = document.getElementById("addFoods");
const changedFoods = document.getElementById("changedFoods");
const filterCategory = document.getElementById("filterCategory");
const filterFood = document.getElementById("filterFood");

//Events
eventListeners();
function eventListeners() {
foodForm.addEventListener("submit", addFood);
changedFoods.addEventListener("click",changedFood);
filterCategory.addEventListener("change", filterCategoryfunc);
filterFood.addEventListener("keyup", filterFoodfunc);
}

class Request {
  constructor(url) {
    this.url = url;
  }
  async get(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Yemekler Alınamadı. ${res.status}`);
      }
      const responseFood = await response.json();
      return responseFood;
  }
  async post(food) {
    const response = await fetch(this.url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(food),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseFood = await response.json();
    return responseFood;
  }
  async put(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
     const responseFood = await response.json();
     return responseFood;
  }

  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
      const responseFood = await response.json();
      return responseFood; 
  }
}

const request = new Request("http://localhost:3000/foods/");
//Yemek verilerini alma ve uı a getirme
foodUI();
function foodUI(){
  request
    .get("http://localhost:3000/foods")
    .then((responseJson)=>{
   responseJson.forEach(function(object){
      let metin=object.foodContent;
      metin=metin.substring(0,85);
    foodCard.innerHTML += ` 
      <div class="card m-2 col-sm-3">
        <img src="${object.foodImage}" class="foodImage card-img-top" alt="..." height="300px">
        <div class="card-body">
        <span class="foodName fs-4">${object.foodName}</span>
          <h6 class="category">${object.category}</h6>
          <p class="foodContent" >${metin}.....</p>
          <div class="authorName text-end">${object.authorName}</div>
          <div class="date text-end">${object.date}</div>
          <a href="#popup1" id="foodDetails" onClick="Popup(${object.id})" class="btn btn-primary mt-3  button border border-dark"  href="#">Yemek Detay</a>
          <div class="text-right float-md-end mt-3">
            <a href="#" class="change-item" onClick="changedFoodIcon(${object.id})"><i class="bi bi-sticky-fill"></i>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-sticky-fill text-primary " viewBox="0 0 16 16">
                <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
              </svg>
            </a>
            <a href="#" class="delete-item" onClick="deleteFood(${object.id})"><i class='bi bi-x-circle-fill'></i>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-circle-fill text-primary" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>     
             `;
       })
    })
    .catch((err) => console.log(err));
}

//Yeni yemek ekleme 
function  addFood(e) {
     let tarih=new Date();
    const newFood = {
      foodName: `${foodName.value}`,
      foodContent: `${foodContent.value}`,
      authorName: `${authorName.value}`,
      category: `${category.value}`,
      foodImage: `${foodImage.value}`,
      date: `${tarih.getDate()}/${tarih.getMonth()+1}/${tarih.getFullYear()}-${tarih.getHours()}:${tarih.getMinutes()}`,
    };

      request
      .post(newFood)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    e.preventDefault();
}

//Seçilen yemeği sildirme
function  deleteFood(removeId) {
       request
        .delete(removeId)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}

//Film Güncelleme Buton
function  changedFood(e) {
    let tarih=new Date();
         request
          .put(removeFoodIdChanged,{
           foodName: `${foodName.value}`,
           foodContent: `${foodContent.value}`,
           authorName: `${authorName.value}`,
           category: `${category.value}`,
           foodImage: `${foodImage.value}`,
           date: `${tarih.getDate()}/${tarih.getMonth()+1}/${tarih.getFullYear()}-${tarih.getHours()}:${tarih.getMinutes()}`,
          })
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
          e.preventDefault();
}

//Film Güncelleme verileri textlere aktarma
let removeFoodIdChanged;
function  changedFoodIcon(changedFoodId) {
    request
      .get("http://localhost:3000/foods")
      .then((responseJson)=>{
    responseJson.forEach(function(object){
          if(changedFoodId==object.id)
          {
            removeFoodIdChanged=object.id;
            foodName.value=object.foodName;
            foodContent.value=object.foodContent;
            authorName.value=object.authorName;
            category.value=object.category;
            foodImage.value=object.foodImage;
          }
        })
      })
      .catch((err) => console.log(err));
     addFoods.style = "display:none";
     changedFoods.style.display="inline-block";
  }

//Kategoriye göre filtreleme
function filterCategoryfunc(e) {
      const filterCategory = document.querySelectorAll(".category");
      const filterValue = e.target.value.toLowerCase();
      filterCategoryUI(filterCategory, filterValue);
}

function filterCategoryUI(filterCategory, filterValue) {
    filterCategory.forEach(function (category) {
        const text = category.innerHTML.toLowerCase();
        if(filterValue=="seciniz"){
          category.parentElement.parentElement.setAttribute("style", "display:table-row");
        }
        else{
          if (text.indexOf(filterValue) === -1) {
            category.parentElement.parentElement.setAttribute("style", "display:none !important");
          } else {
            category.parentElement.parentElement.setAttribute("style", "display:table-row");
          }
        }
      });
};

//Yemek Adına göre filtreleme
function filterFoodfunc(e) {
  const filterFood = document.querySelectorAll(".foodName");
  const filterValue = e.target.value.toLowerCase();
  filterFoodUI(filterFood, filterValue);
}
function filterFoodUI(filterFood, filterValue) {
  filterFood.forEach(function (category) {
      const text = category.innerHTML.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            category.parentElement.parentElement.setAttribute("style", "display:none !important");
        } else {
            category.parentElement.parentElement.setAttribute("style", "display:table-row");
        }
    });
};

//Popup UI kısmı
function Popup(foodId){
  request
      .get("http://localhost:3000/foods")
      .then((responseJson)=>{
    responseJson.forEach(function(object){
          if(foodId==object.id)
          {
              const foodDetails=document.querySelector(".popup");
              foodDetails.innerHTML =`
              <a class="close" href="#">&times;</a>
              <h2 class="text-center">${object.foodName}</h2>
              <div class="content">
              <div class="d-flex flex-wrap">
              <div class="col-md-4 me-3">
              <img src="${object.foodImage}" class="foodImage card-img-top" alt="..." height="300px" width="250px">
              </div>
              <div class="col-md-7">
              <h6 class="category">${object.category}</h6>
              <p class="foodContent">${object.foodContent}</p>
              </div>
              </div>
              <div class="authorName text-end">${object.authorName}</div>
              <div class="date text-end">${object.date}</div>
              </div>
                `;
          }
        })
      })
      .catch((err) => console.log(err));
}