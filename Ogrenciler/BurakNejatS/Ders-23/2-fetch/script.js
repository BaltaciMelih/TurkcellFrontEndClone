function getTextFile(){
    fetch("ornek.txt")
    .then((response)=> response.text())
    .then((data)=> console.log(data))
    .then((err)=> console.log(err));
}

getTextFile();


// function getTextFile(){
//     fetch("users.json")
//     .then((response)=> response.text())
//     .then((data)=> console.log(data))
//     .then((err)=> console.log(err));
// }

// getTextFile();
