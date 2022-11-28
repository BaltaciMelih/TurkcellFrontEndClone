function getTextFile(){

  fetch("ornek.txt") //get isteği //fetch aslında bize promise döner
    .then((response) => response.text()) //response text i retrun etmiş olduk
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
getTextFile();


function getJsonFile(){

  fetch("users.json") //get isteği //fetch aslında bize promise döner
    .then((response) => response.json()) //response text i retrun etmiş olduk
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
getJsonFile();