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
        try {
            const database = connect.client.db("insertDB");
            const movies = database.collection("Client");
            /* const username = usernameData;
             const salt = await bcrypt.genSaltSync(10);
             const password = bcrypt.hashSync(passwordData, salt);
             //console.log(username, password)
             const candidate = await movies.findOne({username})
             console.log(candidate)
             if (candidate) {
                 console.log("This username have")
                 return res.status(400)
             } else {
     
                 // const user = new User({username, password: hashPassword})
                 const options = { ordered: true };
                 const result = await movies.insertMany([{username, password}], options);
                 console.log('201, ok');
                 res.sendStatus(200)
                 // return res.json({message: "Пользователь успешно зарегистрирован"})*/
            const candidate = yield movies.findOne({ username: usernameData });
            console.log(candidate);
            if (candidate) {
                console.log("This username have");
                return console.log(400);
            }
            else {
                const hashPassword = bcrypt.hashSync(passwordData, 7);
                const user = [
                    {
                        username: usernameData,
                        password: hashPassword,
                        role: "default",
                    },
                ];
                const options = { ordered: true };
                const result = yield movies.insertMany(user, options);
                console.log('201, ok');
            }
        }
        finally {
        }
    });
}
exports.register = register;
