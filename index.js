document.getElementById("ContactForm").addEventListener("submit", function (event) {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        event.preventDefault();
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        event.preventDefault();
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required";
        event.preventDefault();
    } else {
        document.getElementById("messageError").textContent = "";
    }
});