document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    signupBtn.addEventListener('click', () => {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    // Initialize the page with the login form active
    loginForm.classList.add('active');
});

function togglePassword(id) {
    const passwordField = document.getElementById(id);
    const showPasswordBtn = passwordField.nextElementSibling;
    if (passwordField.type === "password") {
        passwordField.type = "text";
        showPasswordBtn.classList.remove('fa-eye');
        showPasswordBtn.classList.add('fa-eye-slash');
    } else {
        passwordField.type = "password";
        showPasswordBtn.classList.remove('fa-eye-slash');
        showPasswordBtn.classList.add('fa-eye');
    }
}

// Handle form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = 'farmbudyy.html';
    });
});
