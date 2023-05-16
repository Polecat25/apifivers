"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodPass = exports.GoodEmail = void 0;
const isEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const isPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const GoodPass = (pass) => {
    return isPass.test(pass);
};
exports.GoodPass = GoodPass;
const GoodEmail = (email) => {
    return isEmail.test(email);
};
exports.GoodEmail = GoodEmail;
