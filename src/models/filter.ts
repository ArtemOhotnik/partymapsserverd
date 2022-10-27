import {model, Schema} from "mongoose";


const Filter = new Schema ({
    latitude: {type: String},
    longitude: {type: String},
    type: {type: String},

    price: {type: String},
    dataTime: {type: String},
})

module.exports = model('Filter', Filter)