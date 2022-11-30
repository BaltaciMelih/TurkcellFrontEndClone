// function getTextFile() {
//   fetch("ornek.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getTextFile();

function getTextFile() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
getTextFile();
