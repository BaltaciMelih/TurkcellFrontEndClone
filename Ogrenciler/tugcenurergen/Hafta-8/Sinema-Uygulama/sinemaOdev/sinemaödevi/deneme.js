const areacontrol = document.getElementsByClassName("container");
areacontrol.addEventListener("click", function(e){
    if(e.target.className === "chair"){
        console.log(e.target);
    }
});
