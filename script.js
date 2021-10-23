let empty = '';
let ucase = 'ABCDEFGHIJKLMNOPQWSTUVWXYZ';
let lcase = 'abcdefghijklmnopqrstuvwxyz';
let num = '0123456789';
let sym = '!@#$%^&*';

const password__length = document.querySelector('#password__length');
const password = document.querySelector('#password')
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbols');
const submit__button = document.querySelector('#submit');

submit__button.onclick = () => {
    let intarnalPassword = empty;
    (uppercase.checked) ? intarnalPassword += ucase: "";
    (lowercase.checked) ? intarnalPassword += lcase: "";
    (number.checked) ? intarnalPassword += num: "";
    (symbol.checked) ? intarnalPassword += sym: "";

    password.value = generate__password(password__length.value, intarnalPassword)
}

const generate__password = (langth, intarnalPassword) => {
    let pass = "";
    let intarnal__password__len = intarnalPassword.length
    for (let i = 0; i < langth; i++) {
        pass += intarnalPassword.charAt(Math.round(Math.random() * intarnal__password__len))
    }
    password.innerHTML = pass
    return pass
}

const copy = document.querySelector('#copy')
copy.onclick = () => {
    if (password.value == "") {
        alert("please generat a password")
    } else {
        password.select()
        document.execCommand('copy')
        alert("password has been copied to clipboard")
    }
}