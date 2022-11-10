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
exports.register = void 0;
const connect = require('../../db/connect/connect');
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const User = require('../../models/User');
function register(res, usernameData, passwordData) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = connect.client.db("insertDB");
        const movies = database.collection("Client");
        const candidate = yield movies.findOne({ username: usernameData });
        console.log(candidate);
        if (candidate) {
            console.log("This username have");
            return console.log(400);
        }
        else {
            const user = [
                {
                    username: usernameData,
                    password: passwordData,
                    role: "default",
                },
            ];
            const options = { ordered: true };
            const result = yield movies.insertMany(user, options);
            console.log('201, ok');
            return res.sendStatus(200);
        }
    });
}
exports.register = register;
