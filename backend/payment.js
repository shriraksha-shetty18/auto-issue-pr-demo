function processPayment(amount) {
    if (amount > 0) {  
        console.log("Payment successful");
    } else {
        console.log("Payment failed");
    }
}

processPayment(100);