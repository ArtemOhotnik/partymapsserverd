"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.uri = exports.mongoose = exports.MongoClient = void 0;
const express = require("express");
exports.MongoClient = require('mongodb').MongoClient;
exports.mongoose = require('mongoose');
const app = express();
exports.uri = "mongodb+srv://ArtemOhotnik:95819581@cluster0.zq1wfxb.mongodb.net/?retryWrites=true&w=majority";
exports.client = new exports.MongoClient(exports.uri, { useUnifiedTopology: true }, { useNewUrlParser: true }, { connectTimeoutMS: 30000 }, { keepAlive: 1 });
