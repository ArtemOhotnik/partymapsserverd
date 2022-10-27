const connect = require('../../../db/connect/connect')
import {ObjectId} from "mongodb";
const filterSchema = require("../../../models/filter")
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const putRequest = require("../../../models/putRequest");

export async function EventPut(ID: string, type: string, typeData: string) {
        putRequest.putRequest("Event", ID, type, typeData).catch(console.dir)
}