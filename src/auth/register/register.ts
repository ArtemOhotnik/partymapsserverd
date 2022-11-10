import {client} from "../../db/connect/connect";

const connect = require('../../db/connect/connect')
import express =  require('express')
import {ObjectId} from "mongodb";
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const User = require('../../models/User')

export async function register(res: any, usernameData: any, passwordData: any) {
        const database = connect.client.db("insertDB");
        const movies = database.collection("Client");


        const candidate = await movies.findOne({username: usernameData})
        console.log(candidate)
        if (candidate) {
            console.log("This username have")
            return console.log(400)
        } else {
            const user = [
                {
                    username: usernameData,
                    password: passwordData,
                    role: "default",

                },
            ];

            const options = { ordered: true };
            const result = await movies.insertMany(user, options);
            console.log('201, ok');
            return res.sendStatus(200)

        }
    }
