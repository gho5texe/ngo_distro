const signupForm = document.getElementById('signup__form');
const email = document.getElementById('email');
const dob = document.getElementById('dob');
const phone = document.getElementById('phone');
const state = document.getElementById('state');
const password = document.getElementById('password');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        email: email.value,
        dob: dob.value,
        phone: phone.value,
        state: state.value,
        password: password.value
    }
    axios.post('http://localhost:8080/register', data)
        .then(res => {
            if (res.data.error) {
                alert(res.data.error)
            } else {
                window.location.reload()
            }
        })
})