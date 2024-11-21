const passwordBox = document.getElementById("password");
const length = 12;
const btn = document.querySelector("#btn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^&*()_+~<>{}=-_?/|";
const allChar = upperCase + lowerCase + num + symbol;

btn.addEventListener('click', () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while (password.length < length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    
    passwordBox.value = password;
});