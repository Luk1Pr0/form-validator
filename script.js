const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using constraint API to check validity of the form
    isValid = form.checkValidity();
    // Style message for error
    if (!isValid) {
        message.textContent = "Please fill out all fields";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return; // If validation fails here, break out of the code
    }
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
    } else {
        passwordsMatch = false;
        message.textContent = "Make sure your passwords match";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = "Succesfully submitted!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    // Submit data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event listeners
form.addEventListener("submit", processFormData);


