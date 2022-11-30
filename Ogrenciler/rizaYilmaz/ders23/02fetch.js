function getTextFile(){
    fetch("02fetch.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
getTextFile();

function getJsonFile(){
    fetch("02fetch.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getJsonFile();