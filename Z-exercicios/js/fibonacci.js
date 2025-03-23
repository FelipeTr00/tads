


console.time("Execution Time")

function fib(n) {
    let a = BigInt(0), b = BigInt(1);
    for (let i = BigInt(0); i < n; i++) {
        [a, b] = [b, a + b]
    }
    return a.toString();
}

let result = fib(1000000)
console.log(result);

console.timeEnd("Execution Time")