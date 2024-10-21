// Basic JavaScript functionality for navigation buttons
document.getElementById('chart').addEventListener('click', function() {
    alert('Chart button clicked');
});

document.getElementById('back').addEventListener('click', function() {
    alert('Back button clicked');
});

document.getElementById('signup').addEventListener('click', function() {
    alert('Sign Up button clicked');
});

// redirecting back to the login page
document.getElementById('back').addEventListener('click', function() {
    // alert('Redirecting to user signup');
    window.location.href = '../user login/index.html'; // Example of redirect
});