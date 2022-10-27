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
exports.putRequest = exports.changePassword = exports.changeUsername = void 0;
const connect = require('../db/connect/connect');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
function changeUsername(collection, ID, type, typeData) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = connect.client.db("insertDB");
        const movies = database.collection(collection);
        let ObjectId = require('mongodb').ObjectId;
        let id = ID;
        let o_id = new ObjectId(id);
        const selector = movies.updateOne({ _id: o_id }, { $set: { username: typeData } });
        return 200;
    });
}
exports.changeUsername = changeUsername;
function changePassword(collection, ID, type, typeData) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = connect.client.db("insertDB");
        const movies = database.collection(collection);
        let ObjectId = require('mongodb').ObjectId;
        let id = ID;
        let o_id = new ObjectId(id);
        const selector = movies.updateOne({ _id: o_id }, { $set: { password: typeData } });
        return 200;
    });
}
exports.changePassword = changePassword;
function putRequest(collection, ID, type, typeData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = connect.client.db("insertDB");
            const movies = database.collection(collection);
            let ObjectId = require('mongodb').ObjectId;
            let id = ID;
            let o_id = new ObjectId(id);
            const selector = movies.updateOne({ _id: o_id }, { $set: { type: typeData } });
            return 200;
        }
        finally {
        }
    });
}
exports.putRequest = putRequest;
