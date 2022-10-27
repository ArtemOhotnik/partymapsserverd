const connect = require('../../db/connect/connect')
import {ObjectId} from "mongodb";

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const putRequest = require("../../models/putRequest");

export async function ChangeUserName(ID: string, type: string, typeData: string) {
        putRequest.changeUsername("Client", ID, type, typeData).catch(console.dir)
}

export async function changePassword(ID: string, type: string, typeData: string) {
        putRequest.changePassword("Client", ID, type, typeData).catch(console.dir)
}