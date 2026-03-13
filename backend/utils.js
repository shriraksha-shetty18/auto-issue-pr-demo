// utils.js
function findMax(arr) {
    let max = 0; // BUG: Should be Number.NEGATIVE_INFINITY for general arrays
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Test
console.log(findMax([-10, -5, -20])); // Should be -5, but prints 0