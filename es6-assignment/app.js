import { UserLogin } from './src/js/user-login.js';

let userLogin = new UserLogin();
const btnSubmit = document.querySelector('.btnSubmit');
btnSubmit.addEventListener('click', () => userLogin.validateUser());
document.addEventListener("keypress", () => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        userLogin.validateUser();
    }
});
