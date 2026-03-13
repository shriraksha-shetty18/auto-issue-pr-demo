```javascript
function processPayment(amount) {
    // Fix: Ensure amount is strictly a positive number for a successful payment.
    // The original logic implicitly allowed non-numeric types (e.g., strings like "100") 
    // that could be coerced to numbers, leading to incorrect "Payment successful" messages.
    // A payment is successful only if it's a valid number and greater than zero.
    if (typeof amount === 'number' && !isNaN(amount) && amount > 0) {
        console.log("Payment successful");
    } else {
        console.log("Payment failed");
    }
}

processPayment(100);
```