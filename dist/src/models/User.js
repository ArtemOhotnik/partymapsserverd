"use strict";
const { Schema, model } = require("mongoose");
const User = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    age: { type: String, require: false },
    photo: { type: String, required: false },
    freeEvent: { type: Boolean, require: false, default: true },
    role: { type: String, require: true, default: "default" }
});
module.exports = model('User', User);
