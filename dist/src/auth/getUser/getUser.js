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
exports.getUser = void 0;
const connect = require('../../db/connect/connect');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
function getUser(res, ID) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = connect.client.db("insertDB");
        const movies = database.collection("Client");
        let ObjectId = require('mongodb').ObjectId;
        let id = ID;
        let o_id = new ObjectId(id);
        const selector = movies.find({ _id: o_id });
        if ((yield selector.count()) === 0) {
            console.log("No documents found!");
        }
        yield selector.forEach(console.dir);
        return res.send(selector);
    });
}
exports.getUser = getUser;
