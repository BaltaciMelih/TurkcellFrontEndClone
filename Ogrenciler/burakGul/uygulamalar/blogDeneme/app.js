const row = document.querySelector('#row')
function getApi(){
    return new Promise((resolve, reject) =>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((err)=> reject(err))
})
}
getApi();

function blog(){
    const col = document.createElement('div');
    col.className 
}


