const connect = require('../../db/connect/connect')
import {ObjectId} from "mongodb";

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

export async function logout() {
    try {
        const database = connect.client.db("insertDB");
        const movies = database.collection("Event");
        const selector = movies.find({

        })

        if ((await selector.count()) === 0) {

            console.log("No documents found!");

        }

        await selector.forEach(console.dir);

    }

    finally {

    }
}