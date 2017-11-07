function hello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello");
        }, 1000);
    })
}
function world() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("world");
        }, 500);
    })
}

/**
 * Promise 
 */

function chain() {
    return Promise.all([hello(), world()]);
}

chain().then(data => {
    console.log(data.join(" "));
})