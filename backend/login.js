// login.js
function login(username, password) {
    if (username = "admin" && password = "1234") {  // BUG: used assignment '=' instead of comparison '=='
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }
}

// Test
login("admin", "1234"); // Should login, but will always fail or cause error