```javascript
// signup.js
function signup(email, password) {
    if (email.includes("@")) {
        if (password.length >= 8) { // Added password length check
            console.log("Account created!");
        } else {
            console.log("Password is too short. Please use at least 8 characters.");
        }
    } else {
        console.log("Invalid email");
    }
}

signup("test@example.com", "123"); // Should warn about weak password
```