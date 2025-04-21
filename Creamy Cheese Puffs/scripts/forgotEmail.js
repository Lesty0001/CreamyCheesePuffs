document.getElementById('resendCodeBtn').addEventListener('click', function() {
    alert('Verification code resent (simulation).');
    this.disabled = true;
    this.textContent = 'Resending...';
    setTimeout(() => {
        this.disabled = false;
        this.textContent = 'Resend Code';
    }, 30000);
});

document.getElementById('next-button').addEventListener('click', function() {
    const codeInput = document.getElementById('verification-code');
    const code = codeInput.value;

    if (code && code.length === 6 && /^\d{6}$/.test(code)) {
        console.log('Verification code entered:', code);
        window.location.href = 'createPassword.html'; 
    } else {
        alert('Please enter the 6-digit verification code.');
        codeInput.focus();
    }
});
