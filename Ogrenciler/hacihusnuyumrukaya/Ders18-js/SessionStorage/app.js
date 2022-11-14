// Session Storage
// Seçimler
const add = document.getElementById("add");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");
const addkey = document.getElementById("addkey");
const addvalue = document.getElementById("addvalue");
const deletekey = document.getElementById("deletekey");

// Eventler
add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

// Fonksiyonlar
function addItem() {
  sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem() {
  sessionStorage.removeItem(deletekey.value);
}

function clearItems() {
  sessionStorage.clear();
}
