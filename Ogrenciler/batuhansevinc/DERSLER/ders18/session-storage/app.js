// Session Storage
// Seçimler
const add = document.getElementById("add");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");
const addkey = document.getElementById("addkey");
const addvalue = document.getElementById("addvalue");
const deletekey = document.getElementById("deletekey");

// EVENTLER
add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

//FONKSİYONLAR
function addItem(){
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(){
sessionStorage.removeItem(deletekey.value);
}

function clearItems(){
    sessionStorage.clear();
}