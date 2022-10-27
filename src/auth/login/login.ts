import e from "express";
const connect = require('../../db/connect/connect')
import {MongoUnexpectedServerResponseError, ObjectId} from "mongodb";
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

export async function login(res: any, usernameData: any, passwordData: any) {
    try {
        const database = connect.client.db("insertDB");
        const movies = database.collection("Client");

        const user = await movies.findOne({username: usernameData})
        console.log(user)
        if(!user) {
            console.log("Dony have this user")
            return res.sendStatus(400)
        }
        else {
            console.log(user.password)
            console.log("Heelo")

            const validPassword = bcrypt.compareSync(passwordData, user.password)

            if(!validPassword) {
                console.log("Поганий пароль")
                return res.sendStatus(400)
            }


            console.log("Nice password")
            return res.sendStatus(200)
            return user._id


        }


    }

    finally {

    }
}