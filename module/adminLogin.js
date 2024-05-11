document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded admin credentials (for demonstration purposes)
    const adminCredentials = { username: 'admin', password: 'admin123' };

    if (username === adminCredentials.username && password === adminCredentials.password) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      window.location.href = 'module/adminLogin.html'; // Redirect to admin panel
    } else {
      alert('Invalid credentials');
    }
  });
  function redirectToUser(){
      window.location.href = 'user.html';
}