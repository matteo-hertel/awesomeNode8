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

async function main() {
    const h = await hello();
    const w = await world();
    console.log(`${h} ${w}`);
}

main();