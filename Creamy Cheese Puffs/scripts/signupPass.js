// Script for password visibility toggle (using specific signup classes)
const passwordFields = document.querySelectorAll('.password-input-container-signup input[type="password"]');
const toggleIcons = document.querySelectorAll('.password-toggle-icon-signup i');

toggleIcons.forEach((icon, index) => {
    icon.parentElement.addEventListener('click', function() {
        const input = passwordFields[index];
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
});

// Script for file input display
const fileInputs = document.querySelectorAll('.file-input');
fileInputs.forEach(input => {
    input.addEventListener('change', function(e) {
        const fileName = e.target.files[0] ? e.target.files[0].name : '';
        const displaySpan = input.closest('.file-upload-wrapper').querySelector('.file-name-display');
        if (displaySpan) {
            displaySpan.textContent = fileName ? `Selected: ${fileName}` : ''; // Show selected file name
        }
         // Optional: Style the button differently when a file is selected
         const uploadButton = input.closest('.file-upload-wrapper').querySelector('.file-upload-button');
         if(uploadButton) {
             uploadButton.classList.toggle('file-selected', !!fileName);
         }
    });
});

// Script for basic password confirmation check
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordHint = document.getElementById('confirmPasswordHint');
const signupForm = document.getElementById('signupPassengerForm');

confirmPasswordInput.addEventListener('input', function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordHint.textContent = 'Passwords do not match!';
        confirmPasswordInput.setCustomValidity("Passwords don't match"); // For form validation API
    } else {
        confirmPasswordHint.textContent = ''; // Clear hint
        confirmPasswordInput.setCustomValidity(''); // Clear validation error
    }
});

 // Also check on password input change
 passwordInput.addEventListener('input', function() {
     if (confirmPasswordInput.value && passwordInput.value !== confirmPasswordInput.value) {
         confirmPasswordHint.textContent = 'Passwords do not match!';
         confirmPasswordInput.setCustomValidity("Passwords don't match");
     } else if (confirmPasswordInput.value) {
         confirmPasswordHint.textContent = '';
         confirmPasswordInput.setCustomValidity('');
     }
 });


// Handle form submission (Add actual submission logic here)
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission for now
    
     if (passwordInput.value !== confirmPasswordInput.value) {
         confirmPasswordHint.textContent = 'Passwords do not match!';
         confirmPasswordInput.focus(); // Bring focus to the mismatching field
         return; // Stop submission
     }

    console.log('Passenger Sign Up form submitted.');
    alert('Sign up successful (simulation)!');
    // Redirect or show success message
     // window.location.href = 'signin.html'; // Example redirect
});