import express = require('express')
import {ObjectId} from "mongodb";

    export const MongoClient = require('mongodb').MongoClient;
    export const mongoose = require('mongoose');

    const app = express()
    export const uri = "mongodb+srv://ArtemOhotnik:95819581@cluster0.zq1wfxb.mongodb.net/?retryWrites=true&w=majority";
    export const client = new MongoClient(uri, { useUnifiedTopology: true}, { useNewUrlParser: true }, { connectTimeoutMS: 30000 }, { keepAlive: 1});




