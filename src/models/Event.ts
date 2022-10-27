import {model, Schema} from "mongoose";


const Event = new Schema ({
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: String, required: true},
    dataTime: {type: String, required: true},
})

module.exports = model('Event', Event)