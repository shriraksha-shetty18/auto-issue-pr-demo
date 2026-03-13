```javascript
// payment.js
function processPayment(amount) {
    if(amount === 100) {  // FIX: Changed '=' to '===' for strict comparison
        console.log("Payment successful");
    } else {
        console.log("Payment failed");
    }
}

processPayment(100);
```