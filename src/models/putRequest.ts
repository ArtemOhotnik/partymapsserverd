const connect = require('../db/connect/connect')
import {ObjectId} from "mongodb";
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

export async function changeUsername( collection: string, ID: string, type: string, typeData: string) {

        const database = connect.client.db("insertDB");
        const movies = database.collection(collection);
        let ObjectId = require('mongodb').ObjectId;
        let id = ID;
        let o_id = new ObjectId(id);

        const selector = movies.updateOne(
            {_id:o_id},
            {$set: { username: typeData }}
        );


        return 200;


}

export async function changePassword( collection: string, ID: string, type: string, typeData: string) {
        const database = connect.client.db("insertDB");
        const movies = database.collection(collection);
        let ObjectId = require('mongodb').ObjectId;
        let id = ID;
        let o_id = new ObjectId(id);

        const selector = movies.updateOne(
            {_id:o_id},
            {$set: { password: typeData}}
        );


        return 200;


}

export async function putRequest(collection: string, ID: string, type: string, typeData: string) {
    try {

        const database = connect.client.db("insertDB");
        const movies = database.collection(collection);
        let ObjectId = require('mongodb').ObjectId;
        let id = ID;
        let o_id = new ObjectId(id);

        const selector = movies.updateOne(
            {_id:o_id},
            {$set: { type: typeData}}
        );


        return 200;
    }

    finally {

    }
}