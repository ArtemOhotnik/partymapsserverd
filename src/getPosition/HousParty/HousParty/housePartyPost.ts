import express = require('express')
const MongoClient = require('mongodb').MongoClient;

const app = express()
const uri = "mongodb+srv://ArtemOhotnik:95819581@cluster0.zq1wfxb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const Event = require("../../../models/Event")

export async function housPartyPost(latitude: number, longitude: number, type: string , info: string, price: number, dataTime: number) {
    try {
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


        })
        await EventModel.save()
      //  const options = { ordered: true };
        //const result = await homeEvent.insertMany(EventModel, options);
        console.log('201, ok');
    } finally {

    }
}
