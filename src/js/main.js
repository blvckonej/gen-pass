import '../scss/style.scss';

const passwordField = document.querySelector('.pass_field');
const inputLength = document.querySelector('.input_length');
const inputRange = document.querySelector('.input_rangefiled');
const inputNumber = document.querySelector('.input_number');
const inputSymbol = document.querySelector('.input_symbol');
const passBtn = document.querySelector('.pass_btn');
const numberString = '0123456789';
const symbolString = '@#$%^&*()[]-!';


inputRange.addEventListener('input', () => {
   inputLength.value = inputRange.value;
});
inputLength.addEventListener('input', () => {
   inputRange.value = inputLength.value;
});

passBtn.addEventListener('click', () => {
    let password = '';
    let lettersString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (inputNumber.checked) {
        lettersString += numberString
    }
    if (inputSymbol.checked) {
        lettersString += symbolString
    }

    for (let i = 0; i < inputLength.value; i++) {
        password += lettersString[Math.floor(Math.random() * lettersString.length)];
    }

    passwordField.textContent = password;
    if (password.length <= 6) {
        passwordField.classList.add('red')
    }
    if (password.length > 6 && password.length <= 8) {
        passwordField.classList.remove('red')
        passwordField.classList.add('orange')
    }
    if (password.length > 9) {
        passwordField.classList.remove('red')
        passwordField.classList.remove('orange')
        passwordField.classList.add('green');
    }
});