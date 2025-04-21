const passwordContainers = document.querySelectorAll('.password-input-container');

passwordContainers.forEach(container => {
    const passwordInput = container.querySelector('input[type="password"], input[type="text"]'); // Handles toggled state
    const toggleIcon = container.querySelector('.password-toggle-icon i');

    if (passwordInput && toggleIcon) {
        toggleIcon.parentElement.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            toggleIcon.classList.toggle('fa-eye');
            toggleIcon.classList.toggle('fa-eye-slash');
        });
    }
});

const newPasswordInput = document.getElementById('newPassword');
const confirmPasswordInput = document.getElementById('confirmNewPassword');
const confirmPasswordHint = document.getElementById('confirmPasswordHint');
const createPasswordForm = document.getElementById('createPasswordForm');

function checkPasswordMatch() {
        if (newPasswordInput.value !== confirmPasswordInput.value) {
        confirmPasswordHint.textContent = 'Passwords do not match!';
        confirmPasswordInput.setCustomValidity("Passwords don't match");
        return false;
    } else {
        confirmPasswordHint.textContent = ''; 
        confirmPasswordInput.setCustomValidity('');
        return true;
    }
}

confirmPasswordInput.addEventListener('input', checkPasswordMatch);
newPasswordInput.addEventListener('input', () => {
        if(confirmPasswordInput.value){
            checkPasswordMatch();
        }
});

document.getElementById('confirm-pw-button').addEventListener('click', function() {
    let isMatch = checkPasswordMatch();
    let isNewPasswordValid = newPasswordInput.checkValidity(); 

        if (!newPasswordInput.reportValidity()) {
            newPasswordInput.focus();
            return; 
        }
        if (!confirmPasswordInput.reportValidity()) {
            confirmPasswordInput.focus();
            return; 
        }


    if (isMatch && isNewPasswordValid) {
        console.log('Passwords match and new password is valid.');
        alert('Password successfully reset!');
        window.location.href = 'signin.html';
    } else if (!isMatch) {
            alert('Passwords do not match. Please re-enter.');
            confirmPasswordInput.focus();
    } else {
            alert('New password does not meet the requirements.');
            newPasswordInput.focus();
    }
});