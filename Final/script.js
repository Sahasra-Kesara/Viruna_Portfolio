
// Get references to form elements
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

// Attach an event listener to the submit button
submitButton.addEventListener("click", function() {
    // Get values from input fields
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Validate form data (you can add more validation logic here)
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate submitting the form (you can replace this with actual form submission logic)
    alert("Form submitted!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

    // Clear form fields
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
});



