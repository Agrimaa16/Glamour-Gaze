document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const email = document.querySelector('.id').value;
    const password = document.querySelector('.pass').value;

    
    const predefinedEmail = 'admin@example.com';
    const predefinedPassword = 'password123';

   
    if (email === predefinedEmail && password === predefinedPassword) {
        window.location.href = 'page.html';  
    } else {
        alert('Invalid email or password. Please try again.');
    }
});




