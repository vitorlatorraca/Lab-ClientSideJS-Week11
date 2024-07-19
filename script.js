document.getElementById('modern-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.visibility = 'visible';
        return;
    }

    // Basic Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Invalid email address!";
        message.style.visibility = 'visible';
        return;
    }

    // Clear the form
    document.getElementById('modern-form').reset();
    message.textContent = "Registration successful!";
    message.style.color = '#00bcd4';
    message.style.visibility = 'visible';
});
