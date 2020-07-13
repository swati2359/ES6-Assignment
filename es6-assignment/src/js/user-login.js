import { AuthenticateService } from '../../services/aunthenticate-service.js';

export class UserLogin {
    validateUser() {
        let userName = document.querySelector('.user-name');
        let userPassword = document.querySelector('.user-pass');
        let isValid;
        let name = userName.value.trim();
        let password = userPassword.value.trim();
        var auth = new AuthenticateService();
        if (name != "" && password != "") {
            let users = auth.fetchUsers();
            isValid = this.checkUser(users, name, password);
        }
        else {
            isValid = false;
        }
        if (isValid) {
            window.location.replace("../dashboard.html")
        }
        else {
            document.querySelector('#error-msg').classList.remove("hidden");
        }
    }

    checkUser(users, name, password) {
        var isValid = false;
        if (users) {
            if (users.find(user => user.userName.toUpperCase() == name.toUpperCase()
                && user.password == password)) {
                isValid = true;
            }
        }
        return isValid;

    }
}
