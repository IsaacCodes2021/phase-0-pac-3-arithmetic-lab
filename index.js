function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return n += 1;
}

function decrement(n) {
    return n -= 1; 
}

function makeInt(n = '10') {
    return parseInt(n, 10);
}

function preserveDecimal(n = '32.332') {
    return parseFloat(n, 10)
}
//console.log(add(5, 6));