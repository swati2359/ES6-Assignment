import { UserLogin } from '../js/user-login';

let users = [
    {
        "userName": "testUser1@nagarro.com",
        "password": "testUser1"
    },
    {
        "userName": "testUser2@nagarro.com",
        "password": "testUser2"
    },
    {
        "userName": "testUser3@nagarro.com",
        "password": "testUser3"
    },
    {
        "userName": "testUser4@nagarro.com",
        "password": "testUser4"
    },
    {
        "userName": "testUser5@nagarro.com",
        "password": "testUser5"
    }
];

describe('User Login', () => {
    it('validate user with valid credentials', () => {
        let userLogin = new UserLogin();
        let userName = "testUser1@nagarro.com";
        let password = "testUser1";
        let isValid = userLogin.checkUser(users, userName, password);
        expect(isValid).toBe(true);
    });


    it('validate user with wrong user name and valid password', () => {
        let userName = "abc@nagarro.com";
        let password = "testUser1";
        let userLogin = new UserLogin();
        let isValid = userLogin.checkUser(users, userName, password);
        expect(isValid).toBe(false);
    });

    it('validate user with wrong password and valid user name', () => {
        let userName = "testUser1@nagarro.com";
        let password = "abc";
        let userLogin = new UserLogin();
        let isValid = userLogin.checkUser(users, userName, password);
        expect(isValid).toBe(false);
    });

    it('validate user with empty username and password', () => {
        let userName = "";
        let password = "";
        let userLogin = new UserLogin();
        let isValid = userLogin.checkUser(users, userName, password);
        expect(isValid).toBe(false);
    });

    it('validate user with empty users', () => {
        let userName = "";
        let password = "";
        let userLogin = new UserLogin();
        let isValid = userLogin.checkUser(null, userName, password);
        expect(isValid).toBe(false);
    });

});