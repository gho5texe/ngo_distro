const loginUser = document.getElementById('login__user');
const loginForm = document.getElementById('login__form');
const loginEmail = document.getElementById('login__email');
const loginPassword = document.getElementById('login__password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = loginUser.value;
    const email = loginEmail.value;
    const password = loginPassword.value;
    axios.post('http://localhost:8080/login', {
        user: user,
        email: email,
        password: password
    }).then((response) => {
        if (response.status === 200) {
            window.location.reload();
        } else {
            alert(response.data)
        }
    }
    ).catch((error) => {
        alert('Invalid email or password. Please try again.')
    })
})