const connect = require('../../../db/connect/connect')
import {ObjectId} from "mongodb";

      const MongoClient = require('mongodb').MongoClient;
      const mongoose = require('mongoose');


export async function housPartyGetSelector(type: string, SelectorData: string) {
      try {
            const database = connect.client.db("insertDB");
            const movies = database.collection("Event");
            const selector = movies.find({ type : SelectorData })

            if ((await selector.count()) === 0) {

                  console.log("No documents found!");

            }

            // replace console.dir with your callback to access individual elements

            await selector.forEach(console.dir);
            return selector

      }

      finally {

      }

}


export async function housPartyGetID(ID: string) {
      try {

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
      }

      finally {

      }

}
export async function housPartyGetLotSelector() {
      try {
            const database = connect.client.db("insertDB");
            const movies = database.collection("Event");
            const selector = movies.find({

            })

            if ((await selector.count()) === 0) {

                  console.log("No documents found!");

            }

            await selector.forEach(console.dir);
            return selector

      }

      finally {

      }
}