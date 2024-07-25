 // Function to generate random CAPTCHA text
 function generateCaptcha() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var length = 5;
    var captcha = "";
    for (var i = 0; i < length; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

// Function to initialize CAPTCHA on page load
function initialize() {
    var captchaText = generateCaptcha();
    document.getElementById("captchaText").textContent = captchaText;
    document.getElementById("captchaText").setAttribute("data-captcha", captchaText); // Store in data attribute
}

// Function to validate CAPTCHA
function validateCaptcha() {
    var userInput = document.getElementById("captchaInput").value.trim();
    var captchaText = document.getElementById("captchaText").getAttribute("data-captcha");

    if (userInput == captchaText) {
        alert("CAPTCHA verification successful!");
        return true; // Prevent form submission
    } else {
        alert("CAPTCHA verification failed. Please try again.");
        return false; // Prevent form submission
    }
}

// Initialize CAPTCHA on page load
document.addEventListener("DOMContentLoaded", function() {
    initialize();
});
