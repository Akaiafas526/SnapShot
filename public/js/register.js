let myModal = new bootstrap.Modal(document.getElementById('registerModal'), {});


// Form sent to create a new user
const registerFormHandler = async function(event){
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-signup');
    const emailEl = document.querySelector('#email-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');

    const response = await fetch('/api/user', {
        method: 'POST', 
        body: JSON.stringify({
            username: usernameEl.value.trim(),
            email: emailEl.value.trim(),
            password: passwordEl.value.trim(),
        }),
        headers: { 'Content-Type': 'application/json'},
    });
    
    // If success, redirects to home page
    if(response.ok){
        document.location.replace('/');
    } else {

        // Error modal for failure to register
        myModal.show()
    }
};

document
.querySelector('#register-form')
.addEventListener('submit', registerFormHandler);