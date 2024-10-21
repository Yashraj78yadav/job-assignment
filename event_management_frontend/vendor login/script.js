document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    
    if (userId ==='vendor' && password ==='123') {
        alert('Login Successful!');
        window.location.href = '../welcome vendor page/index.html';
    } else {
        alert('User Id and Password is not correct');
    }
});

// redirecting vendor signup page
document.getElementById('signup-btn').addEventListener('click', function() {
    alert('Redirecting to Vendor signup');
    window.location.href = '../vendor signup/index.html'; // Example of redirect
});
// redirecting vendor welcome page
document.getElementById('back-btn').addEventListener('click', function() {
    // alert('Redirecting to Vendor signup');
    window.location.href = '../welcome page/index.html'; // Example of redirect
});






