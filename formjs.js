// script.js
document.getElementById('phone-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var phoneInput = document.getElementById('phone');
    var errorMessage = document.getElementById('error-message');

    var phoneValue = phoneInput.value.trim();
    var phonePattern = /^[0-9]+$/; // Regular expression to check if the input contains only digits

    if (!phonePattern.test(phoneValue)) {
        errorMessage.textContent = 'Please enter a valid phone number (digits only).';
        errorMessage.style.display = 'block'; // Show error message
    } else {
        errorMessage.style.display = 'none'; // Hide error message
        alert('Form submitted successfully!'); // For demonstration purposes
    }
});
