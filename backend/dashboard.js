// dashboard.js
function renderDashboard(user) {
    // BUG: missing check if user is null
    console.log("Welcome, " + user.name);
}

renderDashboard(null); // Causes error