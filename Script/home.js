// home.js

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

//user name js
document.addEventListener("DOMContentLoaded", function () {
    const userName = document.getElementById("user-name");

    // Check if the user is logged in by checking local storage.
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        // Display the user's name on the home page.
        userName.textContent = loggedInUser;
        
    } 

    
});


//"https://eduonixjsproject.netlify.app/"