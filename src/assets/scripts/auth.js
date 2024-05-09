const loginClick = document.getElementById('login');
const signupClick = document.getElementById('signup');
const loginModal = document.getElementById('login__modal');
const loginContentContainer = document.getElementById('login__content__container');
const signupModal = document.getElementById('user__signup__modal');
document.addEventListener('DOMContentLoaded', () => {
});

loginClick.addEventListener('click', loginModalHandler);
signupClick.addEventListener('click', signupModalHandler);
function loginModalHandler() {
    signupModal.classList.add('modal__closer');
    loginModal.classList.toggle('modal__opener')
}
function signupModalHandler() {
    loginModal.classList.add('modal__closer');
    signupModal.classList.toggle('modal__opener')
}

loginModal.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('login__modal')) {
        loginModal.classList.remove('modal__opener');
    }
})

signupModal.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('user__signup__modal')) {
        signupModal.classList.remove('modal__opener');
    }
})