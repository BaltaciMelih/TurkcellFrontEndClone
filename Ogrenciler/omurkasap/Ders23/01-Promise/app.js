function x2(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number * 2);
            } else {
                reject(new Error("Lütfen Bir Sayı Girin"));
            }
        }, 2000);
    }
    );
};

x2(5)
    .then((res2) => console.log(res2))
    .catch((err) => console.log(err));