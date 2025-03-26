document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;

    console.log("User Registered:", { name, email, password, dob });

    // Add shake animation on form submission
    const form = document.querySelector(".container");
    form.style.animation = "shake 0.5s ease-in-out";

    alert("Registration Successful!");

    // Remove the animation after it completes
    setTimeout(() => {
        form.style.animation = "";
    }, 500);
});
