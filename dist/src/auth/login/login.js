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
exports.login = void 0;
const connect = require('../../db/connect/connect');
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
function login(res, usernameData, passwordData) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = connect.client.db("insertDB");
        const movies = database.collection("Client");
        const user = yield movies.findOne({ username: usernameData });
        console.log(user);
        if (!user) {
            console.log("Dony have this user");
            return res.sendStatus(400);
        }
        else {
            console.log(user.password);
            console.log("Heelo");
            const validPassword = bcrypt.compareSync(passwordData, user.password);
            if (!validPassword) {
                console.log("Поганий пароль");
                return res.sendStatus(400);
            }
            console.log("Nice password");
            return res.sendStatus(200);
            return user._id;
        }
    });
}
exports.login = login;
