const registerFormHandler = async function(event){
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-signup');
    const emailEl = document.querySelector('#email-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');

    const response = await fetch('/api/user', {
        method: 'POST', 
        body: JSON.stringify({
            username: usernameEl.value,
            email: emailEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json'},
    });
    
    if(response.ok){
        document.location.replace('/');
    } 
};

document
.querySelector('#register-form')
.addEventListener('submit', registerFormHandler);