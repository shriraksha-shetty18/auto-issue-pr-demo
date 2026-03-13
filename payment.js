// payment.js
function processPayment(amount) {
    if(amount = 100) {  // BUG: '=' instead of '=='
        console.log("Payment successful");
    } else {
        console.log("Payment failed");
    }
}

processPayment(100); // Should succeed, might fail due to bug