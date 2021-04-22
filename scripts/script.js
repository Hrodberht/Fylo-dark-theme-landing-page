const emailFormat = /\S+@\S+\.\S+/;
const email = document.getElementById('email');
const error = document.getElementById('subscribe__error');
const button = document.getElementById('button');

function showError () {
    error.classList.remove('hidden');
}

function hideError () {
    error.classList.add('hidden');
}

function validate () {
    let emailValue = email.value;

    if (emailValue.match(emailFormat)) {
        hideError();
    } else {
        showError();
    }
}

button.addEventListener('click', validate);
