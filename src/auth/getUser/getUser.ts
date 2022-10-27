const connect = require('../../db/connect/connect')
import {ObjectId} from "mongodb";
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

export async function getUser(ID: string) {
    try {
        const database = connect.client.db("insertDB");
        const movies = database.collection("Client");
        let ObjectId = require('mongodb').ObjectId;
        let id = ID;
        let o_id = new ObjectId(id);
        const selector = movies.find({_id:o_id});

        if ((await selector.count()) === 0) {
            console.log("No documents found!");

        }

        await selector.forEach(console.dir);
        return selector
    }

    finally {

    }

}