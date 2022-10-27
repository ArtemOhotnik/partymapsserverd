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
exports.changePassword = exports.ChangeUserName = void 0;
const connect = require('../../db/connect/connect');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const putRequest = require("../../models/putRequest");
function ChangeUserName(ID, type, typeData) {
    return __awaiter(this, void 0, void 0, function* () {
        putRequest.changeUsername("Client", ID, type, typeData).catch(console.dir);
    });
}
exports.ChangeUserName = ChangeUserName;
function changePassword(ID, type, typeData) {
    return __awaiter(this, void 0, void 0, function* () {
        putRequest.changePassword("Client", ID, type, typeData).catch(console.dir);
    });
}
exports.changePassword = changePassword;
