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
exports.housPartyPost = void 0;
const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const app = express();
const uri = "mongodb+srv://ArtemOhotnik:95819581@cluster0.zq1wfxb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const Event = require("../../../models/Event");
function housPartyPost(res, latitude, longitude, type, info, price, dataTime) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = client.db("insertDB");
        const homeEvent = database.collection("Event");
        /* const docs = [
             {
                 latitude: latitude,
                 longitude: longitude,
                 type: type,
                 info: info,
                 price: price,
                 dataTime: dataTime,
             },
         ];*/
        const EventModel = new Event({
            latitude: latitude,
            longitude: longitude,
            type: type,
            info: info,
            price: price,
            dataTime: dataTime,
        });
        yield EventModel.save();
        //  const options = { ordered: true };
        //const result = await homeEvent.insertMany(EventModel, options);
        console.log('201, ok');
        return res.sendStatus(200);
    });
}
exports.housPartyPost = housPartyPost;
