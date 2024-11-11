function myFunction() {
    var a = 4;
    document.getElementById("demo").innerHTML = a*a;
}
const email = document.getElementById('email').ariaValueMax;
const pass = document.getElementById('password').ariaValueMax;
const age = document.getElementById('age').ariaValueMax;
const msgBox = document.getElementById('message').ariaValueMax;
if (email === '') {
    message = 'Kindly enter an email';
    msgBox.style.color = ''
}