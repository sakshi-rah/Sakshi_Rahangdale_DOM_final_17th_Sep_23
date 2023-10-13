//user name js
document.addEventListener("DOMContentLoaded", function () {
    const userName = document.getElementById("user-name");
    const logoutButton = document.getElementById("logout");

    // Check if the user is logged in by checking local storage.
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        // Display the user's name on the home page.
        userName.textContent = loggedInUser;
        
    } else {
        // If the user is not logged in, redirect to the login page.
        window.location.href = "./../Pages/UserEntery/login.html";
    }

    // Handle logout
    logoutButton.addEventListener("click", function () {
        // Clear the user's data from local storage.
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("userPassword");

        // Redirect to the login page.
        window.location.href = "./../Pages/login.html";
    });
});