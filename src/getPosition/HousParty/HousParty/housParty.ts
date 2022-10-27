const connect = require('../../../db/connect/connect')
import {ObjectId} from "mongodb";
const filterSchema = require("../../../models/filter")
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');


export async function housPartyGetSelector(res: any, type: string, SelectorData: string) {

            const database = connect.client.db("insertDB");
            const movies = database.collection("Event");
            const selector = movies.find({ type : SelectorData })

            if ((await selector.count()) === 0) {

                  console.log("No documents found!");

            }

            // replace console.dir with your callback to access individual elements

            await selector.forEach(console.dir);
            return selector
            return res.sendStatus(200)
}


export async function housPartyGetID(res: any, ID: string) {
            const database = connect.client.db("insertDB");
            const movies = database.collection("Event");
            let ObjectId = require('mongodb').ObjectId;
            let id = ID;
            let o_id = new ObjectId(id);

            const selector = movies.find({_id:o_id});



            if ((await selector.count()) === 0) {

                  console.log("No documents found!");

            }

            // replace console.dir with your callback to access individual elements

            await selector.forEach(console.dir);
            return selector
            return res.sendStatus(200)
}

export async function housPartyGetLotSelector(res: any, latitude: number, longitude: number, type: string, price: number, dataTime: number) {
            const database = connect.client.db("insertDB");
            const movies = database.collection("Event");

            let boolType
            let boolLT
            let boolLG
            let boolPrise
            let boolDataTime

            if(type == "null") {
                  boolType = false
            } else {
                  boolType = true
            }

            if(String(latitude) == "null") {
                  boolLT = false
            } else {
                  boolLT = true
            }

            if(String(longitude) == "null") {
                  boolLG = false
            } else {
                  boolLG = true
            }

            if(String(price) == "null") {
                  boolPrise = false
            } else {
                  boolPrise = true
            }

            if(String(dataTime) == "null") {
                  boolDataTime = false
            } else {
                  boolDataTime = true
            }

            const selector = movies.find({
                  'latitude': boolLT ? latitude : { $exists: true, $ne: null },
                  'longitude': boolLG ? longitude : { $exists: true, $ne: null },
                  'type': boolType ? type : { $exists: true, $ne: null },
                  'price': boolPrise ? price : { $exists: true, $ne: null },
                  'dataTime': boolDataTime ? dataTime : { $exists: true, $ne: null },
            })

            if ((await selector.count()) === 0) {

                  console.log("No documents found!");

            }

            await selector.forEach(console.dir);
            return selector
            return res.sendStatus(200)

}