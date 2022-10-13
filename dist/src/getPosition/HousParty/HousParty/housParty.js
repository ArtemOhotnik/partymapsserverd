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
exports.housPartyGetLotSelector = exports.housPartyGetID = exports.housPartyGetSelector = void 0;
const connect = require('../../../db/connect/connect');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
function housPartyGetSelector(type, SelectorData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = connect.client.db("insertDB");
            const movies = database.collection("Event");
            const selector = movies.find({ type: SelectorData });
            if ((yield selector.count()) === 0) {
                console.log("No documents found!");
            }
            // replace console.dir with your callback to access individual elements
            yield selector.forEach(console.dir);
        }
        finally {
        }
    });
}
exports.housPartyGetSelector = housPartyGetSelector;
function housPartyGetID(ID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = connect.client.db("insertDB");
            const movies = database.collection("Event");
            let ObjectId = require('mongodb').ObjectId;
            let id = ID;
            let o_id = new ObjectId(id);
            const selector = movies.find({ _id: o_id });
            if ((yield selector.count()) === 0) {
                console.log("No documents found!");
            }
            // replace console.dir with your callback to access individual elements
            yield selector.forEach(console.dir);
        }
        finally {
        }
    });
}
exports.housPartyGetID = housPartyGetID;
function housPartyGetLotSelector() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = connect.client.db("insertDB");
            const movies = database.collection("Event");
            const selector = movies.find({});
            if ((yield selector.count()) === 0) {
                console.log("No documents found!");
            }
            yield selector.forEach(console.dir);
        }
        finally {
        }
    });
}
exports.housPartyGetLotSelector = housPartyGetLotSelector;
