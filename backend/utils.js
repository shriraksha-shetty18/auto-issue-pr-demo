```javascript
// utils.js
function findMax(arr) {
    if (arr.length === 0) {
        // For an empty array, it's common to return undefined, throw an error,
        // or return Number.NEGATIVE_INFINITY as there is no maximum.
        // Given the original code returned 0, returning undefined is a more
        // semantically correct choice for "no maximum found".
        return undefined; 
    }
    let max = Number.NEGATIVE_INFINITY; // FIX: Initialize max to the smallest possible number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```