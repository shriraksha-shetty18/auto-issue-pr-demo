// app.js
function addNumbers(a, b) {
    // BUG: accidentally using subtraction instead of addition
    return a - b;
}

console.log("Add 2 + 3 =", addNumbers(2, 3)); // Should be 5, but will print -1