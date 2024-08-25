document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://localhost:3005/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (data.response && data.response.token) {
        localStorage.setItem('token', data.response.token);
        window.location.href = 'admin.html';
        console.log(token);
    } else {
        alert('Login failed');
    }
});
