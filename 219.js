// #1) Create a promise that resolves in 4 seconds and returns "success" string
const prom4Sec = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000)
})