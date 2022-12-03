const petBox = document.querySelector(".pet-box");
let petImg = document.querySelector("#pet-img");
let petName = document.querySelector(".pet-name");
let petType1 = document.querySelector(".pet-type-1");
let petType2 = document.querySelector(".pet-type-2");
let loc = document.querySelector(".pet-location");
let time = document.querySelector(".advert-time");
let Id = document.querySelector("#petId");
const searchBox = document.querySelector("#searchBox");
const formNewPet = document.querySelector("#formNewPet");
const deleteBtn = document.querySelector("#delete-btn");
const clearFilterButton = document.querySelector(".clear-filter");
const saveEl = document.querySelector("#saveEl");

//Event Listeners
formNewPet.addEventListener("submit", formValue);
searchBox.addEventListener("input", filterLocation);

//Lokasyona göre Arama//*
function filterLocation(e) {
  let location = document.querySelectorAll(".pet-location");
  const search = searchBox.value.toLowerCase();

  location.forEach((location) => {
    location.parentElement.style.display = "block";
    if (!location.innerHTML.toLowerCase().includes(search)) {
      location.parentElement.style.display = "none";
    }
  });

  console.log(search);
}
class Request {
  async getPet(url, query) {
    if (query) {
      const res = await fetch(`${url}${query}`);
      if (!res.ok) {
        throw new Error(`Bir hata oluştu ${res.status}`);
      }
      const data = await res.json();
      return data;
      createPetUı(data);
    } else {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Bir hata oluştu ${res.status}`);
      }
      const data = await res.json();
      return data;
      createPetUı(data);
    }
  }

  async delete(id) {
    const response = await fetch(`${"http://localhost:3000/pets/"}/${id}`, {
      method: "DELETE",
    });
    const responseFood = await response.json();
    return responseFood;
  }

  //post
  async postPet(data) {
    const response = await fetch("http://localhost:3000/pets/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const resData = await response.json();
    return resData;
  }

  //put
  async put(id, data) {
    const response = await fetch(`"http://localhost:3000/pets/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const resData = await response.json();
    return resData;
  }
}

const request = new Request("http://localhost:3000/pets/");
request
  .getPet("http://localhost:3000/pets")
  .then((data) =>
    data.forEach(function (pet) {
      createPetUı(pet);
    })
  )
  .catch((err) => console.log(`Hata: ${err.message}`));

//createPetUı
const createPetUı = (pet) => {
  const petName = pet.name;
  const petImg = pet.img;
  const petType1 = pet.type1;
  const petType2 = pet.type2;
  const loc = pet.location;
  const petId = pet.id;
  const time = pet.advert;
  const petContent = document.createElement("div");
  petContent.className = "pet-content col-md-4 col-lg-3 ";
  // petContent.classList.add("pet-content");
  petContent.innerHTML += `
  <img alt="${petName}"
  class="rounded-4 w-75 h-50"
  id="pet-img"
  src="${petImg}"
/>
  
  <h5 class="pet-name ">${petName}</h5>
  <p class="pet-type-1 fw-bold fs-5">
    Cins: ${petType1},<span class="pet-type-2 fw-lighter">${petType2}</span>
  </p>
<p class="pet-location fw-bold  border-1 border-bottom border-secondary opacity-75">Location: ${loc}</p>
  <p class="advert-time"><b>Published Time: <small>${time}</small> </b></p>
    <button class="btn adopt-btn" onClick="modal()">Adopt</button>
   <div class="row">
   <button class="btn col-5 ${petId} " id="delete-btn" onClick="deletePet(${petId})">Remove</button>
   <button class="btn col-5 edit-btn" id="edit-btn" onClick="editPet(${petId})">Edit</button></div>

 </div>   
    `;
  petBox.appendChild(petContent);
};

var publishedTime = () => {
  var advert = new Date();
  var date = advert.getDate();
  var mounth = advert.getMonth();
  var year = advert.getFullYear();
  var publishedTime = date + "/" + mounth + "/" + year;
  return publishedTime;
};

//Formdan Yeni Peti Alma
function formValue(e) {
  const pet = {
    name: `${document.querySelector("#pet-name").value}`,
    type1: `${document.querySelector("#pet-type-1").value}`,
    type2: `${document.querySelector("#pet-type-2").value}`,
    location: `${document.querySelector("#pet-location").value}`,
    img: `${document.querySelector("#pet-img").value}`,
    advert: `${publishedTime()}`,
  };

  request
    .postPet(pet)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  e.preventDefault();
  console.log(pet);
}

//silme
function deletePet(e) {
  console.log(e);
  request
    .delete(e)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function clearView() {
  document.querySelectorAll(".pet-content").forEach((el) => {
    el.remove();
  });
}

//edit
let editPets;
function editPet(editId) {
  request
    .getPet("http://localhost:3000/pets")
    .then((responseJson) => {
      responseJson.forEach(function (pet) {
        if (editId == pet.id) {
          editPets = pet.id;
          document.querySelector("#pet-name").value = pet.name;
          document.querySelector("#pet-type-1").value = pet.type1;
          document.querySelector("#pet-type-2").value = pet.type2;
          document.querySelector("#pet-location").value = pet.location;
          document.querySelector("#pet-img").value = pet.img;
        }
      });
    })
    .catch((err) => console.log(err));
  console.log(editPets);
  saveEl.style.innerHTML = "Edit";
  request
    .put(editPets, {
      name: `${document.querySelector("#pet-name").value}`,
      type1: `${document.querySelector("#pet-type-1").value}`,
      type2: `${document.querySelector("#pet-type-2").value}`,
      location: `${document.querySelector("#pet-location").value}`,
      img: `${document.querySelector("#pet-img").value}`,
      advert: `${publishedTime()}`,
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

//Kategoriye göre filtre
let filterPet = () => {
  let type1 = "";
  let type2 = "";
  if (document.querySelector("input[name='pet-type-1']:checked")) {
    type1 = document.querySelector("input[name='pet-type-1']:checked").value;
  }
  if (document.querySelector("input[name='pet-type-2']:checked")) {
    type2 = document.querySelector("input[name='pet-type-2']:checked").value;
  }

  if (type1 == "") {
    request
      .getPet("http://localhost:3000/pets/", `?type2=${type2}`)
      .then(clearView())
      .then((data) =>
        data.forEach(function (pet) {
          createPetUı(pet);
        })
      )
      .catch((err) => console.log(`Hata: ${err.message}`));
  } else if (type2 == "") {
    request
      .getPet("http://localhost:3000/pets/", `?type1=${type1}`)
      .then(clearView())
      .then((data) =>
        data.forEach(function (pet) {
          createPetUı(pet);
        })
      )
      .catch((err) => console.log(`Hata: ${err.message}`));
  } else {
    request
      .getPet("http://localhost:3000/pets/", `?type1=${type1}&type2=${type2}`)
      .then(clearView())
      .then((data) =>
        data.forEach(function (pet) {
          createPetUı(pet);
        })
      )
      .catch((err) => console.log(`Hata: ${err.message}`));
  }
};

let radiobtns = document.querySelectorAll("input[name='pet-type-1']");
radiobtns.forEach((radiobtn) => {
  radiobtn.addEventListener("change", filterPet);
});

function modal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "flex";
}
const formClose = document.getElementById("form-close");
formClose.addEventListener("click", () => {
  modal.style.display = "none";
});

clearFilterButton.addEventListener("click", (e) => {
  e.preventDefault();
  request
    .getPet("http://localhost:3000/pets")
    .then(clearView())
    .then((data) =>
      data.forEach(function (pet) {
        createPetUı(pet);
      })
    )
    .catch((err) => console.log(`Hata: ${err.message}`));
});

let radiobtn2 = document.querySelectorAll("input[name='pet-type-2']");
radiobtn2.forEach((radiobtn) => {
  radiobtn.addEventListener("change", filterPet);
});
