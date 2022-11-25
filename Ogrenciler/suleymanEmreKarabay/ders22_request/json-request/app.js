document.querySelector("#getButton").addEventListener("click", getAllData);

function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    let list = document.querySelector("#employees");
  };
}
