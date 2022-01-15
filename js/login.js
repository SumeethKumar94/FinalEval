"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const validationObjs = {};
function Required(target, name) {
    const className = target.constructor.name;
    validationObjs[className] = Object.assign(Object.assign({}, validationObjs[className]), { [name]: ['required'] });
}
function validate(obj) {
    let validatorName = validationObjs[obj.constructor.name];
    if (!validatorName) {
        return true;
    }
    let isValid = true;
    for (const prop in validatorName) {
        //console.log(prop);
        for (const validator of validatorName[prop]) {
            //console.log(validator);
            //check condition
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                // case 'positive':
                //     isValid = obj[prop]>0;
                // break;
            }
        }
    }
    return isValid;
}
class Users {
    constructor(_UserID, _password) {
        this.UserID = _UserID;
        this.Password = _password;
    }
}
__decorate([
    Required
], Users.prototype, "UserID", void 0);
__decorate([
    Required
], Users.prototype, "Password", void 0);
const UserName = document.querySelector('#login');
const Password = document.querySelector('#password');
const forms = document.querySelector('#form');
forms.addEventListener('submit', (event) => {
    event.preventDefault();
    const UserOne = UserName.value;
    const PasswordOne = Password.value;
    const UsersObj = new Users(UserOne, PasswordOne);
    if (!validate(UsersObj)) {
        alert("Enter Valid Input");
        return;
    }
    else {
        sampleLogin();
    }
    console.log(UsersObj);
});
function sampleLogin() {
    const login = document.getElementById("login");
    const password = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");
    const invalidLogin = document.querySelector("#invalidLogin");
    const loginValidator = (login, password) => {
        if (login === "user" && password === "password") {
            return true;
        }
        else {
            return false;
        }
    };
    const nullValueCheck = (login, password) => {
        if (login === "" && password === "") {
            return false;
        }
        else if (login.length < 3 || password.length < 5) {
            return false;
        }
        else {
            return true;
        }
    };
    loginBtn.addEventListener("click", () => {
        if (nullValueCheck(login.value, password.value)) {
            if (loginValidator(login.value, password.value)) {
                invalidLogin.innerHTML = "Login successful";
                window.location.href = "./dashboard.html";
            }
            else {
                invalidLogin.innerHTML = "Invalid login!, Please Enter valid login";
            }
        }
        else {
            invalidLogin.style.display = "block";
        }
    });
}
