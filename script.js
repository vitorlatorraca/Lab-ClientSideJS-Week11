document.getElementById('modern-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const message = document.getElementById('message');

    // Clear previous messages
    message.style.color = '#f44336';
    message.style.visibility = 'hidden';
    
    // Basic validation for empty fields
    if (!name || !email || !password || !confirmPassword || !phone || !dob) {
        message.textContent = "Please fill in all fields!";
        message.style.visibility = 'visible';
        return;
    }

    // Password match validation
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

    // Basic Phone Validation
    const phonePattern = /^\+?\d{10,15}$/;
    if (!phonePattern.test(phone)) {
        message.textContent = "Invalid phone number!";
        message.style.visibility = 'visible';
        return;
    }

    // Date of Birth validation: user must be at least 18 years old
    const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    if (age < 18) {
        message.textContent = "You must be at least 18 years old!";
        message.style.visibility = 'visible';
        return;
    }

    // Clear the form
    document.getElementById('modern-form').reset();
    message.textContent = "Registration successful!";
    message.style.color = '#00bcd4';
    message.style.visibility = 'visible';
});
