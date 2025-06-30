document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const role = document.getElementById('role').value;
    
    if (role === 'admin') {
        window.location.href = 'admin_dashboard.html';
    } else if (role === 'librarian') {
        window.location.href = 'librarian_dashboard.html';
    } else {
        window.location.href = 'user_dashboard.html';
    }
});
