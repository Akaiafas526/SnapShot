const logout = async function (event) {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/')
    } 
};

document
.querySelector('#logout')
?.addEventListener('click', logout);