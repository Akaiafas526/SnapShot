// const loginModal = document.querySelector('#loginModal');
let myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});

// Form data from login page sent to user routes for verification
const loginFormHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');

    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    // Redirects to home page if successful
    if (response.ok) {
        document.location.replace('/')
    } else {

        // Shows error modal on failed attempt
        myModal.show();
    }
};

document
.querySelector('#login-form')
.addEventListener('submit', loginFormHandler);