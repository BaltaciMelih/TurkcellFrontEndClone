//Promise sonucu olumlu veya olumsuz gelecekte belli olacak bir işlemi ifade eder, 
//bir kaynağa bağlanıp veri almak gibi. Kaynağa bağlanıp verinin alınması ne kadar 
//süreceği bilinmediği için bu tarz işlemler Promise olarak oluşturulur. Bu işlemlere 
//Javascript'te asynchronous operations (eş zamanlı olmayan işlemler) denir.
console.log("start");
const serverStatus = true;
//servere giden sorguların hangisinin hangisinden sonra yapılması için kullanılan yöntem Promise
const login = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(serverStatus) {
                resolve( { username: username, email: "aaaa" } )
            } else {
                reject("server is offline");
            }
        },1000);
    })            
}

const getPostsByUsername = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post 1","post 2","post 3"]);
        }, 2000)
    })
}

const getPostDetails = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("post details");
        }, 1000)
    })           
}

// login("haci","12345", user => {
//     console.log(user.username);
    
//     getPostsByUsername(user.username, (posts) => {
//         console.log(posts);

//         getPostDetails(posts[0], (details) => {
//             console.log(details);
//         })
//     });

// });

login("haci","12345")
    .then(user => {
        console.log(user);
        return getPostsByUsername(user.username);
    })
    .then(posts => {
        console.log(posts);
        return getPostDetails(posts[0]);
    })
    .then(details => {
        console.log(details);
    }).catch(err => {
        console.log(err);
    })


console.log("end");
