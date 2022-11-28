// function getTextFile() {
//   fetch("orne.txt") //url,get default değer.
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(err));
// }

// function getJsonFile() {
//   fetch("users.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getJsonFile();

// class Request{
//     get(urL){
//         return new Promise((resolve,reject=>{
//             fetch(urL)
//             .then(response=>response.json())
//             .then(data=>resolve(data))
//             .catch((err)=>reject(err));
//         });
//     }
//     post(url,data){
//         return new Promise((resolve,reject)=>{
//             fetch(url, {
//                 method:'POST',
//                 body:JSON.stringify(data),
//                 headers:{"Content-type":"application/json;"},
//             })
//             .then((response)=>response.json())
//             .then((data)=>resolve(data))
//             .catch((err)=>reject(err));
//         });

//     }
//     put(url,data){

//     }
//     delete(url){
//         return new Promise((resolve,reject)=>{
//             fetch(url,{
//                 methor:"DELETE",
//             })
//             .then((response)=>resolve("Veri silindi",))
//             .catch((err)=>reject(err))
//         });
//     }
// }
// const request=new Request();
// //request.post("url",{userId:999 title:Deneme Title})
// request.post(url,{
//     userId:999,
//     title:"Deneme Title",
// } )
// .then((data)=>console.log(data))
// .catch((data)=>console.log(err));
