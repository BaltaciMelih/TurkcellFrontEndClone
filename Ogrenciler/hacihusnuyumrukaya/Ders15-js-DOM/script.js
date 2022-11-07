let value;

// value=document.all;
// value=document.body;
// value=document.head;
//  value=document.location;
// value=document.URL;
// value=document.scripts[0];
// value=document.links;
// value=document.links[0].getAttribute("class");
// value=document.links[document.links.length-1].classList;
// value=document.links[0].className;

//Id ile html element seçme
// value=document.getElementById("link3");
//Class ile html element seçme
// value=document.getElementsByClassName("link")[2].getAttribute("id");
//Tag ile html element seçme
// value=document.getElementsByTagName("a");
//Query Selector ile html element seçme
// value=document.querySelector("#link3").className;

// value=document.querySelector("#link3");
// value.style.border="5px solid red";
// value.className="btn btn-success";
// value.textContent="Sıkça Sorulan Sorular";


// value=document.querySelector("a:nth-child(2)");
// value=document.querySelector("a:first-child");
// value=document.querySelector("a:last-child");

 value=document.querySelectorAll("a:nth-child(odd)");

 value.forEach(function(e){
    e.style.background="#ff5648";
    e.style.color="#fff";
    e.style.fontSize="24px";
 })

console.log(value);