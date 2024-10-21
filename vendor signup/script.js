document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const category = document.getElementById('category').value;
    
    if (name && email && password && category) {
        alert('Sign Up Successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
