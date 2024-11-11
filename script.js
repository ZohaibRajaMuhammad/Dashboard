



// Select all page elements
const signupPage = document.getElementById('signup-page');
const loginPage = document.getElementById('login-page');
const dashboardPage = document.getElementById('dashboard-page');
const userInfoSection = document.getElementById('user-info');

// Sign Up Form
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Gather input data
    const user = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };
    
    // Store user data in localStorage
    localStorage.setItem(user.email, JSON.stringify(user));

    // Navigate to Login page
    signupPage.style.display = 'none';
    loginPage.style.display = 'block';
});

// Login Form
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem(email));
    
    if (user && user.password === password) {
        alert('Login Successful!');
        
        // Display user data on Dashboard
        displayUserData(user);
        
        // Navigate to Dashboard
        loginPage.style.display = 'none';
        dashboardPage.style.display = 'flex';
    } else {
        alert('Invalid email or password.');
    }
});

// Logout Functionality
document.getElementById('logout').addEventListener('click', () => {
    dashboardPage.style.display = 'none';
    loginPage.style.display = 'block';
    document.getElementById('login-form').reset();
});

// Display User Data in Dashboard
function displayUserData(user) {
    userInfoSection.innerHTML = `
        <h2>Welcome, ${user.firstname} ${user.lastname}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Username:</strong> ${user.username}</p>
    `;
}
