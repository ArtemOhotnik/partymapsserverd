import express =  require('express')
import {response} from "express";
const register = require("./register/register")
const login = require("./login/login")
const logoutFunc = require("./logout/logout")

export const app = express()


export const signup = async (res: any, usernameData: any, passwordData: any) => {
        register.register(res, usernameData, passwordData).catch(console.dir);
}

export const signin = async (res: any, username: any, password: any) => {
    login.login(res, username, password).catch(console.dir);
}

export const logout = async () => {
    logoutFunc.logout().catch(console.dir);
}



let bodyParser = require('body-parser');