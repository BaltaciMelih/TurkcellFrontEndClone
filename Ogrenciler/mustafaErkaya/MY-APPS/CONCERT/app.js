window.addEventListener("keydown", function(e){
    console.log(e); //neden böyle geldi ??
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
// if(e.keyCode == 27){
//     this.close();
// }
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    // key.classList.add("playing");
    key.classList.add("playing");
    // setTimeout(function (params) {
        
    // }, 0.07)
});

function removeTransition(e) {
    // console.log(e);
    if(e.propertyName !== "transform") return; // it's a not transform
    // console.log(this);
    this.classList.remove("playing"); //css Transition süresine göre kaldırma işlemi yapıyor bu fonksiyon

}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
