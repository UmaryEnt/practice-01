function adder(a, b) {
    return a + b
}

console.log(setTimeout(() => {
    console.log("Test", adder(9, 5))
}, 5000));

