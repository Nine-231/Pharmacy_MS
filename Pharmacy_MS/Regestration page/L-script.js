document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    console.log("User Login Attempt:", { email, password });

    if (email === "test@example.com" && password === "password123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to a dashboard page
    } else {
        // Add shake animation on incorrect login
        const form = document.querySelector(".container");
        form.style.animation = "shake 0.5s ease-in-out";

        alert("Invalid Email or Password!");

        // Remove the animation after it completes
        setTimeout(() => {
            form.style.animation = "";
        }, 500);
    }
});
