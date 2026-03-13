// signup.js
function signup(email, password) {
    if(email.includes("@")) {
        // BUG: password length check is missing
        console.log("Account created!");
    } else {
        console.log("Invalid email");
    }
}

signup("test@example.com", "123"); // Should warn about weak password