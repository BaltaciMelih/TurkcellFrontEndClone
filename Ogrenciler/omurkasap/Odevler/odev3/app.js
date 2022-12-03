let data = fetch("db.json")
.then(response=>response.json())
.then(veri=>{
    console.log(veri);
})