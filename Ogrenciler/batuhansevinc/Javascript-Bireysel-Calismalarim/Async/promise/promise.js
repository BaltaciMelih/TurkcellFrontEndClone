// console.log("start");

// const serverStatus = false;

// const login = (username, password, successFn, errorFn) => {
//     setTimeout(() => {
//         if(serverStatus){
//             successFn( { username: username, email: "batusvnc@outlook.com"} )
//         } else {
//             errorFn("Server kapalı");
//         }
        
//     })
// }

// const getPostsByUsername = (username, successFn) => 
//     setTimeout(() => {
//         successFn(["Post 1","Post 2","Post 3"])
//     },2000)

// const getPostDetails = (post, successFn) => {
//     setTimeout(() => {
//         successFn("post details");
//     },1000)
// }

// login("batuhanSevinc","123456", user => {
//         console.log(user.username);

//         getPostsByUsername(user.username, (posts)=> {
//             console.log(posts);

//             getPostDetails(posts[0], (details) => {
//                 console.log(details);
//             })
//         });
// }, error);
// function error(msg){
//  console.log(msg);
// }

// console.log("End");
const serverStatus = true;
const promise = new Promise((resolve,reject) => {  // resolve -> başarılı olduğunda çalışacak fonksiyon.. Reject başarısız olduğunda çalışacak olan fonksiyon.
    setTimeout(() =>{
        if( serverStatus){
            resolve({username: "batuhanSevinc"});
        } else {
            reject("login error");
        }
    }) 
}); 

promise.then(user => { // bu metod ile resolve den gönderilecek değeri alabiliyoruz.
    console.log(user);
})
.catch(error =>{
    console.log(error);
})
