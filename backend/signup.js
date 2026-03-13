```javascript
// signup.js
function signup(email, password) {
    if (email.includes("@")) {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        // Common special characters, adjust regex as needed for your application's policy
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);

        let passwordErrors = [];

        if (password.length < minLength) {
            passwordErrors.push(`Password must be at least ${minLength} characters long.`);
        }
        if (!hasUppercase) {
            passwordErrors.push("Password must contain at least one uppercase letter.");
        }
        if (!hasLowercase) {
            passwordErrors.push("Password must contain at least one lowercase letter.");
        }
        if (!hasNumber) {
            passwordErrors.push("Password must contain at least one number.");
        }
        if (!hasSpecialChar) {
            passwordErrors.push("Password must contain at least one special character (e.g., !@#$%^&*).");
        }

        if (passwordErrors.length === 0) {
            console.log("Account created!");
        } else {
            console.log("Weak password:");
            passwordErrors.forEach(error => console.log(`- ${error}`));
        }
    } else {
        console.log("Invalid email");
    }
}
```