"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.signin = exports.signup = exports.app = void 0;
const express = require("express");
const register = require("./register/register");
const login = require("./login/login");
const logoutFunc = require("./logout/logout");
exports.app = express();
const signup = (res, usernameData, passwordData) => __awaiter(void 0, void 0, void 0, function* () {
    register.register(res, usernameData, passwordData).catch(console.dir);
});
exports.signup = signup;
const signin = (res, username, password) => __awaiter(void 0, void 0, void 0, function* () {
    login.login(res, username, password).catch(console.dir);
});
exports.signin = signin;
const logout = () => __awaiter(void 0, void 0, void 0, function* () {
    logoutFunc.logout().catch(console.dir);
});
exports.logout = logout;
let bodyParser = require('body-parser');
