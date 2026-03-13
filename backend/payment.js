```javascript
// payment.js
function processPayment(amount) {
    if(amount === 100) {  // FIX: Use '===' for strict equality comparison
        console.log("Payment successful");
    } else {
        console.log("Payment failed");
    }
}

processPayment(100);
```