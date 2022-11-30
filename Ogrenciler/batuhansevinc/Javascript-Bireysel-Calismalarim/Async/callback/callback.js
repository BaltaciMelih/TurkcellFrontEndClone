console.log("Start");

const login = (username, password, callback) => {
    setTimeout(() => {
        callback ({username: username, email: "batusvnc@outlook.com"})
    },1000);
}

const getPostsByUsername = (username, callback) => 
    setTimeout(() => {
        callback(["Post 1","Post 2","Post 3"])
    },2000)

const getPostDetails = (post, callback) => {
    setTimeout(() => {
        callback("post details");
    },1000)
}

login("batuhanSevinc","123456", user => {
        console.log(user);

        getPostsByUsername(user.username, (posts)=> {
            console.log(posts);

            getPostDetails(posts[0], (details) => {
                console.log(details);
            })
        });
});

console.log("End");
