document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate name
    if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters long.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate phone
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Validate message
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
        isValid = false;
    }

    // If form is valid, submit the form (here we just log the data)
    if (isValid) {
        console.log('Form submitted successfully!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);
        alert('Form submitted successfully!');
    }
});
