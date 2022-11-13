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
const filterSchema = require("../../../models/filter");
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
function housPartyGetSelector(res, type, SelectorData) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = connect.client.db("insertDB");
        const movies = database.collection("Event");
        const selector = movies.find({ type: SelectorData });
        if ((yield selector.count()) === 0) {
            console.log("No documents found!");
        }
        const preResponse = selector.forEach(console.dir);
        const response = JSON.stringify(preResponse);
        res.json(response || {});
        return res.sendStatus(200);
        return response;
    });
}
exports.housPartyGetSelector = housPartyGetSelector;
function housPartyGetID(res, ID) {
    return __awaiter(this, void 0, void 0, function* () {
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
        const response = selector;
        res.json(response || {});
        return res.sendStatus(200);
    });
}
exports.housPartyGetID = housPartyGetID;
function housPartyGetLotSelector(res, latitude, longitude, type, price, dataTime) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = connect.client.db("insertDB");
        const movies = database.collection("Event");
        let boolType;
        let boolLT;
        let boolLG;
        let boolPrise;
        let boolDataTime;
        if (type == "null") {
            boolType = false;
        }
        else {
            boolType = true;
        }
        if (String(latitude) == "null") {
            boolLT = false;
        }
        else {
            boolLT = true;
        }
        if (String(longitude) == "null") {
            boolLG = false;
        }
        else {
            boolLG = true;
        }
        if (String(price) == "null") {
            boolPrise = false;
        }
        else {
            boolPrise = true;
        }
        if (String(dataTime) == "null") {
            boolDataTime = false;
        }
        else {
            boolDataTime = true;
        }
        const selector = movies.find({
            'latitude': boolLT ? latitude : { $exists: true, $ne: null },
            'longitude': boolLG ? longitude : { $exists: true, $ne: null },
            'type': boolType ? type : { $exists: true, $ne: null },
            'price': boolPrise ? price : { $exists: true, $ne: null },
            'dataTime': boolDataTime ? dataTime : { $exists: true, $ne: null },
        });
        if ((yield selector.count()) === 0) {
            console.log("No documents found!");
        }
        yield selector.forEach(console.dir);
        const response = selector;
        res.json(response || {});
        return res.sendStatus(200);
    });
}
exports.housPartyGetLotSelector = housPartyGetLotSelector;
